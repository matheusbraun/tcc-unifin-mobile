import React, { useEffect, useState, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import {
  requestPermissionsAsync,
  getCurrentPositionAsync,
} from 'expo-location';
import { FontAwesome5 } from '@expo/vector-icons';

import MapMarker from '../../components/MapMarker';
import { searchPets } from '../../services/api';
import { FilterContext } from '../../context/filter';
import { connect, disconnect, subscribeToNewPets } from '../../services/socket';

import styles from './styles';

const Main = ({ navigation }) => {
  const [currentRegion, setCurrentRegion] = useState(null);
  const [pets, setPets] = useState([]);

  const { filter, setNewFilter } = useContext(FilterContext);

  useEffect(() => {
    (async () => {
      const { granted } = await requestPermissionsAsync();

      if (granted) {
        const { coords } = await getCurrentPositionAsync({
          enableHighAccuracy: true,
        });

        const { latitude, longitude } = coords;

        const userRegion = {
          latitude,
          longitude,
          latitudeDelta: 0.0143,
          longitudeDelta: 0.0134,
        };

        setCurrentRegion({ ...userRegion });

        setNewFilter({ ...filter, ...userRegion });
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const response = await searchPets(filter);

      setPets(response);

      setupWebsocket();
    })();
  }, [currentRegion, filter]);

  useEffect(() => {
    subscribeToNewPets((pet) => setPets([...pets, pet]));
  }, [pets]);

  const setupWebsocket = () => {
    disconnect();

    connect(filter);
  };

  const handleRegionChange = (region) => {
    setCurrentRegion(region);

    setNewFilter({ ...filter, ...region });
  };

  if (!currentRegion) return null;

  const handleButtonClick = (page, props = {}) => {
    navigation.navigate(page, props);
  };

  return (
    <>
      <MapView
        onRegionChangeComplete={handleRegionChange}
        initialRegion={currentRegion}
        style={styles.map}
        showsUserLocation
        loadingEnabled
      >
        {pets.map((pet) => (
          <MapMarker pet={pet} key={pet._id} navigation={navigation} />
        ))}
      </MapView>

      <View style={styles.bottomButtons}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() =>
            handleButtonClick('Filter', {
              region: currentRegion,
            })
          }
        >
          <FontAwesome5 name="filter" size={20} color="#FFF" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() =>
            handleButtonClick('Form', {
              latitude: currentRegion.latitude,
              longitude: currentRegion.longitude,
            })
          }
        >
          <FontAwesome5 name="plus" size={25} color="#FFF" />
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Main;

import React from 'react';
import { Image, View, Text } from 'react-native';
import { Marker, Callout } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './styles';

const MapMarker = ({ pet, navigation }) => {
  return (
    <Marker
      coordinate={{
        latitude: pet.location.coordinates[1],
        longitude: pet.location.coordinates[0],
      }}
    >
      {/*dog - cat - paw */}
      <FontAwesome5 name="cat" size={30} color="red" />

      <Callout
        onPress={() => {
          navigation.navigate('Details');
        }}
      >
        <View style={styles.callout}>
          <Text style={styles.title}>{pet.title}</Text>
          <Text style={styles.description}>{pet.description}</Text>
          <Text style={styles.details}>Clique para ver mais detalhes</Text>
        </View>
      </Callout>
    </Marker>
  );
};
export default MapMarker;

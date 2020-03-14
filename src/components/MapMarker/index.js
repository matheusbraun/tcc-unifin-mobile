import React from 'react';
import { Marker } from 'react-native-maps';
import { FontAwesome5 } from '@expo/vector-icons';

import MarkerPopUp from '../MarkerPopUp';
import styles from './styles';

const MapMarker = ({ pet, navigation }) => {
  return (
    <Marker
      coordinate={{
        latitude: pet.location.coordinates[1],
        longitude: pet.location.coordinates[0],
      }}
    >
      <FontAwesome5 name={pet.pet_type} size={30} color="#A80874" />

      <MarkerPopUp pet={pet} navigation={navigation} />
    </Marker>
  );
};
export default MapMarker;

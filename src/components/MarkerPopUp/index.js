import React from 'react';
import { View, Text } from 'react-native';
import { Callout } from 'react-native-maps';

import { truncateStringAndAddThreeDots } from '../../utils/stringUtils';

import styles from './styles';

const MarkerPopUp = ({ pet, navigation }) => (
  <Callout
    onPress={() => {
      navigation.navigate('Details', {
        pet,
      });
    }}
  >
    <View style={styles.callout}>
      <Text style={styles.title}>{pet.title}</Text>
      <Text style={styles.description}>
        {truncateStringAndAddThreeDots(pet.description, 100)}
      </Text>
      <Text style={styles.details}>Clique para ver mais detalhes</Text>
    </View>
  </Callout>
);

export default MarkerPopUp;

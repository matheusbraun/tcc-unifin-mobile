import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Slider } from 'react-native';
import { RadioGroup } from 'react-native-btr';

import { FilterContext } from '../../context/filter';
import { useState } from 'react';

import styles from './styles';

const Filter = ({ navigation }) => {
  const { filter, setNewFilter } = useContext(FilterContext);

  const initialRadioButtons = [
    { label: 'Gato', value: 'cat', checked: filter.specie === 'cat' },
    { label: 'Cachorro', value: 'dog', checked: filter.specie === 'dog' },
    { label: 'Ambos', value: '', checked: !filter.specie },
  ];

  const [distance, setDistance] = useState(filter.distance);
  const [radioButtons, setRadioButtons] = useState(initialRadioButtons);

  const handleApplyFilter = () => {
    const specie = radioButtons.find(species => species.checked).value;

    const newFilter = {
      specie,
      distance,
    };

    setNewFilter({ ...filter, ...newFilter });

    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Espécie</Text>
      <RadioGroup
        radioButtons={radioButtons}
        style={styles.radioButton}
        onPress={radioButtons => setRadioButtons(radioButtons)}
        color="#8E4DFF"
      />

      <Text style={styles.label}>Distância</Text>
      <View style={styles.sliderContainer}>
        <Slider
          minimumValue={1}
          maximumValue={50}
          style={styles.slider}
          step={1}
          value={distance}
          onValueChange={value => setDistance(value)}
          thumbTintColor="#8E4DFF"
        />
        <Text style={styles.sliderText}>{`${distance} km`}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleApplyFilter}
        underlayColor="#fff"
      >
        <Text style={styles.buttonText}>Aplicar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Filter;

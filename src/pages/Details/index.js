import React from 'react';
import { Text, ScrollView, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

const Details = ({ navigation }) => {
  const pet = navigation.getParam('pet', {});

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{pet.title}</Text>

      <Image
        style={styles.image}
        source={{
          uri: pet.image_url,
        }}
      />

      <Text style={styles.description}>{pet.description}</Text>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Details;

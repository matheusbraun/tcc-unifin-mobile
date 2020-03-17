import React from 'react';
import {
  View,
  Text,
  Image,
  Button,
  TouchableOpacity,
  TouchableHighlight,
  ScrollView,
} from 'react-native';
import { Formik } from 'formik';
import * as ImagePicker from 'expo-image-picker';
import { useActionSheet } from '@expo/react-native-action-sheet';
import { RadioGroup } from 'react-native-btr';

import FormField from '../../components/FormField';
import FormValidationSchema from '../../validations/FormValidationSchema';
import styles from './styles';
import { createLostPet } from '../../services/api';

const Form = ({ navigation }) => {
  const { showActionSheetWithOptions } = useActionSheet();

  const { latitude, longitude } = navigation.state.params;

  const handleOpenActionSheet = (setFieldTouched, setFieldValue) => {
    const options = ['Selecione uma foto', 'Tire uma foto', 'Cancelar'];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex === 0) selectPicture(setFieldTouched, setFieldValue);
        else if (buttonIndex === 1) takePicture(setFieldTouched, setFieldValue);
      },
    );
  };

  const selectPicture = async (setFieldTouched, setFieldValue) => {
    const { status } = await ImagePicker.getCameraRollPermissionsAsync();
    if (status !== 'granted') {
      const {
        status: statusPermission,
      } = await ImagePicker.requestCameraRollPermissionsAsync();

      if (statusPermission !== 'granted') {
        alert('A permissão para acessar suas imagens é necessária!');
        return;
      }
    }

    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    setFieldTouched('uri');

    if (cancelled) return;

    setFieldValue('uri', uri);
  };

  const takePicture = async (setFieldTouched, setFieldValue) => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== 'granted') {
      const {
        status: statusPermission,
      } = await ImagePicker.requestCameraPermissionsAsync();

      if (statusPermission !== 'granted') {
        alert('A permissão para acessar sua câmera é necessária!');
        return;
      }
    }

    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    setFieldTouched('uri');

    if (cancelled) return;

    setFieldValue('uri', uri);
  };

  const handleRadioButtonChange = (radios, setFieldTouched, setFieldValue) => {
    setFieldTouched('specie');

    const { value } = radios.find(radio => {
      return radio.checked === true;
    });

    setFieldValue('specie', value);
  };

  const onSubmit = async values => {
    const { title, description, specie, uri } = values;

    const uriSplit = uri.split('.');
    const imageType = uriSplit[uriSplit.length - 1];

    const ext = imageType.toLowerCase() === 'heic' ? 'jpg' : imageType;

    const petImage = {
      uri,
      type: `image/${ext}`,
      name: `petImage.${ext}`,
    };

    const data = new FormData();

    data.append('title', title);
    data.append('description', description);
    data.append('specie', specie);
    data.append('latitude', latitude);
    data.append('longitude', longitude);
    data.append('petImage', petImage);

    await createLostPet(data);

    navigation.goBack();
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={{ title: '', description: '', specie: '', uri: '' }}
      validationSchema={FormValidationSchema}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        touched,
        errors,
        setFieldTouched,
        setFieldValue,
      }) => (
        <ScrollView style={styles.container}>
          <FormField
            placeholder="Cachorro/Gato perdido/roubado"
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.title}
            styleName="formInput"
            name="title"
            touched={touched}
            errors={errors}
            label="Título"
          />
          <FormField
            placeholder="Descreva o ocorrido, dê informações sobre o pet, meios para contato..."
            handleChange={handleChange}
            handleBlur={handleBlur}
            value={values.description}
            multiline={true}
            styleName="formInputArea"
            name="description"
            touched={touched}
            errors={errors}
            label="Descrição"
          />

          <Text style={styles.label}>Espécie</Text>
          <RadioGroup
            radioButtons={[
              { label: 'Gato', value: 'cat' },
              { label: 'Cachorro', value: 'dog' },
            ]}
            onPress={radios =>
              handleRadioButtonChange(radios, setFieldTouched, setFieldValue)
            }
            value={values.specie}
            style={styles.radioButton}
            color="#8E4DFF"
          />
          {touched.specie && errors.specie && (
            <Text style={styles.errorMessage}>{errors.specie}</Text>
          )}

          <TouchableOpacity
            onPress={() =>
              handleOpenActionSheet(setFieldTouched, setFieldValue)
            }
          >
            <View style={styles.imageContainer}>
              {values.uri ? (
                <Image
                  style={styles.image}
                  source={{
                    uri: values.uri,
                  }}
                />
              ) : (
                <View style={styles.selectImageTextContainer}>
                  <Text style={styles.selectImageText}>
                    Selecione uma imagem...
                  </Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
          {touched.uri && errors.uri && (
            <Text style={styles.errorMessage}>{errors.uri}</Text>
          )}

          <TouchableHighlight
            style={styles.button}
            onPress={handleSubmit}
            underlayColor="#fff"
          >
            <Text style={styles.buttonText}>Salvar</Text>
          </TouchableHighlight>
        </ScrollView>
      )}
    </Formik>
  );
};

export default Form;

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

const Form = () => {
  const { showActionSheetWithOptions } = useActionSheet();

  const handleOpenActionSheet = () => {
    const options = ['Selecione uma foto', 'Tire uma foto', 'Cancelar'];
    const cancelButtonIndex = 2;

    showActionSheetWithOptions(
      {
        options,
        cancelButtonIndex,
      },
      buttonIndex => {
        if (buttonIndex === 0) selectPicture();
        else if (buttonIndex === 1) takePicture();
      },
    );
  };

  const selectPicture = async () => {
    const { status } = await ImagePicker.getCameraRollPermissionsAsync();
    if (status !== 'granted') {
      const {
        status: statusPermission,
      } = await ImagePicker.requestCameraRollPermissionsAsync();

      if (statusPermission !== 'granted') {
        alert('Me da permissão ai carai');
        return;
      }
    }

    const { cancelled, uri } = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (cancelled) return;

    alert(uri);
  };

  const takePicture = async () => {
    const { status } = await ImagePicker.getCameraPermissionsAsync();
    if (status !== 'granted') {
      const {
        status: statusPermission,
      } = await ImagePicker.requestCameraPermissionsAsync();

      if (statusPermission !== 'granted') {
        alert('Preciso dessa permissão porra!');
        return;
      }
    }

    const { cancelled, uri } = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
    });

    if (cancelled) return;

    alert(uri);
  };

  const handleRadioButtonChange = (radios, setFieldTouched, setFieldValue) => {
    setFieldTouched('specie');

    const { value } = radios.find(radio => {
      return radio.checked === true;
    });

    setFieldValue('specie', value);
  };

  return (
    <Formik
      onSubmit={values => console.log(values)}
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

          {/* <Button
            onPress={handleOpenActionSheet}
            title="Selecione uma imagem"
          /> */}
          <TouchableOpacity onPress={handleOpenActionSheet}>
            <View style={styles.imageContainer}>
              {values.uri ? (
                <Image uri={values.uri} />
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

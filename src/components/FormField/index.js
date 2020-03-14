import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const FormField = ({
  touched,
  handleBlur,
  handleChange,
  placeholder,
  value,
  styleName,
  errors,
  multiline = false,
  label,
  name,
}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        value={value}
        style={styles[styleName]}
        multiline={multiline}
        underlineColorAndroid="transparent"
      />
      {touched[name] && errors[name] && (
        <Text style={styles.errorMessage}>{errors[name]}</Text>
      )}
    </View>
  );
};

export default FormField;

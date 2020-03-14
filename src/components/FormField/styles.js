import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  formInput: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#858383',
    fontSize: 15,
    height: 50,
    width: 350,
    padding: 10,
  },

  formInputArea: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#858383',
    fontSize: 15,
    height: 100,
    width: 350,
    padding: 10,
  },

  label: {
    fontSize: 18,
    marginTop: 10,
    color: 'gray',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  errorMessage: {
    fontSize: 14,
    color: 'red',
    marginLeft: 5,
  },
});

export default styles;

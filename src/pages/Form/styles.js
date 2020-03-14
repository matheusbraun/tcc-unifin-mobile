import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  radioButton: {
    flexDirection: 'row',
  },

  label: {
    fontSize: 18,
    marginTop: 10,
    color: 'gray',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  imageContainer: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#858383',
    height: 300,
    marginBottom: 5,
    marginTop: 5,
  },

  selectImageTextContainer: {
    alignItems: 'center',
    paddingVertical: 140,
  },

  selectImageText: {
    color: 'gray',
  },

  errorMessage: {
    fontSize: 14,
    color: 'red',
    marginLeft: 5,
    marginBottom: 5,
  },

  button: {
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#8E4DFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 40,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default styles;

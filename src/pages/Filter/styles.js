import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  label: {
    fontSize: 18,
    marginTop: 10,
    color: 'gray',
    marginBottom: 5,
    fontWeight: 'bold',
  },

  radioButton: {
    flexDirection: 'row',
  },

  sliderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
  },

  slider: {
    marginTop: 20,
    width: 300,
    height: 25,
  },

  sliderText: {
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },

  button: {
    marginTop: 30,
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

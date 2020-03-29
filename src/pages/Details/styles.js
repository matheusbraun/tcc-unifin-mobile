import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },

  title: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },

  image: {
    height: 300,
    width: 351,
    borderRadius: 9,
    resizeMode: 'stretch',
    marginBottom: 20,
  },

  description: {
    fontSize: 16,
    marginBottom: 20,
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

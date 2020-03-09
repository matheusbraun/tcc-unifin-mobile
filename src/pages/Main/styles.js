import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },

  bottomButtons: {
    position: 'absolute',
    bottom: 30,
    left: 20,
    right: 20,
    zIndex: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  filterButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8E4DFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },

  addButton: {
    width: 50,
    height: 50,
    backgroundColor: '#8E4DFF',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;

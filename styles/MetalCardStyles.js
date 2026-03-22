import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginVertical: 10,
    borderRadius: 12,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,

    elevation: 6,
  },

  metalName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  price: {
    fontSize: 16,
    color: '#1E88E5',
    fontWeight: '600',
  },

  time: {
    marginTop: 6,
    color: 'gray',
    fontSize: 12,
  },

  errorText: {
    color: 'red',
  },

  retry: {
    marginTop: 6,
    color: '#1E88E5',
    fontWeight: 'bold',
  },
});

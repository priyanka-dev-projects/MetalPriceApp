import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  card: {
    backgroundColor: '#fff',
    padding: 20,
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

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
  },

  value: {
    fontSize: 18,
    color: '#1E88E5',
    fontWeight: 'bold',
  },

  time: {
    marginTop: 15,
    color: 'gray',
  },

  timeValue: {
    fontSize: 14,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  errorText: {
    color: 'red',
  },

  retryButton: {
    marginTop: 12,
    backgroundColor: '#1E88E5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },

  retryText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

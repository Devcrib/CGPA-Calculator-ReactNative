import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 15,
    flex: 1
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#006699',
    textAlign: 'center'
  },
  input: {
    fontSize: 40,
    textAlign: 'right',
    padding: 10,
    marginBottom: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  button: {
    flex: 1,
    width: 95,
    margin: 3,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    padding: 20,
    color: 'white',
    fontSize: 30
  }
});

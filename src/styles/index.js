import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    marginTop: 30,
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 15,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#006699',
    textAlign: 'center',
  },
  input: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'right',
    padding: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 5
  },
  button: {
    width: 95,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2196F3',
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 30,
    padding: 20,
  }
});

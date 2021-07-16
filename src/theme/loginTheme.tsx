import {StyleSheet} from 'react-native';
export const loginStyles = StyleSheet.create({
  formContainer: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    height: 600,
    marginBottom: 50,
  },
  title: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 20,
    padding: 10,
    textAlign: 'center',
    textShadowColor: '#000000a5',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
  },
  label: {
    marginTop: 25,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    textShadowColor: '#000000a5',
    textShadowOffset: {width: -1, height: 1.5},
    textShadowRadius: 10,
  },
  inputField: {
    color: '#000000a5',
    fontWeight: 'bold',
    fontSize: 20,
  },
  inputFieldIOS: {
    borderBottomColor: '#000b72ac',
    borderBottomWidth: 2,
    paddingBottom: 4,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    borderWidth: 2,
    borderColor: '#0400ffd3',
    paddingHorizontal: 60,
    paddingVertical: 5,
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#0400ffd3',
  },
  footer: {
    color: '#000000',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 14,
    fontWeight: '800',
  },
});

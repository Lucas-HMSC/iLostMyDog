import { StyleSheet } from 'react-native';

import { theme } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  image: {
    height: 250,
    width: 250,
    marginTop: 150,
  },

  imageTitle: {
    height: 36,
    width: 250,
    marginTop: 25,
  },
  
  registerContainer: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: theme.fonts.nunito700,
    textAlign: 'center',
    color: theme.colors.black1,
  },

  registerLink: {
    textDecorationLine: 'underline',
  },

  buttonContinue: {
    marginTop: 24,
    marginBottom: 70,
  },
});
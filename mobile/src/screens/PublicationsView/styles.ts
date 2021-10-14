import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: 25,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
  },

  buttonBack: {
    position: 'absolute',
    top: 20,
    left: 20,
  },

  content: {
    marginVertical: 50,
  },
});
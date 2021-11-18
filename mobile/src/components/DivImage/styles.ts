import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 300,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  image: {
    width: 300,
    height: 200,
    borderRadius: 8,
  },

  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(52, 52, 52, 0.9)',
    position: 'relative',
  },

  modalImage: {
    width: Dimensions.get('window').width - 50,
    height: 400,
    borderRadius: 8,
  },

  buttonBack: {
    position: 'absolute',
    top: 45,
    right: 20,
    zIndex: 100,
  },
});
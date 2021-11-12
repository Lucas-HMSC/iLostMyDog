import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 200,
    width: 300,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    backgroundColor: '#D6D4D7',
    borderWidth: 1,
    borderColor: theme.colors.black2,
    zIndex: 2,
  },

  image: {
    height: 200,
    width: 300,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: theme.colors.black2,
    zIndex: 1,
  },

  button: {
    zIndex: 5,
  },
});
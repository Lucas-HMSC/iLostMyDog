import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 270,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    backgroundColor: '#D6D4D7',
    borderWidth: 1,
    borderColor: theme.colors.black2,
  },

  button: {
    zIndex: 5,
  },
});
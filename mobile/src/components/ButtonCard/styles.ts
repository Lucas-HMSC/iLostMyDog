import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    height: 100,
    width: 350,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  text: {
    fontFamily: theme.fonts.nunito700,
    fontSize: 24,
    color: theme.colors.black1,
  },

  textBeige: {
    color: theme.colors.beige1,
  },
});
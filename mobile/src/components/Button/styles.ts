import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 270,
    height: 56,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerPrimary: {
    backgroundColor: theme.colors.pink1,
  },

  containerSecondary: {
    backgroundColor: theme.colors.black1,
  },

  text: {
    fontFamily: theme.fonts.nunito700,
    fontSize: 24,
  },

  textPrimary: {
    color: theme.colors.black2,
  },

  textSecondary: {
    color: theme.colors.beige1,
  },
});
import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  containerPrimary: {
    width: 270,
    height: 56,
    backgroundColor: theme.colors.pink1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerSecondary: {
    width: 270,
    height: 56,
    backgroundColor: theme.colors.black1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  textPrimary: {
    fontFamily: theme.fonts.nunito700,
    fontSize: 24,
    color: theme.colors.black2,
  },

  textSecondary: {
    fontFamily: theme.fonts.nunito700,
    fontSize: 24,
    color: theme.colors.beige1,
  },
});
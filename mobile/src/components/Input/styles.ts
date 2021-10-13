import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {},

  label: {
    fontSize: 16,
    fontFamily: theme.fonts.nunito700,
    color: theme.colors.black2,
  },

  input: {
    height: 56,
    width: 300,
    borderWidth: 1,
    borderColor: theme.colors.black2,
    borderRadius: 8,
    padding: 10,
    color: theme.colors.black2,
    fontSize: 16,
    fontFamily: theme.fonts.nunito400,
    marginVertical: 10,
  },
});
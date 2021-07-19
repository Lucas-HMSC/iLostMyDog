import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 150,
    position: 'relative',
  },

  text: {
    fontSize: 24,
    fontFamily: theme.fonts.nunito700,
    color: theme.colors.black1,
  },

  input: {
    height: 56,
    width: 270,
    borderBottomWidth: 1,
    borderColor: '#DFDDDF',
    textAlign: 'center',
    fontSize: 18,
    fontFamily: theme.fonts.nunito400,
    color: theme.colors.black2,
  },

  button: {
    marginBottom: 70,
  },

  buttonBack: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
});
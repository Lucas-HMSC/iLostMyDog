import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: 25,
  },

  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingBottom: 70,
    paddingHorizontal: 52,
    position: 'relative',
  },

  buttonBack: {
    position: 'absolute',
    top: 20,
    left: 20,
  },

  title: {
    flex: 1,
    fontSize: 24,
    fontFamily: theme.fonts.nunito700,
    color: theme.colors.black1,
  },

  divisor: {
    height: 2,
    width: 270,
    backgroundColor: '#DFDDDF',
    marginTop: 5,
  },

  button: {
    marginTop: 15,
  },

  localizationContainer: {
    position: 'relative',
  },

  textAutoContainer: {
    position: 'absolute',
    right: 0,
    top: 5,
    zIndex: 10,
  },

  textAuto: {
    fontSize: 10,
    fontFamily: theme.fonts.nunito400,
    color: theme.colors.black2,
    textTransform: 'uppercase',
  },

  inputGroup: {
    marginBottom: 10,
  },

  fixMargin: {
    marginTop: 10,
  },
});
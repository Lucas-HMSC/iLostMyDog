import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 70,
    paddingHorizontal: 52,
    position: 'relative',
  },

  form: {
    marginVertical: 20,
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

  buttonBack: {
    position: 'absolute',
    top: 40,
    left: 20,
  },

  localizationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 270,
  },

  textAuto: {
    fontSize: 10,
    fontFamily: theme.fonts.nunito400,
    color: theme.colors.black2,
    textTransform: 'uppercase',
  },
});
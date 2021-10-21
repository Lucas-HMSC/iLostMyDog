import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  safeAreaView: {
    paddingTop: 25,
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 50,
    paddingHorizontal: 50,
    position: 'relative',
  },

  buttonBack: {
    position: 'absolute',
    top: 20,
    left: 20,
  },

  title: {
    flex: 1,
    width: '100%',
    fontSize: 24,
    fontFamily: theme.fonts.nunito700,
    color: theme.colors.black1,
  },

  divisor: {
    height: 2,
    width: '100%',
    backgroundColor: '#DFDDDF',
    marginTop: 5,
  },

  content: {
    marginVertical: 20,
  },

  boxFAQ: {
    marginBottom: 20,
  },
});
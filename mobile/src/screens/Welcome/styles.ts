import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  scrollview: {
    paddingTop: 25,
  },

  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: 30,
    paddingVertical: 30,
  },

  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  title: {
    fontSize: 24,
    fontFamily: theme.fonts.nunito700,
    color: '#4B3F4E',
    flex: 1,
  },

  buttonAccount: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 25,
    width: 25,
  },

  buttonCardContainer: {
    marginVertical: 30,
  },

  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 30,
    marginBottom: 30,
  },
});
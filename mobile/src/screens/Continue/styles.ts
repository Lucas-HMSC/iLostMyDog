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

  emoji: {
    fontSize: 64,
    marginBottom: 80,
    textAlign: 'center',
  },

  title: {
    fontSize: 24,
    fontFamily: theme.fonts.nunito700,
    color: theme.colors.black1,
  },

  contentContainer: {
    width: 315,
  },
  
  contentText: {
    fontSize: 18,
    fontFamily: theme.fonts.nunito400,
    color: theme.colors.black2,
    textAlign: 'center',
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
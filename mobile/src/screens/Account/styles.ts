import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 75,
    paddingBottom: 30,
    paddingHorizontal: 50,
    position: 'relative',
  },

  content: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingVertical: 50,
  },

  buttonBack: {
    position: 'absolute',
    top: 45,
    left: 20,
  },

  title: {
    width: '100%',
    fontSize: 24,
    fontFamily: theme.fonts.nunito700,
    color: theme.colors.pink1,
    textTransform: 'uppercase',
  },

  subtitle: {
    width: '100%',
    fontSize: 18,
    fontFamily: theme.fonts.nunito700,
    color: theme.colors.black1,
    textTransform: 'uppercase',
    textAlign: 'left',
  },

  divisor: {
    height: 2,
    width: 300,
    backgroundColor: '#FFE6E7',
    marginTop: 5,
  },
});
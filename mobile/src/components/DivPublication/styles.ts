import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },

  image: {
    width: 300,
    height: 150,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },

  legend: {
    width: 300,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },

  legendLost: {
    backgroundColor: theme.colors.pink1,
  },

  legendFoundStreet: {
    backgroundColor: theme.colors.beige2,
  },

  legendFoundOwner: {
    backgroundColor: theme.colors.black1,
  },

  label: {
    fontSize: 24,
    fontFamily: theme.fonts.nunito700,
    textTransform: 'uppercase',
  },

  labelLost: {
    color: theme.colors.black1,
  },

  labelFoundStreet: {
    color: theme.colors.black1,
  },

  labelFoundOwner: {
    color: theme.colors.beige1,
  },
});
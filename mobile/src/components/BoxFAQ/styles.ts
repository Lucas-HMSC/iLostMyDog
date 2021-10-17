import { StyleSheet } from "react-native";
import { theme } from "../../styles/theme";

export const styles = StyleSheet.create({
  questionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  question: {
    fontSize: 16,
    fontFamily: theme.fonts.nunito700,
    color: theme.colors.pink1,
  },

  answerContainer: {
    marginTop: 10,
  },

  answer: {
    fontSize: 14,
    fontFamily: theme.fonts.nunito400,
    color: theme.colors.black2,
    textAlign: 'justify',
  },

  iconContainer: {
    flexDirection: 'row',
  },

  icon: {
    width: 24,
    height: 12,
  },

  icon0: {
    backgroundColor: '#FF8087',
  },

  icon1: {
    backgroundColor: '#F5DCB4',
  },

  icon2: {
    backgroundColor: '#4B3F4E',
  },
});
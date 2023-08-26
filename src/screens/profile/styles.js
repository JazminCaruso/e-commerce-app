import { StyleSheet } from 'react-native';
import { COLORS, FONTS } from '../../themes/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  loading: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  nameInput: {
    fontFamily: FONTS.regular,
    fontSize: 18,
  },
  nameText: {
    fontFamily: FONTS.bold,
    fontSize: 17,
  },
  buttonContainer: {
    margin: 20,
  }
});

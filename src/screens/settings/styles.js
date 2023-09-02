import { StyleSheet } from 'react-native';
import { FONTS, COLORS } from '../../themes/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  settingList: {
    flexGrow: 1,
  },
  buttonLogout: {
    marginBottom: 20,
  },
  buttonLogoutTablet: {
    marginBottom: 20,
    width: 500,
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonTextTablet: {
    fontFamily: FONTS.bold,
    fontSize: 23,
    textAlign: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.secondary,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
});

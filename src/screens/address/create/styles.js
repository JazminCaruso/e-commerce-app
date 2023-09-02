import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../../themes/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
    marginVertical: 20,
  },
  containerButtonTablet: {
    flex: 1,
    alignItems: 'center'
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.primary,
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
    backgroundColor: COLORS.primary,
    paddingHorizontal: 50,
    paddingVertical: 10,
    borderRadius: 5,
    margin: 20,
    width: 400,
  },
});

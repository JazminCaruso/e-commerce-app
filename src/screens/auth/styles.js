import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    minHeight: 400,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
  },
  contentTablet: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    height: 500,
    backgroundColor: COLORS.background,
    borderWidth: 1,
    borderColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    borderRadius: 5,
  },
  header: {
    fontFamily: FONTS.bold,
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.text,
    paddingBottom: 20,
  },
  headerTablet: {
    fontFamily: FONTS.bold,
    fontSize: 24,
    textAlign: 'center',
    color: COLORS.text,
    paddingBottom: 20,
  },
  labelTablet: {
    fontSize: 20,
  },
  linkText: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.primary,
    marginTop: 10,
  },
  linkTextTablet: {
    fontFamily: FONTS.medium,
    fontSize: 20,
    textAlign: 'center',
    color: COLORS.primary,
    marginVertical: 10,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
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
  },
  buttonTextDisabled: {
    fontFamily: FONTS.bold,
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.tertiary,
    paddingHorizontal: 50,
    paddingVertical: 10,
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
  },
  buttonTextTabletDisabled: {
    fontFamily: FONTS.bold,
    fontSize: 23,
    textAlign: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.tertiary,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
  inputTablet: {
    fontSize: 44,
    color: COLORS.primary
  },
});

import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '80%',
    maxWidth: 400,
    padding: 15,
    margin: 15,
    minHeight: 350,
    backgroundColor: COLORS.white,
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
    fontFamily: FONTS.medium,
    fontSize: 16,
    textAlign: 'center',
    color: COLORS.text,
    paddingVertical: 10,
  },
  label: {
    fontFamily: FONTS.medium,
    fontSize: 18,
  },
  input: {
    fontFamily: FONTS.medium,
    fontSize: 16,
    height: 45,
    borderBottomColor: COLORS.tertiary,
    borderBottomWidth: 1,
    width: '90%',
    marginBottom: 5,
  },
  link: {},
  linkContainer: {},
  linkText: {
    fontFamily: FONTS.medium,
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.primary,
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  button: {
    backgroundColor: COLORS.primary,
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonDisabled: {
    backgroundColor: COLORS.primary,
    width: 200,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: FONTS.bold,
    fontSize: 14,
    textAlign: 'center',
    color: COLORS.white,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 50,
    paddingVertical: 10,
  },
});
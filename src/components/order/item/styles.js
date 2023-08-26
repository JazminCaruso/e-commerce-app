import { StyleSheet } from 'react-native';
import { COLORS } from '../../../themes/colors';
import { FONTS } from '../../../themes/fonts';

export const styles = StyleSheet.create({
  orderItemContainer: {
    flex: 1,
    height: 120,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 5,
    flexDirection: 'row',
    padding: 10,
  },
  orderHeaderContainer: {
    flex: 1,
  },
  orderItemDate: {
      fontFamily: FONTS.regular,
      fontSize: 16,
      marginLeft: 30,
  },
  orderBody: {
      flex: 1,
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      marginRight: 15,
      paddingVertical: 10,
  },
  orderItemId: {
      fontFamily: FONTS.regular,
      fontSize: 14,
  },
  orderItemTotal: {
      fontFamily: FONTS.bold,
      fontSize: 15,
      paddingVertical: 10,
  },
});

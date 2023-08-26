import { StyleSheet } from 'react-native';

import { COLORS, FONTS } from '../../themes/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  floatingButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: COLORS.primary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  floatingButtonTextContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 5,
  },
  floatingButtonText: {
    fontSize: 25,
    fontFamily: FONTS.medium,
    color: COLORS.white,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    marginHorizontal: 20,
    marginTop: 15,
    backgroundColor: COLORS.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    borderRadius: 10,
    elevation: 3,
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapImageContainer: {
    backgroundColor: COLORS.primary,
  },
  mapImage: {
    width: 80,
    height: 80,
  },
  itemDetailsContainer: {
    flex: 1,
    gap: 10,
  },
  itemAddress: {
    fontFamily: FONTS.medium,
    fontSize: 14,
  },
  itemCoords: {
    fontFamily: FONTS.medium,
    fontSize: 12,
  },
});

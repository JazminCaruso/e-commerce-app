import { StyleSheet } from 'react-native';

import { COLORS } from '../../themes/themes';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  settingList: {
    flexGrow: 1,
  },
  buttonLogout: {
    marginBottom: 20,
  },
});

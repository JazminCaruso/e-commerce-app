import { useFonts } from 'expo-font';
import { ActivityIndicator, SafeAreaView, StyleSheet, View, Platform, StatusBar } from 'react-native';
import { COLORS, FONTS } from './themes/themes';
import RootNavigator from './navigation/index'

export default function App() {

  const [loaded] = useFonts({
    [FONTS.bold]: require('../assets/fonts/YsabeauInfant-Bold.ttf'),
    [FONTS.light]: require('../assets/fonts/YsabeauInfant-Light.ttf'),
    [FONTS.medium]: require('../assets/fonts/YsabeauInfant-Medium.ttf'),
    [FONTS.regular]: require('../assets/fonts/YsabeauInfant-Regular.ttf'),
  })

  if(!loaded) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={COLORS.primary} size='large' />
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <RootNavigator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'ios'? 0 : StatusBar.currentHeight,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

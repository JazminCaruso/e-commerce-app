import { ActivityIndicator, StyleSheet, View, Platform, StatusBar } from 'react-native';
import RootNavigator from './navigation/index';
import { init } from './db';
import { store } from './store';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import { COLORS, FONTS } from './themes/themes';

init()
    .then(() => {
        console.log('Initialized database');
    })
    .catch((err) => {
        console.log('Initializing db failed');
        console.log(err);
    });

export default function App() {
    const [loaded] = useFonts({
        [FONTS.bold]: require('../assets/fonts/YsabeauInfant-Bold.ttf'),
        [FONTS.light]: require('../assets/fonts/YsabeauInfant-Light.ttf'),
        [FONTS.medium]: require('../assets/fonts/YsabeauInfant-Medium.ttf'),
        [FONTS.regular]: require('../assets/fonts/YsabeauInfant-Regular.ttf'),
    });

    if (!loaded) {
        return (
            <View style={styles.loaderContainer}>
                <ActivityIndicator color={COLORS.primary} size="large" />
            </View>
        );
    }

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <RootNavigator />
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
    },
    loaderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

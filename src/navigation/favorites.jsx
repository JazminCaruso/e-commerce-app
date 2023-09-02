import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Favorites from "../screens/favorites";
import { useWindowDimensions } from "react-native";
import { COLORS, FONTS } from "../themes/themes";

const Stack = createNativeStackNavigator();

const FavoritesNavigator = () => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    return(
        <Stack.Navigator 
            initialRouteName="Favorites"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.secondary,
                },
                headerTitleStyle: {
                    fontFamily: FONTS.bold,
                    fontSize: isTablet? 34 : 22,
                },
                animation: 'fade',
                presentation: 'card',
            }}
        >
            <Stack.Screen name="Favorites" component={Favorites} options={{ title: 'Mis favoritos' }}/>
        </Stack.Navigator>
    );
};

export default FavoritesNavigator;
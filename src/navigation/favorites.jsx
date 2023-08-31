import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useWindowDimensions } from "react-native";
import Favorites from "../screens/favorites";
import { COLORS } from "../themes/colors";
import { FONTS } from "../themes/fonts";

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
            <Stack.Screen name="Mis favoritos" component={Favorites}/>
        </Stack.Navigator>
    );
};

export default FavoritesNavigator;
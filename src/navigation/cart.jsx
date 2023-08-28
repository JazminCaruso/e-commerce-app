import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useWindowDimensions } from "react-native";
import Cart from "../screens/cart";
import { COLORS } from "../themes/colors";
import { FONTS } from "../themes/fonts";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;
    
    return (
        <Stack.Navigator 
            initialRouteName="Cart"
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
            <Stack.Screen name="Carrito" component={Cart} />
        </Stack.Navigator>
    );
};

export default CartNavigator;

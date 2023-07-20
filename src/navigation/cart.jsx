import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cart from "../screens/cart";
import { COLORS } from "../themes/colors";
import { FONTS } from "../themes/fonts";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
    return (
        <Stack.Navigator 
            initialRouteName="Cart"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.secondary,
                },
                headerTitleStyle: {
                    fontFamily: FONTS.bold,
                    fontSize: 28,
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

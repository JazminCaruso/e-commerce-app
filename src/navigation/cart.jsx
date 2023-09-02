import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Cart from '../screens/cart';
import { useWindowDimensions } from 'react-native';
import { COLORS, FONTS } from '../themes/themes';

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
                    fontSize: isTablet ? 34 : 22,
                },
                animation: 'fade',
                presentation: 'card',
            }}
        >
            <Stack.Screen name="Cart" component={Cart} options={{ title: 'Mi carrito' }} />
        </Stack.Navigator>
    );
};

export default CartNavigator;

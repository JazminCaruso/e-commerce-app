import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Orders from '../screens/orders';
import { useWindowDimensions } from 'react-native';
import { COLORS, FONTS } from '../themes/themes';

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    return (
        <Stack.Navigator
            initialRouteName="Orders"
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
            <Stack.Screen name="Orders" component={Orders} options={{ title: 'Mis compras' }} />
        </Stack.Navigator>
    );
};

export default OrdersNavigator;

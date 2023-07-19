import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Orders from "../screens/orders";
import { COLORS } from "../themes/colors";
import { FONTS } from "../themes/fonts";

const Stack = createNativeStackNavigator();

const OrdersNavigator = () => {
    return(
        <Stack.Navigator 
            initialRouteName="Orders"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.background,
                },
                headerTitleStyle: {
                    fontFamily: FONTS.bold,
                    fontSize: 28,
                },
                animation: 'fade',
                presentation: 'card',
            }}
        >
            <Stack.Screen name="Orders" component={Orders}/>
        </Stack.Navigator>
    );
};

export default OrdersNavigator;

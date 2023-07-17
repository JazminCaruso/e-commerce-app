import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products } from '../screens/screens'

const Stack = createNativeStackNavigator();

function ShopNavigator() {
    return (
        <Stack.Navigator initialRouteName="Categories">
            <Stack.Screen name="Categories" component={Categories} />
            <Stack.Screen name="Products" component={Products} />
        </Stack.Navigator>
    );
}

export default ShopNavigator;

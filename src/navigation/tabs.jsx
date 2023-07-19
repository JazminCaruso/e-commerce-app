import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from './shop'
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <BottomTab.Navigator 
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
            }}
        >
            <BottomTab.Screen name="ShopTab" component={ShopNavigator} />
            <BottomTab.Screen name="CartTab" component={CartNavigator} />
            <BottomTab.Screen name="OrdersTab" component={OrdersNavigator} />
        </BottomTab.Navigator>
    );
};

export default TabsNavigator;

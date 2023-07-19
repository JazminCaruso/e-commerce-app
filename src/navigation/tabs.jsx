import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from './shop'
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import { FONTS, COLORS } from "../themes/themes";
import { Ionicons } from "@expo/vector-icons";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
    return (
        <BottomTab.Navigator 
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: FONTS.regular,
                    fontSize: 12,
                },
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: '#cccccc',
                tabBarIconStyle: {
                    fontSize: 22,
                }
            }}
        >
            <BottomTab.Screen 
                name="ShopTab" 
                component={ShopNavigator} 
                options={{
                    tabBarLabel: 'Tienda',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={20} color={color} />
                    )
                }}
            />
            <BottomTab.Screen 
                name="CartTab" 
                component={CartNavigator} 
                options={{
                    tabBarLabel: 'Carrito',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'cart' : 'cart-outline'} size={20} color={color} />
                    ),
                    tabBarBadge: 2,
                    tabBarBadgeStyle: {
                        backgroundColor: COLORS.black,
                        color: COLORS.white,
                        fontFamily: FONTS.regular,
                        fontSize: 12,
                    }
                }}
            />
            <BottomTab.Screen 
                name="OrdersTab" 
                component={OrdersNavigator} 
                options={{
                    tabBarLabel: 'Mis pedidos',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'file-tray' : 'file-tray-outline'} size={20} color={color} />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
};

export default TabsNavigator;

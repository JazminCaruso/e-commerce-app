import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from './shop'
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import { FONTS, COLORS } from "../themes/themes";
import { Ionicons } from "@expo/vector-icons";
import { useWindowDimensions } from "react-native";
import { useSelector } from "react-redux";

const BottomTab = createBottomTabNavigator();

const TabsNavigator = () => {
    
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;
    const cartItem = useSelector((state) => state.cart.items);

    return (
        <BottomTab.Navigator 
            initialRouteName="ShopTab"
            screenOptions={{
                headerShown: false,
                tabBarLabelStyle: {
                    fontFamily: FONTS.regular,
                    fontSize: isTablet ? 22 : 12,
                },
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: '#cccccc',
            }}
        >
            <BottomTab.Screen 
                name="ShopTab" 
                component={ShopNavigator} 
                options={{
                    tabBarLabel: 'Tienda',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={isTablet ? 26 : 20} color={color} />
                    )
                }}
            />
            <BottomTab.Screen 
                name="CartTab" 
                component={CartNavigator} 
                options={{
                    tabBarLabel: 'Carrito',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'cart' : 'cart-outline'} size={isTablet ? 26 : 20} color={color} />
                    ),
                    tabBarBadge: cartItem.length,
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
                    tabBarLabel: 'Mis compras',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'receipt' : 'receipt-outline'} size={isTablet ? 26 : 20} color={color} />
                    )
                }}
            />
        </BottomTab.Navigator>
    );
};

export default TabsNavigator;

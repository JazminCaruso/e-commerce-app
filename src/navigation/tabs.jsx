import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from './shop'
import CartNavigator from "./cart";
import OrdersNavigator from "./orders";
import FavoritesNavigator from "./favorites";
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
                    fontSize: isTablet ? 22 : 14,
                },
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                },
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.tertiary,
            }}
        >
            <BottomTab.Screen 
                name="ShopTab" 
                component={ShopNavigator} 
                options={{
                    tabBarLabel: 'Inicio',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'home' : 'home-outline'} size={isTablet ? 26 : 20} color={color} />
                    )
                }}
            />
            <BottomTab.Screen 
                name="FavoritesTab" 
                component={FavoritesNavigator} 
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ focused, color }) => (
                        <Ionicons name={focused ? 'star' : 'star-outline'} size={isTablet ? 26 : 20} color={color} />
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
                        backgroundColor: COLORS.secondary,
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

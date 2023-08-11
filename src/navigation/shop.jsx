import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetails } from '../screens/screens';
import { COLORS } from "../themes/colors";
import { FONTS } from "../themes/fonts";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import SettingsNavigator from './settings';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;
    return (
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: COLORS.secondary,
                },
                headerTitleStyle: {
                    fontFamily: FONTS.bold,
                    fontSize: isTablet? 40 : 28,
                },
                animation: 'fade',
                presentation: 'card',
                headerRight: () => (
                    <TouchableOpacity onPress={() => navigation.navigate('SettingsStack')}>
                        <Ionicons name="settings-outline" size={24} />
                    </TouchableOpacity>
                ),
            })}
        >
            <Stack.Screen 
                name="Categorias" 
                component={Categories}
            />
            <Stack.Screen 
                name="Products" 
                component={Products} 
                options={({ navigation, route }) => ({
                    headerStyle: {
                        backgroundColor: route.params.categoryColor,
                    },
                    title: route.params.categoryName,
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="arrow-back" size={26} />
                        </TouchableOpacity>
                    ),
                })}
            />
            <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={({ navigation, route }) => ({
                    headerStyle: {
                      backgroundColor: route.params.categoryColor,
                    },
                    title: 'Libro',
                    headerLeft: () => (
                      <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="arrow-back" size={26} />
                      </TouchableOpacity>
                    ),
                  })}
            />
            <Stack.Screen
                name="SettingsStack"
                component={SettingsNavigator}
                options={() => ({
                    headerShown: false,
                })}
            />
        </Stack.Navigator>
    );
}

export default ShopNavigator;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Categories, Products, ProductDetails } from '../screens/screens';
import { COLORS } from "../themes/colors";
import { FONTS } from "../themes/fonts";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

function ShopNavigator() {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;
    return (
        <Stack.Navigator 
            initialRouteName="Categories"
            screenOptions={{
                headerStyle: {
                    backgroundColor: COLORS.secondary,
                },
                headerTitleStyle: {
                    fontFamily: FONTS.bold,
                    fontSize: isTablet? 40 : 28,
                },
                animation: 'fade',
                presentation: 'card',
            }}
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
                            <Ionicons name="arrow-back" size={30} />
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
                        <Ionicons name="arrow-back" size={30} />
                      </TouchableOpacity>
                    ),
                  })}
            />
        </Stack.Navigator>
    );
}

export default ShopNavigator;

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS, FONTS } from "../themes/themes";
import { TouchableOpacity, useWindowDimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Address, Profile, Settings, CreateAddress } from '../screens/screens';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: COLORS.secondary,
                },
                headerTitleStyle: {
                    fontFamily: FONTS.bold,
                    fontSize: isTablet? 34 : 22,
                },
                animation: 'fade',
                presentation: 'card',
                title: 'Configuración',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={26} />
                    </TouchableOpacity>
                ),
            })}
        >
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Profile" component={Profile} options={{ title: 'Mis datos' }} />
            <Stack.Screen name="CreateAddress" component={CreateAddress} options={{ title: 'Añadir ubicación' }} />
            <Stack.Screen name="Address" component={Address} options={{ title: 'Mis direcciones' }} />
        </Stack.Navigator>
    );
}

export default SettingsNavigator;

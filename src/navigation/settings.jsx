import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS, FONTS } from "../themes/themes";
import { TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { Address, Profile, Settings, CreateAddress } from '../screens/screens';

const Stack = createNativeStackNavigator();

const SettingsNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Settings"
            screenOptions={({ navigation }) => ({
                headerStyle: {
                    backgroundColor: COLORS.secondary,
                },
                headerTitleStyle: {
                    fontFamily: FONTS.bold,
                    fontSize: 22,
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
            <Stack.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
            <Stack.Screen name="CreateAddress" component={CreateAddress} options={{ title: 'Seleccionar ubicación' }} />
            <Stack.Screen name="Address" component={Address} options={{ title: 'Ubicación' }} />
        </Stack.Navigator>
    );
}

export default SettingsNavigator;

import { LocationAccuracy, getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { View, Button, Text, Alert } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { COLORS } from '../../themes/colors';
import MapPreview from '../mapPreview';

const LocationSelector = ({ onLocation }) => {

    const [pickedLocation, setPickedLocation] = useState(null);

    const verifyPermissions = async () => {
        const { status } = await requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permiso denegado',
                'Es necesario dar permiso para poder utilizar el servicio de ubicación',
                [{ text: 'Ok' }, ]
            );
            return false;
        }
        return true;
    }

    const onHandlerGetLocation = async () => {
        const isLocationPermission = await verifyPermissions();
        if (!isLocationPermission) return;
        const location = await getCurrentPositionAsync({
            accuracy: 6,
            timeInterval: 5000,
        });
        const { latitude, longitude } = location.coords;
        setPickedLocation({ lat: latitude, lng: longitude });
        onLocation({ lat: latitude, lng: longitude });
    };

    return (
        <View style={styles.container}>
            <MapPreview location={pickedLocation} style={styles.preview}>
                <Text style={styles.text}>Todavía no se ha seleccionado una ubicación.</Text>
            </MapPreview>
            <Button title='Obtener ubicación' onPress={onHandlerGetLocation} color={COLORS.secondary} />
        </View>
    )
}

export default LocationSelector;

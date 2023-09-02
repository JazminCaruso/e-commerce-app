import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import { View, Button, Text, Alert, TouchableOpacity, useWindowDimensions } from 'react-native';
import { styles } from './styles';
import { useEffect, useState } from 'react';
import { COLORS } from '../../themes/colors';
import MapPreview from '../mapPreview';
import { URL_MAPS } from '../../constants/maps';
import { useDispatch } from 'react-redux';
import { saveMapImageUrl } from '../../store/address/addressSlice';

const LocationSelector = ({ onLocation }) => {

    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    const dispatch = useDispatch();
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

    const mapPreviewUrlImage = pickedLocation ? URL_MAPS({ lat: pickedLocation.lat, lng: pickedLocation.lng, zoom: 15 }) : '';

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

    useEffect(() => {
        if (pickedLocation) {
            dispatch(saveMapImageUrl(mapPreviewUrlImage));
        }
    }, [pickedLocation]);

    return (
        <View style={isTablet ? styles.containerTablet : styles.container}>
            <MapPreview location={pickedLocation} mapImage={mapPreviewUrlImage} style={styles.preview}>
                <Text style={isTablet ? styles.textTablet : styles.text}>Todavía no se ha seleccionado una ubicación.</Text>
            </MapPreview>
            <TouchableOpacity onPress={onHandlerGetLocation}>
                <Text style={isTablet? styles.buttonTextTablet : styles.buttonText}>Obtener ubicación</Text>
            </TouchableOpacity>
        </View>
    )
}

export default LocationSelector;

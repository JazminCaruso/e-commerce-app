import { View, TouchableOpacity, Alert, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { COLORS } from "../../themes/colors";
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync } from 'expo-image-picker';

const ImageSelector = ({ image }) => {

    const verifyPermissions = async () => {
        const { status } = await requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert(
                'Permiso denegado',
                'Se necesita permiso para que la aplicación pueda funcionar',
                [{ text: 'Ok' }, ]
            );
            return false;
        }
        return true;
    };

    const onHandlerTakePhoto = async () => {
        const isMediaPermission = await verifyPermissions();
        if (!isMediaPermission) return;
        const result  = await launchImageLibraryAsync ({
            mediaTypes: 'Images',
            allowsEditing: true,
            aspect: [12, 12],
            quality: 0.5,
        })
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onHandlerTakePhoto} style={styles.content} >
                { image ? (
                    <Image source={{ uri: image }} style={styles.image} />
                ) : (
                    <Ionicons name="ios-camera" size={24} color={COLORS.primary} />
                )}
            </TouchableOpacity>
        </View>
    )
}

export default ImageSelector;

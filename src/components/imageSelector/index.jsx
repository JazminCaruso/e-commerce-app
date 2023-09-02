import { View, TouchableOpacity, Alert, Image, useWindowDimensions } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { COLORS } from "../../themes/colors";
import { requestMediaLibraryPermissionsAsync, launchImageLibraryAsync } from 'expo-image-picker';
import { useState } from "react";

const ImageSelector = ({ profileImage, onSelect }) => {

    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    const [image, setImage] = useState(null);

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
            aspect: [1, 1],
            quality: 0.5,
            base64: true,
        })
        await onSelect({ uri: result.assets[0].uri, base64: result.assets[0].base64 });
        setImage(result.assets[0].uri);
    };

    return (
        <View style={isTablet ? styles.containerTablet : styles.container}>
            <TouchableOpacity onPress={onHandlerTakePhoto} style={styles.content} >
                {image || profileImage ? (
                    <Image 
                        source={{ uri: image || profileImage }} 
                        style={styles.image} 
                        resizeMode="contain" 
                    />
                ) : (
                    <Ionicons name="ios-camera" size={isTablet ? 32 : 24} color={COLORS.primary} />
                )}
            </TouchableOpacity>
        </View>
    )
}

export default ImageSelector;

import { View, TouchableOpacity, Text, Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { styles } from "./styles";
import { COLORS } from "../../themes/colors";

const ImageSelector = ({ image, onSelect }) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onSelect} style={styles.content} >
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

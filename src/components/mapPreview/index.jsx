import { View, Image } from 'react-native';
import { styles } from './styles';

const MapPreview = ({ children, location, mapImage, style }) => {
    return (
        <View style={{ ...styles.container, ...style }}>
            {location ? <Image style={styles.mapImage} source={{ uri: mapImage }} /> : children}
        </View>
    );
};

export default MapPreview;

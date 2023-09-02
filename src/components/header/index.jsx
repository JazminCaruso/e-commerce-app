import { View, Text } from 'react-native';
import { styles } from './styles';

const Header = ({ title, style }) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default Header;

import { View, FlatList, TouchableOpacity, Text, useWindowDimensions } from 'react-native';
import { MENUS } from '../../constants/data/menu';
import { MenuItem } from '../../components/components';
import { logout } from '../../store/auth/authSlice';
import { useDispatch } from 'react-redux';
import { styles } from './styles';

const Settings = ({ navigation }) => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    const onSelect = ({ route }) => {
        navigation.navigate(route);
    };

    const dispatch = useDispatch();
    const renderItem = ({ item }) => <MenuItem {...item} onSelect={onSelect} />;
    const keyExtractor = (item) => item.id;

    return (
        <View style={styles.container}>
            <FlatList
                data={MENUS}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                contentContainerStyle={styles.settingList}
            />
            <TouchableOpacity onPress={() => dispatch(logout())}>
                <Text style={isTablet ? styles.buttonTextTablet : styles.buttonText}>Cerrar sesión</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Settings;

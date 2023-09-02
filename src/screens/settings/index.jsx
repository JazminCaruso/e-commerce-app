import { View, FlatList, Button, TouchableOpacity, Text, useWindowDimensions } from 'react-native';
import { styles } from './styles';
import { MENUS } from '../../constants/data/menu';
import { MenuItem } from '../../components/components'
import { useDispatch } from 'react-redux';
import { logout } from '../../store/auth/authSlice';
import { COLORS } from '../../themes/colors';

const Settings = ({ navigation }) => {

  const { width } = useWindowDimensions();
  const isTablet = width >= 650;

  const onSelect = ({ route }) => {
    navigation.navigate(route);
  };
  const renderItem = ({item}) => <MenuItem { ...item } onSelect={onSelect} />
  const keyExtractor = (item) => item.id;
  const dispatch = useDispatch();
  
  return (
    <View style={styles.container}>
      <FlatList
        data={MENUS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={isTablet ? styles.settingListTablet : styles.settingList}
      />
      <TouchableOpacity onPress={() => dispatch(logout())}>
          <Text style={isTablet? styles.buttonTextTablet : styles.buttonText}>Cerrar sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Settings;

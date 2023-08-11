import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text, View } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../themes/themes';

const MenuItem = ({ icon, title, route, onSelect }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.content} onPress={() => onSelect({ route, title })}>
        <Ionicons name={icon} size={24} color={COLORS.secondary} />
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;

import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity, Text, View, useWindowDimensions } from 'react-native';

import { styles } from './styles';
import { COLORS } from '../../themes/themes';

const MenuItem = ({ icon, title, route, onSelect }) => {

  const { width } = useWindowDimensions();
  const isTablet = width >= 650;

  return (
    <View style={isTablet ? styles.containerTablet : styles.container}>
      <TouchableOpacity style={styles.content} onPress={() => onSelect({ route, title })}>
        <Ionicons name={icon} size={isTablet ? 32 : 24} color={COLORS.primary} />
        <Text style={isTablet ? styles.titleTablet : styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MenuItem;

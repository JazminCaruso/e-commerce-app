import { View } from 'react-native';
import { styles } from './styles';
import { ImageSelector } from '../../components/components';

const Profile = () => {

  const onHandlerImage = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageSelector image={''} onSelect={onHandlerImage} />
      </View>
    </View>
  );
};

export default Profile;

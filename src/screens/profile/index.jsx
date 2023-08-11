import { ActivityIndicator, View } from 'react-native';
import { styles } from './styles';
import { ImageSelector } from '../../components/components';
import { useSelector } from 'react-redux';
import { useGetProfileQuery, useUpdateImageProfileMutation } from '../../store/settings/api';
import { COLORS } from '../../themes/colors';

const Profile = () => {

  const localId = useSelector((state) => state.auth.user.localId);
  console.warn(localId);
  const [uploadImageProfile, { data, error, isLoading }] = useUpdateImageProfileMutation();
  const {data: userData, isLoading: isLoadingUserData} = useGetProfileQuery({ localId });

  const onHandlerImage = async ({ uri, base64 }) => {
    await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}` })
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <ImageSelector profileImage={userData?.profileImage} onSelect={onHandlerImage} /> 
        {isLoading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color={COLORS.secondary} />
            </View>
        )}
      </View>
    </View>
  );
};

export default Profile;

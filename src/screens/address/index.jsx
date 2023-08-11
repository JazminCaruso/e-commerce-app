import { Button, View } from 'react-native';
import { styles } from './styles';
import LocationSelector from '../../components/locationSelector';
import { useEffect, useState } from 'react';
import { GOOGLE_API_KEY, URL_BASE_GEOCCODING } from '../../constants/maps';
import { useUpdateAddressMutation } from '../../store/settings/api';
import { useSelector } from 'react-redux';
import { COLORS } from '../../themes/colors';

const Address = ({ navigation }) => {

  const localId = useSelector((state) => state.auth.user.localId);
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState(null);
  const [updateAddress] = useUpdateAddressMutation();

  const onLocation = async ({ lat, lng }) => {
    setLocation({lat, lng});
  };

  const onHandlerUpdateLocation = () => {
    updateAddress({ localId, address, location });
    navigation.navigate('Settings');
  };

  useEffect(() => {
    if (location) {
      const getGeocoding = async () => {
        const response = await fetch(`${URL_BASE_GEOCCODING}/json?latlng=${location.lat},${location.lng}&key=${GOOGLE_API_KEY}`);
        const data = await response.json();
        if (!data.results) {
          throw new Error('Algo salió mal!');
        }
        const address = data.results[0].formatted_address;
        setAddress(address);
      };
      getGeocoding();
    };
  }, [location]);

  return (
    <View style={styles.container}>
      <LocationSelector onLocation={onLocation} />
      <Button title='Confirmar' onPress={onHandlerUpdateLocation} color={COLORS.primary}/>
    </View>
  );
};

export default Address;

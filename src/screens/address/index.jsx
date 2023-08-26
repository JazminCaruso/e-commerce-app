import { Button, View } from 'react-native';
import { styles } from './styles';
import LocationSelector from '../../components/locationSelector';
import { useState } from 'react';
import { useUpdateAddressMutation } from '../../store/settings/api';
import { useSelector } from 'react-redux';
import { COLORS } from '../../themes/colors';
import { useLazyGetGeocodingQuery } from '../../store/maps/api';
import { insertPlace } from '../../db';

const Address = ({ navigation }) => {

  const localId = useSelector((state) => state.auth.user.localId);
  const mapImageUrl = useSelector((state) => state.address.mapImageUrl);
  const [location, setLocation] = useState(null);
  const [updateAddress] = useUpdateAddressMutation();
  const [getGeolocation] = useLazyGetGeocodingQuery();

  const onLocation = async ({ lat, lng }) => {
    setLocation({lat, lng});
  };

  const onHandlerUpdateLocation = async () => {
    const { lat, lng } = location;
    const addressName = await getGeolocation({ lat, lng });
    const result = await insertPlace({ address: addressName.data, image: mapImageUrl, coords: location})
    updateAddress({ localId, address: addressName.data, location });
    console.warn({ result });
    navigation.navigate('Settings');
  };

  return (
    <View style={styles.container}>
      <LocationSelector onLocation={onLocation} />
      <Button title='Confirmar' onPress={onHandlerUpdateLocation} color={COLORS.primary}/>
    </View>
  );
};

export default Address;

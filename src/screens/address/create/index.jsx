import { useState } from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { styles } from './styles';
import { LocationSelector } from '../../../components/components';
import { insertPlace } from '../../../db';
import { useLazyGetGeocodingQuery } from '../../../store/maps/api';
import { useUpdateAddressMutation } from '../../../store/settings/api';
import { COLORS } from '../../../themes/themes';

const CreateAddress = ({ navigation }) => {

  const { width } = useWindowDimensions();
  const isTablet = width >= 650;

  const localId = useSelector((state) => state.auth.user.localId);
  const mapImageUrl = useSelector((state) => state.address.mapImageUrl);
  const [location, setLocation] = useState(null);
  const [updateAddress] = useUpdateAddressMutation();
  const [getGeolocation] = useLazyGetGeocodingQuery();
  const onLocation = ({ lat, lng }) => {
    setLocation({ lat, lng });
  };

  const onHandlerUpdateLocation = async () => {
    const { lat, lng } = location;
    const addressName = await getGeolocation({ lat, lng });
    const result = await insertPlace({
      address: addressName.data,
      coords: location,
      image: mapImageUrl,
    });
    updateAddress({ localId, address: addressName.data, location });
    navigation.goBack();
  };


  return (
    <View style={styles.container}>
      <LocationSelector onLocation={onLocation} />
      <View style={isTablet ? styles.containerButtonTablet : ''}>
        <TouchableOpacity onPress={onHandlerUpdateLocation}>
            <Text style={isTablet? styles.buttonTextTablet : styles.buttonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateAddress;
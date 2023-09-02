import { View, Text, TouchableOpacity, Image, FlatList, useWindowDimensions } from 'react-native';
import { selectPlaces } from '../../db/index';
import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { styles } from './styles';

const Address = ({ navigation }) => {

  const { width } = useWindowDimensions();
  const isTablet = width >= 650;

  const [places, setPlaces] = useState([]);
  const handlePress = () => {
    navigation.navigate('CreateAddress');
  };

  useFocusEffect(
    useCallback(() => {
      const getPlaces = async () => {
        const places = await selectPlaces();
        setPlaces(places);
      };
      getPlaces();
      return () => {
        setPlaces([]);
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={places}
        renderItem={({ item }) => {
          const { lat, lng } = JSON.parse(item.coords);
          return (
            <View style={styles.itemContainer}>
              <View style={styles.mapImageContainer}>
                <Image source={{ uri: item.image }} style={isTablet ? styles.mapImageTablet : styles.mapImage} />
              </View>
              <View style={isTablet ? styles.itemDetailsContainerTablet : styles.itemDetailsContainer}>
                <Text style={isTablet ? styles.itemAddressTablet : styles.itemAddress}>{item.address}</Text>
                <Text style={isTablet ? styles.itemCoordsTablet : styles.itemCoords}>{`Latitud: ${lat}`}</Text>
                <Text style={isTablet ? styles.itemCoordsTablet : styles.itemCoords}>{`Longitud: ${lng}`}</Text>
              </View>
            </View>
          );
        }}
        keyExtractor={(item) => item.id.toString()}
        style={styles.addresListContainer}
      />
      <TouchableOpacity style={isTablet ? styles.floatingButtonTablet : styles.floatingButton} onPress={handlePress}>
        <View style={styles.floatingButtonTextContainer}>
          <Text style={isTablet ? styles.floatingButtonTextTablet : styles.floatingButtonText}>+</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Address;

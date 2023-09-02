import { View, Text, Image, TouchableOpacity, useWindowDimensions } from 'react-native';
import React from 'react';
import { styles } from './styles';

const FavoriteItem = ({ name, price, image, onSelectProduct }) => {
  
  const { width } = useWindowDimensions();
  const isTablet = width >= 650;

  return (
    <TouchableOpacity onPress={onSelectProduct} >
      <View style={isTablet ? styles.containerTablet : styles.container}>
        <View style={isTablet ? styles.imageContainerTablet : styles.imageContainer}>
          <Image source={{ uri: image }} style={isTablet ? styles.imageTablet : styles.image} resizeMode='contain' />
        </View>
        <View style={isTablet ? styles.detailContainerTablet : styles.detailContainer}>
          <Text style={isTablet ? styles.nameTablet : styles.name}>{name}</Text>
          <Text style={isTablet ? styles.priceTablet : styles.price}>Precio: ${price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteItem;

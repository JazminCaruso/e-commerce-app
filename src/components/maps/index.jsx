import React from 'react';
import MapView from 'react-native-maps';
import { View } from 'react-native';
import { styles } from './styles';

const Maps = ({ location }) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
    </View>
  );
}

export default Maps;
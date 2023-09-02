import { ActivityIndicator, View, TextInput, Button, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import React, { useState } from 'react';
import { styles } from './styles';
import { ImageSelector } from '../../components/components';
import { useSelector } from 'react-redux';
import { useGetProfileQuery, useUpdateImageProfileMutation, useUpdateAccountMutation } from '../../store/settings/api';
import { COLORS } from '../../themes/colors';
import { useEffect } from 'react';

const Profile = ({ navigation }) => {

  const { width } = useWindowDimensions();
  const isTablet = width >= 650;

  const localId = useSelector((state) => state.auth.user.localId);
  const email = useSelector((state) => state.auth.user.email);
  const [uploadImageProfile, { data, error, isLoading }] = useUpdateImageProfileMutation();
  const [updateDataAccount] = useUpdateAccountMutation();
  const {data: userData, isLoading: isLoadingUserData, refetch: refetchUserData} = useGetProfileQuery({ localId });
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  useEffect(() => {
    if (userData) {
      setName(userData?.name || '');
      setSurname(userData?.surname || '');
    }
  }, [userData]);

  const onHandlerImage = async ({ uri, base64 }) => {
    await uploadImageProfile({ localId, image: `data:image/jpeg;base64,${base64}` })
  };

  const onHandlerData = async ( ) => {
    await updateDataAccount({ localId, name, surname, email });
    setName(name);
    setSurname(surname);
    refetchUserData();
    navigation.navigate('Settings');
  };

  return (
    <View style={isTablet ? styles.containerTablet : styles.container}>
      <View style={styles.header}>
        <ImageSelector profileImage={userData?.profileImage} onSelect={onHandlerImage} /> 
        {isLoading && (
            <View style={styles.loading}>
              <ActivityIndicator size="large" color={COLORS.secondary} />
            </View>
        )}
      </View>
      <View style={styles.nameContainer}>
        <Text style={isTablet ? styles.nameTextTablet : styles.nameText}>Nombre: </Text>
        <TextInput
          style={isTablet ? styles.nameInputTablet : styles.nameInput}
          placeholder="introducir nombre"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </View>
      <View style={styles.nameContainer}>
        <Text style={isTablet ? styles.nameTextTablet : styles.nameText}>Apellido: </Text>
        <TextInput
          style={isTablet ? styles.nameInputTablet : styles.nameInput}
          placeholder="introducir apellido"
          value={surname}
          onChangeText={(text) => setSurname(text)}
        />
      </View>
      <TouchableOpacity onPress={onHandlerData}>
          <Text style={isTablet? styles.buttonTextTablet : styles.buttonText}>Guardar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;

import { View, Text, TouchableOpacity, ImageBackground, useWindowDimensions } from 'react-native';
import { styles } from './styles';
import React, { useReducer, useState } from 'react';
import { COLORS } from '../../themes/colors';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth/authSlice';
import InputForm from '../../components/inputForm';
import { UPDATE_FORM, onInputChange } from '../../utils/form';
import { useSaveUserIdMutation } from '../../store/users/api';

const initialState = {
    email: { value: '', error: '', touched: false, hasError: true },
    password: { value: '', error: '', touched: false, hasError: true },
    isFormValid: false,
}

const formReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_FORM:
            const { name, value, hasError, error, touched, isFormValid } = action.data;
            return {
                ...state,
                [name]: {
                    ...state[name],
                    value,
                    hasError,
                    error,
                    touched,
                },
                isFormValid,
            };
        default:
            return state;
    }
}

const Auth = () => {

    const { width } = useWindowDimensions();
    const isTablet = (width >= 650);
        
    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const [isLogin, setIsLogin] = useState(true);
    const headerTitle = isLogin ? 'Iniciar sesión' : 'Crear una cuenta';
    const buttonTitle = isLogin ? 'Ingresar' : 'Registrarme';
    const messageText = isLogin ? 'Necesito una cuenta' : 'Soy usuario registrado';

    const [signIn] = useSignInMutation();
    const [signUp] = useSignUpMutation();
    const [saveId] = useSaveUserIdMutation();

    const onHandlerAuth = async () => {
        try {
            if (isLogin) {
                const result = await signIn({ email: formState.email.value , password: formState.password.value });
                if (result?.data) {
                    dispatch(setUser(result.data));
                    console.warn(result.data.localId);
                    if (result.data.localId) await saveId(result.data.localId);
                }
            } else {
                await signUp({ email: formState.email.value , password: formState.password.value });
            }
        } catch (error) {
            console.error(error);
        }
    };

    const onHandlerInputChange = ({ name, value }) => {
        onInputChange({ name, value, dispatch: dispatchFormState, formState });
    };

    return (
        <View style={styles.container}>
            <ImageBackground
                    source={{ 
                        uri: 'https://firebasestorage.googleapis.com/v0/b/e-commercelibros.appspot.com/o/backgroundlogin.jpg?alt=media&token=7944ff9d-eaff-42f0-aae9-1e4dafe00b11'}}
                        style={styles.imageBackground}
                        resizeMode='cover'
            >
                <View style={styles.content}>
                    <Text style={isTablet ? styles.headerTablet : styles.headerTablet}>{headerTitle}</Text>
                    <InputForm
                        placeholder='email@domain.com'
                        placeholderTextColor={COLORS.tertiary}
                        autoCapitalize='none'
                        autoCorrect={false}
                        onChangeText={(text) => onHandlerInputChange({ value: text, name: 'email' })}
                        value={formState.email.value}
                        label="Email"
                        error={formState.email.error}
                        hasError={formState.email.hasError}
                        touched={formState.email.touched}
                    />
                    <InputForm
                        placeholder='******'
                        placeholderTextColor={COLORS.tertiary}
                        autoCapitalize='none'
                        autoCorrect={false}
                        secureTextEntry
                        onChangeText={(text) => onHandlerInputChange({ value: text, name: 'password' })}
                        value={formState.password.value}
                        label="Contraseña"
                        error={formState.password.error}
                        hasError={formState.password.hasError}
                        touched={formState.password.touched}
                    />
                    <View>
                        <TouchableOpacity onPress={() => setIsLogin(!isLogin)}>
                            <Text style={isTablet ? styles.linkTextTablet : styles.linkText}>{messageText}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            disabled={!formState.isFormValid}
                            style={!formState.isFormValid ? styles.buttonDisabled : styles.button}
                            onPress={onHandlerAuth}
                        >
                            <Text style={isTablet ? styles.buttonTextTablet : styles.buttonText}>{buttonTitle}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Auth;

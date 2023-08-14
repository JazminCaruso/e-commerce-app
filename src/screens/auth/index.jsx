import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useReducer, useState } from 'react';
import { COLORS } from '../../themes/colors';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth/authSlice';
import InputForm from '../../components/inputForm';
import { UPDATE_FORM, onInputChange } from '../../utils/form';

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
        
    const dispatch = useDispatch();
    const [formState, dispatchFormState] = useReducer(formReducer, initialState);
    const [isLogin, setIsLogin] = useState(true);
    const headerTitle = isLogin ? 'Iniciar sesión' : 'Crear una cuenta';
    const buttonTitle = isLogin ? 'Ingresar' : 'Registrarme';
    const messageText = isLogin ? 'Necesito una cuenta' : 'Soy usuario registrado';

    const [signIn] = useSignInMutation();
    const [signUp] = useSignUpMutation();

    const onHandlerAuth = async () => {
        try {
            if (isLogin) {
                const result = await signIn({ email: formState.email.value , password: formState.password.value });
                if (result?.data) dispatch(setUser(result.data));
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
            <View style={styles.content}>
                <Text style={styles.header}>{headerTitle}</Text>
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
                    placeholder='*******'
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
                        <Text style={styles.linkText}>{messageText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        disabled={!formState.isFormValid}
                        style={!formState.isFormValid ? styles.buttonDisabled : styles.button}
                        onPress={onHandlerAuth}
                    >
                        <Text style={styles.buttonText}>{buttonTitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Auth;

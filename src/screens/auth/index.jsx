import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { COLORS } from '../../themes/colors';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';
import { useDispatch } from 'react-redux';
import { setUser } from '../../store/auth/authSlice';

const Auth = () => {
        
    const dispatch = useDispatch();
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const headerTitle = isLogin ? 'Ingresar' : 'Registrarme';
    const buttonTitle = isLogin ? 'Ingresar' : 'Registrarme';
    const messageText = isLogin ? 'Necesito una cuenta' : 'Ya tengo una cuenta';

    const [signIn] = useSignInMutation();
    const [signUp] = useSignUpMutation();

    const onHandlerAuth = async () => {
        try {
            if (isLogin) {
                const result = await signIn({ email, password });
                if (result?.data) dispatch(setUser(result.data));
            } else {
                await signUp({ email, password });
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.header}>{headerTitle}</Text>
                <Text style={styles.label}>Email</Text>
                <TextInput
                    style={styles.input}
                    placeholder='email@domain.com'
                    placeholderTextColor={COLORS.tertiary}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={(text) => setEmail(text)}
                    value={email}
                />
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder='*******'
                    placeholderTextColor={COLORS.tertiary}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                />
                <View style={styles.linkContainer}>
                    <TouchableOpacity style={styles.link} onPress={() => setIsLogin(!isLogin)}>
                        <Text style={styles.linkText}>{messageText}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={onHandlerAuth}>
                        <Text style={styles.buttonText}>{buttonTitle}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Auth;
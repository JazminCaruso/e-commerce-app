import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import { COLORS } from '../../themes/colors';
import { useSignInMutation, useSignUpMutation } from '../../store/auth/api';

const Auth = () => {
        
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const headerTitle = isLogin ? 'Login' : 'Register';
    const buttonTitle = isLogin ? 'Login' : 'Register';
    const messageText = isLogin ? 'Need an account' : 'Already have an account';

    const [signIn] = useSignInMutation();
    const [signUp] = useSignUpMutation();

    const onHandlerAuth = async () => {
        try {
            if (isLogin) {
                await signIn({ email, password });
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
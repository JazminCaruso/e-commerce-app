import { TextInput, View, useWindowDimensions } from 'react-native';
import { styles } from './styles';

const Input = ({ borderColor, onHandleFocus, onHandleBlur, onHandleChangeText, ...props }) => {
    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    return (
        <View style={styles.container}>
            <TextInput
                {...props}
                style={[isTablet ? styles.inputTablet : styles.input, { borderColor }]}
                onFocus={onHandleFocus}
                onBlur={onHandleBlur}
                onChangeText={onHandleChangeText}
                autoCorrect={false}
                autoCapitalize="none"
                cursorColor={borderColor}
                placeholderTextColor={borderColor}
            />
        </View>
    );
};

export default Input;

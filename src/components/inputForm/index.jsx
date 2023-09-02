import { View, TextInput, Text, useWindowDimensions } from "react-native";
import { styles } from "./styles";
import Label from "../label";

const InputForm = ({
    editable, 
    children, 
    value, 
    style, 
    onChangeText,
    onFocus,
    onBlur,
    maxLength,
    placeholder,
    placeholderTextColor,
    keyboardType,
    hasError,
    error,
    touched,
    ...props
}) => {

    const { width } = useWindowDimensions();
    const isTablet = width >= 650;

    return (
        <View style={styles.container}>
            <Label { ...props}>
                <TextInput 
                    { ...props}
                    editable={editable}
                    value={value}
                    style={styles.input}
                    onChangeText={onChangeText}
                    onFocus={onFocus}
                    onBlur={onBlur}
                    maxLength={maxLength}
                    placeholder={placeholder}
                    placeholderTextColor={placeholderTextColor}
                    keyboardType={keyboardType}
                />
            </Label>
            {hasError && touched ? (
                <View style={styles.errorContainer}>
                    <Text style={isTablet ? styles.errorTextTablet : styles.errorText}>{error}</Text>
                </View>
            ) : null}
        </View>
    )
}

export default InputForm;

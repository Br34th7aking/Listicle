import React from 'react';
import { Pressable, Image, TextInput, View, Text } from 'react-native';
import { styles } from './styles';

export const Input = ({label, placeholder, isPassword}) => {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

    const onEyePress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <View style={styles.inputContainer}>
                <TextInput secureTextEntry={isPassword && !isPasswordVisible} placeholder={placeholder} style={styles.input}></TextInput>
                {isPassword ? 
                    <Pressable onPress={onEyePress}>
                        <Image style={styles.eye} source={isPasswordVisible ? require('../../../assets/eye.png') : require('../../../assets/eye_closed.png')} />
                    </Pressable>
                    : null
                }
            </View>
        </View>
    )
};
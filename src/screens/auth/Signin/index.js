import React from 'react';
import { Text, Image, View, Pressable} from 'react-native';
import { styles } from './styles';
import Button from '../../../components/Button';
import { AuthHeader } from '../../../components/AuthHeader';
import { Input } from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
const Signin = () => {
    const [checked, setChecked] = React.useState(false);

    const onSignIn = () => {}
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign in"/>
            <Input label="Email" placeholder={"example@gmail.com"}/>
            <Input isPassword label="Password" placeholder={"*********"}/>

            <Button style={styles.button} title="Sign In" />
            {/* <Separator text='or sign in with' /> */}
            <Text style={styles.footerText}>Don't have an account? <Text style={styles.footerLink} onPress={onSignIn}>Sign Up</Text></Text>
        </View>
    )
}

export default Signin;
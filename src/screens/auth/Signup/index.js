import React from 'react';
import { Text, Image, View, Pressable} from 'react-native';
import { styles } from './styles';
import Button from '../../../components/Button';
import { AuthHeader } from '../../../components/AuthHeader';
import { Input } from '../../../components/Input';
import Checkbox from '../../../components/Checkbox';
import Separator from '../../../components/Separator';
const Signup = () => {
    const [checked, setChecked] = React.useState(false);

    const onSignIn = () => {}
    return (
        <View style={styles.container}>
            <AuthHeader title="Sign up"/>
            <Input label="Name" placeholder={"John Doe"}/>
            <Input label="Email" placeholder={"example@gmail.com"}/>
            <Input isPassword label="Password" placeholder={"*********"}/>

            <View style={styles.agreeRow}>
                <Checkbox checked={checked} onCheck={setChecked} />
                <Text style={styles.agreeText}>I agree with <Text style={styles.agreeTextBold}>Terms &amp; Privacy</Text></Text>
            </View>
            
            <Button style={styles.button} title="Sign Up" />
            {/* <Separator text='or sign up with' /> */}
            <Text style={styles.footerText}>Already have an account? <Text style={styles.footerLink} onPress={onSignIn}>Sign In</Text></Text>
        </View>
    )
}

export default Signup;
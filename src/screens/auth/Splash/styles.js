import { StyleSheet } from 'react-native';
import { colors } from '../../../../utils/colors';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        height: '100%'
    },
    image: {
        width: 300,
        height: 200,
    },
    titleContainer: {
        marginVertical: 54,
    },
    title: {
        color: colors.black,
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    innerTitle: {
        color: colors.orange,
        textDecorationLine: 'underline',
    },
    signIn: {
        color: colors.blue,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 30,
    }
});
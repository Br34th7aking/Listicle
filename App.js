import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Signin from './src/screens/auth/Signin';
import Signup from './src/screens/auth/Signup';
import Splash from './src/screens/auth/Splash';

export default function App() {
  return (
    <SafeAreaView>
      {/* <Splash /> */}
      {/* <Signup /> */}
      <Signin />
    </SafeAreaView>
  );
}


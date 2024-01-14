import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import  LoginScreen  from './App/Screen/LoginScreen.js';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';

export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });
  return (
    <ClerkProvider publishableKey='pk_test_cG9ldGljLW11c2tyYXQtNzQuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View style={styles.container}>
      <SignedIn><Text>Has iniciado sesión</Text></SignedIn>
      <SignedOut><LoginScreen/></SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

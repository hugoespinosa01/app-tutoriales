import { StyleSheet, View, Text} from 'react-native';
import { useFonts } from 'expo-font';
import  LoginScreen  from './App/Screen/LoginScreen.js';
import { ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './App/Navigations/TabNavigation.js';

export default function App() {
  const [fontsLoaded] = useFonts({
    'outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'outfit-bold': require('./assets/fonts/Outfit-Bold.ttf'),
  });
  return (
    <ClerkProvider publishableKey='pk_test_cG9ldGljLW11c2tyYXQtNzQuY2xlcmsuYWNjb3VudHMuZGV2JA'>
    <View style={styles.container}>
      <SignedIn>
        <NavigationContainer>
          <TabNavigation/>
        </NavigationContainer>
      </SignedIn>
      <SignedOut><LoginScreen/></SignedOut>
    </View>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginTop:20
  },
});

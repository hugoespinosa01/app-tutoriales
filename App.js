import { StyleSheet, View, Text } from "react-native";
import { useFonts } from "expo-font";
import LoginScreen from "./App/Screen/LoginScreen.js";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigation from "./App/Navigations/TabNavigation.js";
import { CompleteChapterContext } from "./App/Context/CompleteChapterContext.js";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import { UserPointsContext } from "./App/Context/UserPointsContext.js";

const tokenCache = {
  async getToken(key) {
    try {
      return SecureStore.getItemAsync(key);
    } catch (err) {
      return null;
    }
  },
  async saveToken(key, value) {
    try {
      return SecureStore.setItemAsync(key, value);
    } catch (err) {
      return;
    }
  },
};

export default function App() {
  const [isChapterComplete, setIsChapterComplete] = useState(false);
  const [userPoints, setUserPoints] = useState();
  const [fontsLoaded] = useFonts({
    outfit: require("./assets/fonts/Outfit-Regular.ttf"),
    "outfit-medium": require("./assets/fonts/Outfit-SemiBold.ttf"),
    "outfit-bold": require("./assets/fonts/Outfit-Bold.ttf"),
  });

  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_cG9ldGljLW11c2tyYXQtNzQuY2xlcmsuYWNjb3VudHMuZGV2JA"
    >
      <UserPointsContext.Provider value={{ userPoints, setUserPoints }}>
        <CompleteChapterContext.Provider
          value={{ isChapterComplete, setIsChapterComplete }}
        >
          <View style={styles.container}>
            <SignedIn>
              <NavigationContainer>
                <TabNavigation />
              </NavigationContainer>
            </SignedIn>
            <SignedOut>
              <LoginScreen />
            </SignedOut>
          </View>
        </CompleteChapterContext.Provider>
      </UserPointsContext.Provider>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
  },
});

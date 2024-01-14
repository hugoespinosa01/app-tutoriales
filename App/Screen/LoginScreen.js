import { View, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import loginImage from "../../assets/images/app-image.png";
import Colors from "../Utils/Colors";
import google from "../../assets/images/google.png";
import * as WebBrowser from "expo-web-browser";
WebBrowser.maybeCompleteAuthSession();
import { useOAuth, useWarmUpBrowser } from "@clerk/clerk-react";

export default function LoginScreen() {
    useWarmUpBrowser();
 
    const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
   
    const onPress = React.useCallback(async () => {
      try {
        const { createdSessionId, signIn, signUp, setActive } =
          await startOAuthFlow();
   
        if (createdSessionId) {
          setActive({ session: createdSessionId });
        } else {
          // Use signIn or signUp for next steps such as MFA
        }
      } catch (err) {
        console.error("OAuth error", err);
      }
    }, []);


  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Image
        source={loginImage}
        style={{ width: 250, height: 500, objectFit: "contain", marginTop: 50 }}
      />
      <View
        style={{
          height: 400,
          backgroundColor: Colors.PRIMARY,
          width: "100%",
          marginTop: -100,
          padding: 20,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 35,
            color: Colors.WHITE,
            fontFamily: "outfit-bold",
          }}
        >
          CODEBOX
        </Text>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            color: Colors.LIGHT_PRIMARY,
            fontFamily: "outfit",
            marginTop: 10,
          }}
        >
          App de tutoriales de Sistemas Operativos
        </Text>
        <TouchableOpacity
            onPress={onPress}
          style={{
            backgroundColor: Colors.WHITE,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
            justifyContent: "center",
            padding: 10,
            marginTop: 20,
            borderRadius: 60,
          }}
        >
          <Image source={google} style={{ width: 25, height: 25 }}></Image>
          <Text
            style={{
              fontFamily: "outfit",
              color: Colors.PRIMARY,
              fontSize: 20,
            }}
          >
            Inicia sesión con Google
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

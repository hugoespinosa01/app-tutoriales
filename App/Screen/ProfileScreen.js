import { View, Text, TouchableOpacity} from "react-native";
import React, { useEffect, useState } from "react";
import Colors from "../Utils/Colors";
import { useUser } from "@clerk/clerk-expo";
import { Image } from "react-native";
import { getUserDetail } from "../Services";
import Coin from "../../assets/images/coin.png";
import { useAuth } from "@clerk/clerk-expo";

export default function ProfileScreen() {
  const { user } = useUser();
  const [userPoints, setUserPoints] = useState();
  const { signOut } = useAuth();

  useEffect(() => {
    user && GetUserDetail();
  }, [user]);

  const GetUserDetail = () => {
    getUserDetail(user.primaryEmailAddress.emailAddress).then((res) => {
      setUserPoints(res?.point);
    });
  };

  return (
    <View>
      <View
        style={{
          height: 160,
          backgroundColor: Colors.PRIMARY,
          padding: 30,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            color: Colors.WHITE,
            fontSize: 30,
          }}
        >
          Mi perfil
        </Text>
      </View>

      <View
        style={{
          height: "100%",
          marginTop: -55,
          alignItems: "center",
        }}
      >
        <Image
          source={{ uri: user.imageUrl }}
          style={{ width: 110, height: 110, borderRadius: 99, marginLeft: 10 }}
        />
        <Text
          style={{ fontFamily: "outfit-medium", fontSize: 20, marginTop: 20 }}
        >
          {user.fullName}
        </Text>
        <View style={{ display: "flex", flexDirection: "row", marginTop: 20 }}>
          <Image
            source={Coin}
            style={{ width: 35, height: 25, marginRight: 10 }}
          />
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 15,
              color: Colors.GRAY,
            }}
          >
            {userPoints} puntos
          </Text>
        </View>
        <View
          style={{
            marginTop: 100,
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            width: 180,
            marginLeft: 20,
            borderRadius: 20,
          }}
        >
          <TouchableOpacity onPress={() => signOut()}>
            <View style={{ alignItems: "center" }}>
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 18,
                  color: Colors.WHITE,
                }}
              >
                Cerrar Sesión
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { GetAllUsers } from "../Services";
import Colors from "../Utils/Colors";
import Gold from "../../assets/images/gold-medal.png";
import Silver from "../../assets/images/silver-medal.png";
import Bronze from "../../assets/images/bronze-medal.png";

export default function LeaderBoard() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    GetAllUserDetails();
  }, []);

  const GetAllUserDetails = () => {
    GetAllUsers().then((resp) => {
      setUserList(resp.userDetails);
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
            color: Colors.WHITE,
            fontSize: 30,
            fontFamily: "outfit-bold",
          }}
        >
          Tablero
        </Text>
      </View>

      <View
        style={{
          height: "100%",
          marginTop: -60,
        }}
      >
        <FlatList
          data={userList}
          renderItem={({ item, index }) => (
            <View
              style={{
                display: "flex",
                justifyContent: "space-between",
                flexDirection: "row",
                padding: 20,
                backgroundColor: Colors.WHITE,
                margin: 8,
                marginRight: 15,
                marginLeft: 15,
                borderRadius: 20,
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  alignContent: "center",
                }}
              >
                <Text
                  style={{
                    fontFamily: "outfit-bold",
                    fontSize: 45,
                    color: Colors.GRAY,
                  }}
                >
                  {index + 1}
                </Text>

                <Image
                  source={{ uri: item.profileImage }}
                  style={{ width: 60, height: 60, borderRadius: 99, marginLeft: 10 }}
                />
                <View>
                  <Text style={{ fontFamily: "outfit-medium", fontSize: 20 }}>
                    {item.userName}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "outfit",
                      fontSize: 16,
                      color: Colors.GRAY,
                    }}
                  >
                    {item.point}
                  </Text>
                </View>
              </View>
              {index < 3 ? (
                <Image
                  style={{ width: 40, height: 40 }}
                  source={
                    index + 1 === 1 ? Gold : index + 1 === 2 ? Silver : Bronze
                  }
                />
              ) : null}
            </View>
          )}
        />
      </View>
    </View>
  );
}

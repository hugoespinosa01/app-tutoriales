import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../Utils/Colors";
import { useNavigation } from "@react-navigation/native";

export default function ChapterSection({ chapterList, userEnrolledCourse}) {
  
  const navigation = useNavigation();
  chapterList.map((i) => {
    console.log("titulo", i.title);
  });

  const OnChapterPress = (content) => {
    if(userEnrolledCourse.length === 0){
      ToastAndroid.show("Por favor, primero inscríbete al curso", ToastAndroid.LONG);
      return;
    }
    else{
      navigation.navigate("chapter-content", {
        content: content,
      });
    }
  }

  return (
    <View
      style={{
        padding: 10,
        backgroundColor: Colors.WHITE,
        marginTop: 20,
        borderRadius: 15,
      }}
    >
      <Text style={{ fontFamily: "outfit-medium", fontSize: 22 }}>
        Capítulos
      </Text>

      {chapterList.map((item, index) => (
        <TouchableOpacity
        onPress={() => OnChapterPress(item.content)}
        key={index}
        style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            borderWidth: 1,
            borderRadius: 10,
            marginTop: 10,
            borderColor: Colors.GRAY,
          }}
        
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              borderColor: Colors.GRAY,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 27,
                color: Colors.GRAY,
              }}
            >
              {index + 1}
            </Text>
            <Text
              style={{ fontFamily: "outfit", fontSize: 18, color: Colors.GRAY, marginLeft: 10 }}
            >
              {item.title}
            </Text>
          </View>
         {userEnrolledCourse.length === 0 ?  <Ionicons name="md-lock-closed" size={25} color={Colors.GRAY} /> :  <Ionicons name="play" size={25} color={Colors.GRAY} />}
        </TouchableOpacity>
      ))}
    </View>
  );
}

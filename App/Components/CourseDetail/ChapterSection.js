import { View, Text, ToastAndroid } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function ChapterSection({chapterList, userEnrolledCourse}) {
    const navigation = useNavigation();
    const OnChapterPress = (content) => {
    if (userEnrolledCourse.length === 0) {
      ToastAndroid.show("Please enroll the course first", ToastAndroid.LONG);
      return;
    }
    else{
        navigation.navigate('chapter-content', {
            content: content
        });
    }
  };

  return chapterList && (
    <View>
      <Text>ChapterSection</Text>
    </View>
  );
}

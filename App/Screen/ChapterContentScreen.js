import { View, Text, ToastAndroid } from "react-native";
import React, { useEffect, useContext } from "react";
import Content from "../Components/ChapterContent/Content";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MarkChapterCompleted } from "../Services";
import { CompleteChapterContext } from "../Context/CompleteChapterContext";
import { ScrollView } from "react-native-gesture-handler";
import { UserPointsContext } from "../Context/UserPointsContext";
import { useUser } from "@clerk/clerk-expo";

export default function ChapterContentScreen() {
  const param = useRoute().params;
  const { user }= useUser();
  const navigation = useNavigation();
  const { ischapterComplete, setIsChapterComplete } = useContext(
    CompleteChapterContext
  );
  const { userPoints, setUserPoints } = useContext(UserPointsContext);
  //ChapterId
  //RecordId

  useEffect(() => {
    //console.log("ChapterId", param.chapterId);
    //console.log("RecordId", param.userCourseRecordId);
  }, [param]);

  const onChapterFinish = () => {
    const totalPoints = Number(userPoints) + param.content?.length * 10;
    MarkChapterCompleted(
      param.chapterId,
      param.userCourseRecordId,
      user.primaryEmailAddress.emailAddress,
      totalPoints
    ).then((resp) => {
      if (resp) {
        ToastAndroid.show("¡¡Capítulo completado!!", ToastAndroid.LONG);
        setIsChapterComplete(true);
        //navigation.goBack();
      }
    });
  };

  return (
    param.content && (
      <ScrollView>
        <Content
          content={param.content}
          onChapterFinish={() => onChapterFinish()}
        />
      </ScrollView>
    )
  );
}

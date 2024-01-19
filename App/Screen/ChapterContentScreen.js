import { View, Text, ToastAndroid } from 'react-native'
import React, { useEffect, useContext } from "react";
import Content from '../Components/ChapterContent/Content'
import { useNavigation, useRoute } from '@react-navigation/native'
import { MarkChapterCompleted } from '../Services';
import { CompleteChapterContext } from '../Context/CompleteChapterContext';
import { ScrollView } from 'react-native-gesture-handler';

export default function ChapterContentScreen() {
  const param = useRoute().params;
  const navigation = useNavigation();
  const {ischapterComplete,setIsChapterComplete}=useContext(CompleteChapterContext);
  //ChapterId 
  //RecordId

  useEffect(() => {
    //console.log("ChapterId", param.chapterId);
    //console.log("RecordId", param.userCourseRecordId);
  }, [param]);

  const onChapterFinish = () => {
    MarkChapterCompleted(param.chapterId,param.userCourseRecordId).then(resp => {
    //console.log(resp)
    if(resp)
    {
      ToastAndroid.show("Capítulo Completado!!", ToastAndroid.LONG);
      setIsChapterComplete(true);
      //navigation.goBack();
    }
    })
  };

  return param.content && (
    <ScrollView>
      <Content
        content={param.content}
        onChapterFinish={() => onChapterFinish()}
      />
    </ScrollView>
  );
}
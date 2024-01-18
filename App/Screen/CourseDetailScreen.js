import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';

export default function CourseDetailScreen() {
  const navigate=useNavigation();
  const params=useRoute().params;
  useEffect(()=>{
    console.log(params.course)
  },[params.course])
  return params.course&&(
    <ScrollView style={{padding:20}}>
      <TouchableOpacity onPress={()=>navigate.goBack()}>
      <Ionicons name="arrow-back-circle"
       size={40} color="black" />
       </TouchableOpacity>
       <DetailSection course={params.course}/>
      <ChapterSection chapterList={params.course.chapters}/>
    </ScrollView>
    
  )
}
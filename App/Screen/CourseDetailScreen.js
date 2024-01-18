import { View, Text, ToastAndroid } from 'react-native'
import { enrollCourse } from '../Services'
import { getUserEnrolledCourse } from '../Services'
import { useUser } from '@clerk/clerk-expo'
import { useRoute } from '@react-navigation/native'
import React, {useEffect} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';

export default function CourseDetailScreen() {
  
  const {user} = useUser();
  const [userEnrollCourse, setUserEnrolledCourse] = React.useState(false);

  const navigate=useNavigation();
  const params=useRoute().params;
  useEffect(()=>{
    console.log(params.course)
  },[params.course])

  React.useEffect(() => {
    console.log(params?.course.id);
    if(user && params?.course){
      GetUserEnrolledCourse();
    }
  }, []);

  const UserEnrollCourse = () => {
    enrollCourse(params?.course.id, user?.primaryEmailAddress?.emailAddress)
    .then(res => {
      console.log(res);
      if(res){
        ToastAndroid.show("Enrolled Successfully", ToastAndroid.LONG);
        GetUserEnrolledCourse();
      }
    })
  }

  const GetUserEnrolledCourse = () => {
    getUserEnrolledCourse(user.id, user.primaryEmailAddress.emailAddress)
    .then(res => {
      setUserEnrolledCourse(res.userEnrolledCourses);
    })
  }
  
  return params.course&&(
    <ScrollView style={{padding:20}}>
      <TouchableOpacity onPress={()=>navigate.goBack()}>
      <Ionicons name="arrow-back-circle"
       size={40} color="black" />
       </TouchableOpacity>
       <DetailSection course={params.course} enrollCourse={()=>(UserEnrollCourse)}/>
      <ChapterSection chapterList={params.course.chapters}/>
    </ScrollView>
    
  )
}

import { View, Text, ToastAndroid } from 'react-native'
import { enrollCourse } from '../Services'
import { getUserEnrolledCourse } from '../Services'
import { useUser } from '@clerk/clerk-expo'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';

export default function CourseDetailScreen() {
  
  const {user} = useUser();
  const [userEnrolledCourse, setUserEnrolledCourse] = React.useState([]);
  const navigate=useNavigation();
  const params = useRoute().params;
  
  React.useEffect(() => {
    if(user && params?.course){
      GetUserEnrolledCourse();
    }
  }, [params.course, user]);

  const UserEnrollCourse = () => {
    enrollCourse(params?.course.id, user?.primaryEmailAddress?.emailAddress)
    .then(res => {
      if(res){
        console.log("Enrolled Successfully");
        ToastAndroid.show("Enrolled Successfully", ToastAndroid.LONG);
        GetUserEnrolledCourse();
      }
    })
  }

  const GetUserEnrolledCourse = () => {
    getUserEnrolledCourse(params.course.id, user.primaryEmailAddress.emailAddress)
    .then((res) => {
      setUserEnrolledCourse(res.userEnrolledCourses);
    })
  }
  
  return params.course&&(
    <ScrollView style={{padding:20}}>
      <TouchableOpacity onPress={()=>navigate.goBack()}>
      <Ionicons name="arrow-back-circle"
       size={40} color="black" />
       </TouchableOpacity>
       <DetailSection 
            course={params.course}
            userEnrolledCourse = {userEnrolledCourse}
            enrollCourse={UserEnrollCourse}/>
      <ChapterSection chapterList={params?.course?.chapters} userEnrolledCourse={userEnrolledCourse}/>
    </ScrollView>

    
  )
}

import { View, Text, ToastAndroid } from 'react-native'
import { enrollCourse } from '../Services'
import { getUserEnrolledCourse } from '../Services'
import { useUser } from '@clerk/clerk-expo'
import { useRoute } from '@react-navigation/native'
import React ,{useContext, useEffect,useState}from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import DetailSection from '../Components/CourseDetailScreen/DetailSection';
import ChapterSection from '../Components/CourseDetailScreen/ChapterSection';
import { CompleteChapterContext } from '../Context/CompleteChapterContext'

export default function CourseDetailScreen() {
  
  const {user} = useUser();
  const [userEnrolledCourse, setUserEnrolledCourse] = useState([]);
  const navigate=useNavigation();
  const params = useRoute().params;
  const {ischapterComplete,setIsChapterComplete}=useContext(CompleteChapterContext);

useEffect(() => {
    if(user && params?.course){
      GetUserEnrolledCourse();
    }
  }, [params.course, user]);

  useEffect(() => {
    ischapterComplete&&GetUserEnrolledCourse();
  },[ischapterComplete])
  
  const UserEnrollCourse = () => {
    enrollCourse(params?.course.id, user?.primaryEmailAddress?.emailAddress)
    .then(resp => {
      if(resp){
        ToastAndroid.show("Inscrito exitosamente", ToastAndroid.LONG);
        GetUserEnrolledCourse();
      }
    })
  }
  

  const GetUserEnrolledCourse = () => {
    getUserEnrolledCourse(params.course.id, user.primaryEmailAddress.emailAddress)
    .then((resp) => {
      setUserEnrolledCourse(resp.userEnrolledCourses);
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
            enrollCourse={()=>UserEnrollCourse()}/>
      <ChapterSection chapterList={params?.course?.chapters} userEnrolledCourse={userEnrolledCourse}/>
    </ScrollView>

    
  )
}

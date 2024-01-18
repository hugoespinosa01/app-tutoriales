import { View, Text, ToastAndroid } from 'react-native'
import React from 'react'
import { enrollCourse } from '../Services'
import { getUserEnrolledCourse } from '../Services'
import { useUser } from '@clerk/clerk-expo'
import { useRoute } from '@react-navigation/native'

export default function CourseDetailScreen() {
  
  const {user} = useUser();
  const route = useRoute();
  const params = route?.params;
  const [userEnrollCourse, setUserEnrolledCourse] = React.useState(false);

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
  return (
    <View>
      <Text>Hola</Text>
    </View>
  )
}
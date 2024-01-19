import { View } from 'react-native'
import React, { useContext, useEffect } from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Utils/Colors'
import CourseList from '../Components/HomeScreen/CourseList'
import CourseProgress from '../Components/HomeScreen/CourseProgress'
import { ScrollView } from 'react-native-gesture-handler'
import { useAuth, useUser } from '@clerk/clerk-expo'
import { UserPointsContext } from '../Context/UserPointsContext'
import { createNewUser, getUserDetail } from '../Services'

export default function HomeScreen() {

  const {isLoaded, signOut} = useAuth();
  const { user} = useUser();
  const {userPoints, setUserPoints} = useContext(UserPointsContext);

  useEffect(() => {
    user && createUser();
  }, [user]);

  const createUser = () => {
    if(user)
    {
      createNewUser(user.fullName, user.primaryEmailAddress.emailAddress, user.imageUrl)
      .then(res => {
        if(res){
          GetUser();
        }
      })
    }
  }

  const GetUser = () => {
      getUserDetail(user.primaryEmailAddress.emailAddress).then(res => {
        console.log("--", res.userDetail?.point);
        setUserPoints(res.userDetail?.point);
      })
  }

  return (
    <ScrollView>
      <View style={{backgroundColor: Colors.PRIMARY, height: 250, padding: 20}}>
      <Header/>
      </View>
      <View style={{padding: 20, paddingTop: 10}}>
        <View style={{marginTop: -90}}></View>
        <CourseProgress></CourseProgress>
      </View>
      
      <View style={{padding: 20}}>
        <View style={{marginTop: -70}}>
        <CourseList level={'Principiante'}></CourseList>
        </View>
        <CourseList level={'Avanzado'}></CourseList>
      </View>
    </ScrollView>
  )
}
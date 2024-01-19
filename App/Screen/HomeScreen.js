import { View } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Utils/Colors'
import CourseList from '../Components/HomeScreen/CourseList'
import CourseProgress from '../Components/HomeScreen/CourseProgress'
import { ScrollView } from 'react-native-gesture-handler'

export default function HomeScreen() {

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
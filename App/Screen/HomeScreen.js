import { View } from 'react-native'
import React from 'react'
import Header from '../Components/HomeScreen/Header'
import Colors from '../Utils/Colors'

export default function HomeScreen() {
  return (
    <View>
      <View style={{backgroundColor: Colors.PRIMARY, height: 250, padding: 20}}>
      <Header/>
      </View>
      <View style={{padding: 20}}>
        <View style={{marginTop: -90}}>
        <CourseList level={'Básicos'}></CourseList>
        </View>
        <CourseList level={'Avanzados'}></CourseList>
      </View>
    </View>
  )
}
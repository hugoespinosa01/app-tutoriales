import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text } from 'react-native'
import React from 'react' 
import HomeScreen from '../Screen/HomeScreen';
import MyCourse from '../Screen/MyCourse';
import LeaderBoard from '../Screen/LeaderBoard';
import ProfileScreen from '../Screen/ProfileScreen';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import HomeScreenNavigation from './HomeScreenNavigation';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown:false
    }}>
      <Tab.Screen name='Inicio' component={HomeScreenNavigation} 
      options={{
        tabBarIcon:({color, size})=>(
          <Entypo name="home" size={size} color={color} />
        )
        }}/>
        
      <Tab.Screen name='Mis cursos' component={MyCourse} 
      options={{
        tabBarIcon:({color, size})=>(
          <FontAwesome5 name="book-open" size={size} color={color} />
        )
        }}/>

      <Tab.Screen name='Tablero' component={LeaderBoard} 
      options={{
        tabBarIcon:({color, size})=>(
          <MaterialIcons name="leaderboard" size={size} color={color} />
        )
        }}/>

      <Tab.Screen name='Perfil' component={ProfileScreen} 
      options={{
        tabBarIcon:({color, size})=>(
          <MaterialIcons name="supervised-user-circle" size={size} color={color} />
        )
        }}/>
    </Tab.Navigator>

  )
}
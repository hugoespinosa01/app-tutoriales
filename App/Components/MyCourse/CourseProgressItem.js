import React from 'react'
import { View, Text, Image} from 'react-native'
import { Ionicons } from "@expo/vector-icons";
import Colors from '../../Utils/Colors';
import CourseProgressBar from '../HomeScreen/CourseProgressBar';

export default function CourseProgressItem({item, completedChapter}) {
    return (
        <View
        style={{
          padding: 10,
          backgroundColor: Colors.WHITE,
          marginRight: 15,
          borderRadius: 15,
        }}
      >
        <Image
          source={{ uri: item?.banner?.url }}
          style={{ width: 100, height: 170 }}
        ></Image>
        <View style={{ padding: 7 }}>
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 17,
            }}
          >
            {item.name}
          </Text>
          <View
            style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}
          >
            <View
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                marginTop: 5,
                flexDirection: 'row'
              }}
            >
              <Ionicons name="book-outline" size={15} color="black"></Ionicons>
              <Text style={{fontFamily: 'outfit'}}>{item?.chapters?.length} Capítulos</Text>
            </View>
            <View
              style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                marginTop: 5,
                flexDirection: 'row'
              }}
            >
              <Ionicons name="md-time-outline" size={15} color="black" />
              <Text>{item?.time}</Text>
            </View>
          </View>
          <Text style={{marginTop:5, color: Colors.PRIMARY, fontFamily: 'outfit-medium'}}>{item.free === 0 ? 'Gratis' : item.price}</Text>
        </View>
       {completedChapter !== undefined ? 
       <CourseProgressBar 
          totalChapter = {item?.chapters?.length}
          completedChapter = {completedChapter}
       
       /> : null}
      </View>
      )
}

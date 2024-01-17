import { View, Text, Image} from 'react-native'
import React from 'react'
import Ionicons from "@expo/vector-icons";

export default function CourseItem({item}) {
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
      style={{ width: 210, height: 120 }}
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
          }}
        >
          <Ionicons name="book-outline" size={24} color="black" />
          <Text style={{fontFamily: 'outfit'}}>{item?.chapters?.length} Capítulos</Text>
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginTop: 5,
          }}
        >
          <Ionicons name="md-time-outline" size={24} color="black" />
          <Text>{item?.time}</Text>
        </View>
      </View>
      <Text style={{marginTop:5, color: Colors.PRIMARY, fontFamily: 'outfit-medium'}}>{item.free == 0 ? 'Free' : item.price}</Text>
    </View>
  </View>
  )
}
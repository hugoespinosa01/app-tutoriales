import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

export default function OptionItem({icon,value}) {
  return (
    <View>
      <View
          style={{
            display: "flex",
            alignItems: "center",
            gap: 5,
            marginTop: 5,
            flexDirection: 'row'
          }}
        >
          <Ionicons name={icon} size={15} color="black"></Ionicons>
          <Text style={{fontFamily: 'outfit'}}>{value}</Text>
        </View>
    </View>
  )
}
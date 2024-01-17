import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../Utils/Colors'

export default function SubHeading({text, color=Colors.BLACK}) {
  return (
<View>
    <Text style={{
        fontSize: 24,
        fontWeight: 'outfit-bold',
        color: color
    }}>
        {text}
    </Text>
</View>  )
}

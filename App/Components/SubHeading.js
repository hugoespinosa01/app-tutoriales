import React from 'react'
import { Text, View } from 'react-native'
import Colors from '../Utils/Colors.js'

export default function SubHeading({text, color=Colors.BLACK}) {
  return (
<View>
    <Text style={{
        fontSize: 24,
        fontFamily: 'outfit-medium',
        color: color,
        marginTop:10,
        marginBottom: 10
    }}>
        {text}
    </Text>
</View>  )
}

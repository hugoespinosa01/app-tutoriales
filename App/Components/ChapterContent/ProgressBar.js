import { View, Text } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function ProgressBar({ contentLength, contentIndex }) {
  const arraySize = Array.from({ length: contentLength },(_, index) => index + 1);
  const width = 100 / contentLength;

  return (
    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: 20, marginTop:20}}>
      {arraySize.map((item, index) => (
        <View
          style={{
            flex: 1,
            backgroundColor: `${index <= contentIndex ? 
            Colors.PRIMARY : Colors.GRAY}`,
            width: `${width}%`,
            height: 10,
            borderRadius: 10,
            margin: 5,
          }}
        ></View>
      ))}
    </View>
  );
}

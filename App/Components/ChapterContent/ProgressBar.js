import { View, Text } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";

export default function ProgressBar({ contentLength, contentIndex }) {
  const arraySize = Array.from(
    { length: contentLength },
    (_, index) => index + 1
  );
  const width = 100 / contentLength;

  return (
    <View>
      {arraySize.map((item, index) => (
        <View
          style={{
            padding: 10,
            flex: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
            backgroundColor: `${index <= contentIndex ? Colors.PRIMARY : Colors.GRAY}`,
            width: `${width}%`,
            height: 10,
            borderRadius: 10,
            margin: 5,
            opacity: index < contentIndex ? 1 : 0.5,
          }}
        ></View>
      ))}
    </View>
  );
}

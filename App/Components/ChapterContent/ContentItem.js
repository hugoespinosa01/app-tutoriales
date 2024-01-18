import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import RenderHTML from "react-native-render-html";
import Colors from "../../Utils/Colors";

export default function ContentItem({ description, output }) {
  const { width } = useWindowDimensions();
  const descriptionSource = {
    html: description,
  };
  const outputSource = {
    html: output,
  };

  return (
    description && (
      <View>
        <RenderHTML
          contentWidth={width}
          source={descriptionSource}
          tagsStyles={tagStyles}
        />
        {output != null ? (
          <TouchableOpacity style={{ marginTop: -20, marginBottom: 20 }}>
            <Text
              style={{
                padding: 10,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 10,
                fontSize: 14,
                color: Colors.WHITE,
                textAlign: "center",
                width: 100,
              }}
            >
              Run
            </Text>
          </TouchableOpacity>
        ) : null}


          <Text style={{fontFamily: 'outfit-medium'}}>Output</Text>
          <RenderHTML
            contentWidth={width}
            source={outputSource}
            tagsStyles={outputStyles}
          />
      </View>
    )
  );
}

const tagStyles = {
  body: {
    fontFamily: "outfit",
    fontSize: 18,
  },
  code: {
    backgroundColor: Colors.BLACK,
    colors: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
  },
};

const outputStyles = {
  body: {
    fontFamily: "outfit",
    fontSize: 17,
    backgroundColor: Colors.BLACK,
    color: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
  },
  code: {
    backgroundColor: Colors.BLACK,
    colors: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
  },
};

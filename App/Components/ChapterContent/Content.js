import { View, Text, FlatList, Dimensions } from "react-native";
import React, {useState} from "react";
import ProgressBar from "./ProgressBar";
import { useNavigation, useRoute } from "@react-navigation/native";
import ContentItem from "./ContentItem";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Colors from "../../Utils/Colors";

export default function Content({ content, onChapterFinish }) {
  console.log(content[0].description);

  let contentRef;
  const navigation = useNavigation();
  const [activeIndex, setActiveIndex] = useState(0);
  const onNextBtnPress = (index) => {
    if (content?.length <= index + 1) {
      navigation.goBack();
      onChapterFinish();
      return;
    }
    setActiveIndex(index + 1);
    contentRef.scrollToIndex({ index: index + 1, animated: true });
  };

  return (
    <View style={{ padding: 0, height: "100%" }}>
      <ProgressBar contentLength={content?.length} contentIndex={activeIndex} />
        <FlatList
          data={content}
          horizontal={true}
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}
          ref={(ref) => (contentRef = ref)}
          renderItem={({ item, index }) => (
            <View
              style={{ width: Dimensions.get("screen").width, padding: 20 }}
              key={index}
            >
              <Text
                style={{
                  fontFamily: "outfit-medium",
                  fontSize: 22,
                  marginTop: 5,
                }}
              >
                {item.heading}
              </Text>
              <ContentItem
                description={item?.description?.html}
                output={item?.output?.html}
              />
              <TouchableOpacity onPress={() => onNextBtnPress(index)}>
                <Text
                  style={{
                    padding: 15,
                    color: Colors.WHITE,
                    textAlign: "center",
                    borderRadius: 10,
                    fontFamily: "outfit",
                    fontSize: 17,
                    backgroundColor: Colors.PRIMARY,
                    marginTop: 20,
                  }}
                >
                  {content?.length <= index + 1 ? "Finalizar" : "Siguiente"}
                </Text>
              </TouchableOpacity>
            </View>
          )}
        />
    </View>
  );
}

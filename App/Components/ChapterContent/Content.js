import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import ProgressBar from "./ProgressBar";
import { useRoute } from "@react-navigation/native";
import ContentItem from "./ContentItem";

export default function Content({content}) {
  
  return  (
    <View>
      <ProgressBar 
        contentLength={content?.length}
        contentIndex={1}
        />

        <FlatList
            data={content}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <View style={{width: Dimensions.get('screen').width, padding: 20}}>
                    <Text style={{
                        fontFamily: 'outfit-medium',
                        fontSize: 22,
                        marginTop: 15,
                    }}>{item.heading}</Text>
                    <ContentItem description={item?.description?.html} 
                      output={item?.output?.html}
                    />
                </View>
            )}
        
        />
    </View>
  );
}

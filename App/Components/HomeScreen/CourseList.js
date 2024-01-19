import { View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import SubHeading from "../SubHeading";
import CourseItem from "./CourseItem";
import {useNavigation} from '@react-navigation/native';
import Colors from "../../Utils/Colors.js";
import { getCourseList } from "../../Services";

export default function CourseList({ level }) {
  const [courseList, setCourseList] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    getCourseList(level).then(resp => {
      console.log("RESP--",resp)
       setCourseList(resp?.courses);
    })
  };

  return (
    <View style={{marginTop:10}}>
      <SubHeading
        text={level}
        color={level === "Principiante" && Colors.WHITE}
      ></SubHeading>
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => 
            navigation.navigate('course-detail',{
              course:item
            })}>
            <CourseItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

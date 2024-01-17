import { View, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import SubHeading from "../SubHeading";
import CourseItem from "./CourseItem";
import {useNavigation} from '@react-navigation/native';

export default function CourseList({ level }) {
  const [courseList, setCourseList] = React.useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    getCourses();
  }, []);

  const getCourses = () => {
    setCourseList([]);
  };

  return (
    <View>
      <SubHeading
        text={"Cursos" + level}
        color={level === "Básicos" && Colors.WHITE}
      ></SubHeading>
      <FlatList
        data={courseList}
        key={courseList.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => 
            navigation.navigate('course-detail')
          }>
            <CourseItem item={item} />
            <Stack.Screen name="Home" component={HomeScreen} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

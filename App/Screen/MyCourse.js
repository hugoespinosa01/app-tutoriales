import { View, Text, FlatList } from "react-native";
import React from "react";
import Colors from "../Utils/Colors";
import { useNavigation } from "@react-navigation/native";
import { useUser } from "@clerk/clerk-expo";
import { useEffect } from "react";
import { GetAllProgressCourse } from "../Services/index";
import CourseProgressItem from "../Components/MyCourse/CourseProgressItem";

export default function MyCourse() {
  const { user } = useUser();
  const navigation = useNavigation();
  const [progressCourseList, setProgressCourseList] = React.useState();

  useEffect(() => {
    user && GetAllProgressCourseList();
  }, [user]);

  const GetAllProgressCourseList = () => {
    GetAllProgressCourse(user.primaryEmailAddress.emailAddress).then((res) => {
      setProgressCourseList(res.userEnrolledCourses);
    });
  };

  return (
    <View>
      <View
        style={{
          height: 160,
          backgroundColor: Colors.PRIMARY,
          padding: 30,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            color: Colors.WHITE,
            fontSize: 30,
          }}
        >
          Mis cursos
        </Text>
      </View>
      <FlatList
        data={progressCourseList}
        style={{ marginTop: -50 }}
        key={progressCourseList?.id}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{ margin: 8, padding: 5 }}
            onPress={() =>
              navigation.navigate("course-detail", {
                course: item.course,
              })
            }
          >
            <CourseProgressItem
              item={item.course}
              completedChapter={item?.completedChapter?.length}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

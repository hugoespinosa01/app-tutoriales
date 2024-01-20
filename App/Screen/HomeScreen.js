import { Touchable, View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect } from "react";
import Header from "../Components/HomeScreen/Header";
import Colors from "../Utils/Colors";
import CourseList from "../Components/HomeScreen/CourseList";
import CourseProgress from "../Components/HomeScreen/CourseProgress";
import { ScrollView } from "react-native-gesture-handler";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { UserPointsContext } from "../Context/UserPointsContext";
import {
  GetAllProgressCourse,
  createNewUser,
  getCourseList,
  getUserDetail,
  getUserEnrolledCourse,
} from "../Services";

export default function HomeScreen() {
  const { isLoaded, signOut } = useAuth();
  const { user } = useUser();
  const { userPoints, setUserPoints } = useContext(UserPointsContext);
  const [courseProgressList, setCourseProgressList] = React.useState();

  useEffect(() => {
    user && createUser();
    GetCourses();
  }, [user]);

  const createUser = () => {
    if (user) {
      createNewUser(
        user.fullName,
        user.primaryEmailAddress.emailAddress,
        user.imageUrl
      ).then((res) => {
        if (res) {
          GetUser();
        }
      });
    }
  };

  const GetUser = () => {
    getUserDetail(user.primaryEmailAddress.emailAddress).then((res) => {
      setUserPoints(res?.point);
    });
  };

  const GetCourses = () => {
    GetAllProgressCourse(user.primaryEmailAddress.emailAddress).then((res) => {
      setCourseProgressList(res.userEnrolledCourses);
    });
  };

  return (
    <ScrollView>
      <View
        style={{ backgroundColor: Colors.PRIMARY, height: 250, padding: 20 }}
      >
        <Header />
      </View>

      {courseProgressList?.length > 0 && (
        <View style={{ padding: 20, paddingTop: 10 }}>
          <View style={{ marginTop: -90 }}></View>
          <CourseProgress></CourseProgress>
        </View>
      )}

      <View style={{ padding: 20 }}>
        <View
          style={
            courseProgressList?.length > 0
              ? { marginTop: -60 }
              : { marginTop: -110 }
          }
        >
          <CourseList
            level={"Principiante"}
            courseProgressList={courseProgressList}
          ></CourseList>
        </View>
        <CourseList level={"Avanzado"}></CourseList>
      </View>

        <View style={{ marginTop: 5, padding: 15 , backgroundColor: Colors.PRIMARY, width: 180, marginLeft: 20, borderRadius: 20}}>
          <TouchableOpacity onPress={() => signOut()}>
            <View style={{ alignItems: 'center'}}>
              <Text style={{fontFamily: 'outfit-medium', fontSize: 18, color: Colors.WHITE}}>Cerrar Sesión</Text>
            </View>
          </TouchableOpacity>
        </View>
    </ScrollView>
  );
}

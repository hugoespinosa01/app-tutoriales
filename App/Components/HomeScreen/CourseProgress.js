import { View, Text, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import SubHeading from '../SubHeading'
import Colors from '../../Utils/Colors'
import { GetAllProgressCourse } from '../../Services'
import { useUser } from '@clerk/clerk-expo';
import CourseItem from '../HomeScreen/CourseItem';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export default function CourseProgress() {

  const {user} = useUser();
  const navigation = useNavigation();
  const [progressCourseList, setProgressCourseList] = React.useState();

  useEffect(() => {
    user && GetAllProgressCourseList();
  }, [user]);

  const GetAllProgressCourseList = () => {
    GetAllProgressCourse(user.primaryEmailAddress.emailAddress).then(res => {
      setProgressCourseList(res.userEnrolledCourses);
    });
  }

  return (
    <View>
      <SubHeading
        text={'En progreso'}
        color={Colors.WHITE}
      ></SubHeading>  

       <FlatList
        data={progressCourseList}
        key={progressCourseList?.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('course-detail', {
            course: item.course
          })}>
            <CourseItem item={item.course} completedChapter={item?.completedChapter?.length} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}
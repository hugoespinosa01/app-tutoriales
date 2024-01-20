import { View, Image, Dimensions, Text } from "react-native";
import React from "react";
import Colors from "../../Utils/Colors";
import OptionItem from "./OptionItem";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

export default function DetailSection({ course, userEnrolledCourse, enrollCourse}){ 


  return (
    <View
      style={{ padding: 10, borderRadius: 15, backgroundColor: Colors.WHITE }}
    >
      <Image
        source={{ uri: course?.banner?.url }}
        style={{
          width: Dimensions.get("screen").width * 0.85,
          height: 190,
          borderRadius: 15,
        }}
      />
      <View style={{ padding: 10 }}>
        <Text
          style={{ fontSize: 22, fontFamily: "outfit-medium", marginTop: 10 }}
        >
          {course.name}
        </Text>

        <View>
          <View style={styles?.rowStyle}>
            <OptionItem
              icon={"book-outline"}
              value={course.chapters?.length + " Capítulo"}
            />
            <OptionItem icon={"md-time-outline"} value={course.time} />
          </View>

          <View style={styles.rowStyle}>
            <OptionItem icon={"person-circle-outline"} value={course.author} />
            <OptionItem icon={"cellular-outline"} value={course.level} />
          </View>
        </View>
        <View>
          <Text style={{ fontFamily: "outfit-medium", fontSize: 20, marginTop:10
        
        }}>
            Descripción
          </Text>
          <Text
            style={{ fontFamily: "outfit", color: Colors.GRAY, lineHeight: 23 }}
          >
            {course?.description?.markdown}
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            gap: 50,
            marginHorizontal: 30,
          }}
        >
          {userEnrolledCourse?.length === 0 ? (
            <TouchableOpacity
              onPress={() => enrollCourse()}
              style={{
                padding: 12,
                backgroundColor: Colors.PRIMARY,
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontFamily: "outfit",
                  color: Colors.WHITE,
                  textAlign: "center",
                  fontSize: 16,
                }}
              >
                Inscribirse gratis
              </Text>
            </TouchableOpacity>
          ) : null}
          <TouchableOpacity
            style={{
              padding: 12,
              backgroundColor: Colors.SECONDARY,
              borderRadius: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit",
                color: Colors.WHITE,
                textAlign: "center",
                fontSize: 16,
              }}
            >
              Membresia $2.99/Mes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBotton: 10,
  },
});

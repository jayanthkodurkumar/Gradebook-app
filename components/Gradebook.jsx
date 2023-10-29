import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
} from "react-native";
import React from "react";

const StudentItem = ({ student }) => (
  <View style={styles.itemContainer}>
    <View style={styles.left}>
      <Text style={styles.studentName}>{student.name}</Text>
      <Image
        style={styles.studentImage}
        source={{
          uri: student.thumbnail,
        }}
      />
    </View>

    <View style={styles.right}>
      <View style={styles.top}>
        <Text style={styles.title1}>GRADE </Text>
        <Text style={styles.value}>{student.grade}</Text>
      </View>

      <View style={styles.bottom}>
        <View style={styles.bottompart1}>
          <Text style={styles.title2}>CLASSES ABSENT</Text>
          <Text style={styles.value}>{student.absences}</Text>
        </View>
        <View style={styles.bottompart2}>
          <Text style={styles.title3}>Bonus Points</Text>
          <Text style={styles.value}>{student.bonusPoints}</Text>
        </View>
      </View>
    </View>
  </View>
);

const Gradebook = ({ student }) => {
  return (
    <SafeAreaView style={styles.gradeContainer}>
      <View style={styles.title}>
        <Text style={styles.titleText}>Z101: Mobile Programming</Text>
      </View>
      <View style={styles.flatList}>
        <ScrollView>
          {student.map((item) => (
            <StudentItem key={item.id} student={item} />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Gradebook;

const styles = StyleSheet.create({
  gradeContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    flex: 0.2,
    alignItems: "center",
    justifyContent: "center",
  },

  titleText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  flatList: {
    flex: 0.8,
  },
  itemContainer: {
    flexDirection: "row",
    height: 250,
    width: 335,
    justifyContent: "flex-start",
    marginVertical: 80,
  },

  left: {
    width: "30%",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#ECFFB0",
    borderRadius: 20,
    height: 240,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0,

    borderColor: "black",
    borderLeftWidth: 4,
    borderTopWidth: 4,
    borderBottomWidth: 4,
  },
  studentName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  studentImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },

  right: {
    flexDirection: "column",
  },

  top: {
    backgroundColor: "#DF3B57",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: 100,
    gap: 15,

    borderColor: "black",
    borderRightWidth: 4,
    borderTopWidth: 4,
  },

  bottom: {
    flexDirection: "row",
    height: 140,
  },
  bottompart1: {
    backgroundColor: "#1B9AAA",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
    borderColor: "black",
    borderBottomWidth: 4,
  },
  bottompart2: {
    backgroundColor: "#F7B267",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 20,
    gap: 15,
    borderColor: "black",
    borderRightWidth: 4,
    borderBottomWidth: 4,
  },
  title1: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  title2: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  title3: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  value: {
    fontSize: 16,
    textAlign: "center",
  },
});

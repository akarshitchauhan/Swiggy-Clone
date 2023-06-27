import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import quickfood from "../data/quickfood";
import { MaterialIcons } from "@expo/vector-icons";

const QuickFood = () => {
  const data = quickfood;
  return (
    <View style={styles.container}>
      <Text style={styles.textCont}>Get it Quickly</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data.map((item, index) => (
          <Pressable style={styles.pressableCont} key={index}>
            <ImageBackground
              imageStyle={{ borderRadius: 6 }}
              style={styles.imageCont}
              source={{ uri: item.image }}
            >
              <Text style={styles.imageText}>{item.offer} OFF</Text>
            </ImageBackground>
            <Text style={styles.resturantName}>
              {item.name}
            </Text>
            <View style={styles.moreInfoCont}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={styles.ratingCont}>{item.rating}</Text>
              <Text style={styles.dotCont}>•</Text>
              <Text style={styles.timeCont}>{item.time}mins</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};

export default QuickFood;

const styles = StyleSheet.create({
  container: {
    margin: 8,
  },
  textCont: {
    fontSize: 20,
    fontWeight: "500",
    marginLeft: 10,
  },
  pressableCont: {
    margin: 10,
  },
  imageCont: {
    aspectRatio: 5 / 6,
    height: 170,
  },
  imageText: {
    position: "absolute",
    bottom: 10,
    left: 10,
    fontSize: 30,
    fontWeight: "900",
    color: "white",
  },
  resturantName: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: "500",
  },
  moreInfoCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  ratingCont: {
    marginLeft: 3,
    fontSize: 15,
    fontWeight: "400",
  },
  dotCont: {
    marginLeft: 3,
  },
  timeCont: {
    marginLeft: 3,
    fontSize: 15,
    fontWeight: "400",
  },
});

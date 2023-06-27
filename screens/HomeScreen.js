import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  ScrollView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import Carousel from "../components/Carousel";
import FoodTypes from "../components/FoodTypes";
import QuickFood from "../components/QuickFood";
import { Ionicons } from "@expo/vector-icons";
import hotels from "../data/hotels";
import MenuItem from "../components/MenuItem";

const HomeScreen = () => {
  const data = hotels;
  return (
    <ScrollView >
      <View style={styles.container}>
        <TextInput
          style={styles.textBox}
          placeholder="Search for Restaurant item or more"
        />
        <AntDesign name="search1" size={24} color="#E52B50" />
      </View>

      <Carousel />

      <FoodTypes />

      <QuickFood />

      <View style={styles.filterCont}>
        <Pressable style={styles.filter}>
          <Text>Filter</Text>
          <Ionicons
            name="filter"
            size={16}
            color="black"
            style={{ marginLeft: 5 }}
          />
        </Pressable>

        <Pressable style={[styles.filter, { width: 120 }]}>
          <Text>Sort By Rating</Text>
        </Pressable>

        <Pressable style={[styles.filter, { width: 120 }]}>
          <Text>Sort By Price</Text>
        </Pressable>
      </View>

      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    padding: 10,
    margin: 15,
    borderColor: "#C0C0C0",
    borderRadius: 8,
  },
  textBox: {
    fontSize: 16,
  },
  filterCont: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  filter: {
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#C0C0C0",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
  },
});

import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ImageBackground,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MenuItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.rootCont}>
      <Pressable
        onPress={() =>
          navigation.navigate("Menu", {
            id: item.id,
            name: item.name,
            image: item.image,
            rating: item.rating,
            time: item.time,
            adress: item.adress,
            cost_for_two: item.cost_for_two,
            cuisines: item.cuisines,
            menu: item.menu,
          })
        }
        style={styles.subCont}
      >
        <View>
          <ImageBackground
            imageStyle={{ borderRadius: 6 }}
            style={styles.imgCont}
            source={{ uri: item.image }}
          >
            <AntDesign
              style={styles.imageIconCont}
              name="hearto"
              size={24}
              color="white"
            />
          </ImageBackground>
        </View>

        <View style={styles.contentCont}>
          <Text style={styles.itemName}>{item.name}</Text>
          <View style={styles.subContentCont}>
            <MaterialIcons name="stars" size={24} color="green" />
            <Text style={styles.ratingCont}>{item.rating}</Text>
            <Text style={styles.dotCont}>•</Text>
            <Text style={styles.timeCont}>{item.time}mins</Text>
          </View>

          <Text style={styles.addressCont}>{item.adress}</Text>

          <View style={styles.priceCont}>
            <View style={styles.priceSubContent}>
              <Text style={styles.rstext}>₹</Text>
            </View>

            <Text style={styles.for2text}>{item.cost_for_two} for two</Text>
          </View>

          <View style={styles.freeDeliveryCont}>
            <MaterialCommunityIcons name="bike-fast" size={24} color="black" />
            <Text style={styles.freeDeliveryIcon}>FREE DELIVERY</Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default MenuItem;

const styles = StyleSheet.create({
  rootCont: {
    margin: 10,
  },
  subCont: {
    flexDirection: "row",
  },
  imgCont: {
    aspectRatio: 5 / 6,
    height: 170,
  },
  imageIconCont: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  contentCont: {
    marginLeft: 10,
  },
  subContentCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 3,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  ratingCont: {
    marginLeft: 3,
    fontSize: 15,
    fontWeight: "400",
  },
  addressCont: {
    fontSize: 16,
    color: "gray",
    marginTop: 6,
  },
  dotCont: {
    marginLeft: 3,
  },
  timeCont: {
    marginLeft: 3,
    fontSize: 15,
    fontWeight: "400",
  },
  priceCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  priceSubContent: {
    backgroundColor: "#FFB6C1",
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: "center",
    justifyContent: "center",
  },
  rstext: {
    textAlign: "center",
    fontSize: 13,
    fontWeight: "bold",
    color: "white",
  },
  for2text: {
    marginTop: 5,
    marginLeft: 4,
    fontSize: 16,
    fontWeight: "500",
  },
  freeDeliveryCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  freeDeliveryIcon: {
    marginLeft: 6,
    fontSize: 16,
  },
});

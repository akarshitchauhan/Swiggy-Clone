import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import FoodItem from "../components/FoodItem";
import Modal from "react-native-modal";
import { useSelector } from "react-redux";

const MenuScreen = () => {
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  // console.log(total);
  // console.log(cart);
  const route = useRoute();
  const navigation = useNavigation();
  const [menu, setMenu] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    const fetchMenu = () => {
      setMenu(route.params.menu);
    };

    fetchMenu();
  }, []);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <View
            style={[
              styles.subCont,
              { justifyContent: "space-between", margin: 10 },
            ]}
          >
            <Ionicons
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
            <View style={[styles.subCont, { margin: 5 }]}>
              <AntDesign name="search1" size={20} color="black" />
              <Text style={styles.searchText}>Search</Text>
            </View>
          </View>

          <View style={styles.detailsCont}>
            <View style={styles.firstDetails}>
              <Text style={styles.nameDetails}>{route.params.name}</Text>
              <View style={styles.shareAndHeart}>
                <AntDesign name="sharealt" size={20} color="gray" />
                <AntDesign
                  name="hearto"
                  size={20}
                  color="gray"
                  style={{ marginLeft: 10 }}
                />
              </View>
            </View>

            <View style={styles.moreInfoCont}>
              <MaterialIcons name="stars" size={24} color="green" />
              <Text style={styles.ratingCont}>{route.params.rating}</Text>
              <Text style={styles.dotCont}>•</Text>
              <Text style={styles.timeCont}>{route.params.time}mins</Text>
            </View>

            <Text style={styles.cuisinesText}>{route.params.cuisines}</Text>

            <View style={styles.addressCont}>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>Outlet</Text>
              <Text style={{ marginLeft: 22, fontSize: 17, color: "gray" }}>
                {route.params.adress}
              </Text>
            </View>

            <View style={styles.addressCont}>
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>12 mins</Text>
              <Text style={{ marginLeft: 12, fontSize: 17, color: "gray" }}>
                Home
              </Text>
            </View>

            <Text style={styles.line} />

            <View style={styles.lineBottomCont}>
              <Ionicons name="bicycle" size={24} color="orange" />
              <Text style={styles.lineBottomText}>0-3 Kms |</Text>
              <Text style={styles.lineBottomText}>
                35 Delivery Fee will apply
              </Text>
            </View>
          </View>
        </View>

        <Text style={styles.menuText}>MENU</Text>
        <Text style={styles.line} />

        {route.params.menu.map((item, index) => (
          <FoodItem item={item} key={index} />
        ))}
      </ScrollView>

      <Pressable onPress={toggleModal} style={styles.menuCont}>
        <MaterialIcons
          style={{ textAlign: "center" }}
          name="menu-book"
          size={24}
          color="white"
        />
        <Text style={styles.menu_Text}>MENU</Text>
      </Pressable>

      <Modal isVisible={modalVisible} onBackdropPress={toggleModal}>
        <View style={styles.modalCont}>
          {menu.map((item, i) => (
            <View style={styles.modalSubCont} key={i}>
              <Text style={styles.modalText}>{item.name}</Text>
              <Text style={styles.modalText}>{item.items.length}</Text>
            </View>
          ))}
          <View style={styles.modalImage}>
            <Image
              style={styles.imageStyle}
              source={{
                uri: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza",
              }}
            />
          </View>
        </View>
      </Modal>

      {total === 0 ? null : (
        <Pressable style={styles.totalCont}>
          <View style={styles.cartCont}>
            <View>
              <Text style={styles.cartItems}>
                {cart.length} items | {total}
              </Text>
              <Text style={styles.extraCharges}>Extra Charges may Apply!</Text>
            </View>

            <Pressable
              onPress={() =>
                navigation.navigate("Cart", {
                  name: route.params.name,
                })
              }
            >
              <Text style={styles.viewCartText}>View Cart</Text>
            </Pressable>
          </View>
        </Pressable>
      )}
    </>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginTop: 45,
    backgroundColor: "#B0C4DE",
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  subCont: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 5,
  },
  detailsCont: {
    backgroundColor: "white",
    height: 210,
    marginHorizontal: 20,
    marginVertical: 2,
    padding: 10,
    borderRadius: 15,
  },
  firstDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  nameDetails: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  shareAndHeart: {
    flexDirection: "row",
  },
  moreInfoCont: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
    marginLeft: 7,
  },
  ratingCont: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: "400",
  },
  dotCont: {
    marginLeft: 5,
  },
  timeCont: {
    marginLeft: 5,
    fontSize: 17,
    fontWeight: "400",
  },
  cuisinesText: {
    color: "gray",
    fontSize: 17,
    fontWeight: "400",
    marginLeft: 10,
    marginTop: 5,
  },
  addressCont: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
    marginTop: 10,
  },
  line: {
    borderColor: "gray",
    borderWidth: 0.6,
    height: 1,
    marginTop: 15,
  },
  lineBottomCont: {
    marginTop: 10,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  lineBottomText: {
    fontSize: 17,
    marginLeft: 7,
  },
  menuText: {
    textAlign: "center",
    fontSize: 17,
    fontWeight: "500",
    marginTop: 10,
  },
  menuCont: {
    width: 60,
    height: 60,
    borderRadius: 40,
    justifyContent: "center",
    backgroundColor: "black",
    marginLeft: "auto",
    position: "absolute",
    bottom: 35,
    right: 25,
    alignContent: "center",
  },
  menu_Text: {
    textAlign: "center",
    color: "white",
    fontWeight: "500",
  },
  modalCont: {
    height: 190,
    width: 250,
    backgroundColor: "black",
    position: "absolute",
    bottom: 35,
    right: 10,
    borderRadius: 7,
  },
  modalSubCont: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  modalText: {
    color: "#D0D0D0",
    fontWeight: "600",
    fontSize: 19,
  },
  modalImage: {
    justifyContent: "center",
    alignItems: "center",
  },
  imageStyle: {
    width: 120,
    height: 70,
    resizeMode: "contain",
  },
  totalCont: {
    backgroundColor: "#00A877",
    width: "90%",
    padding: 13,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 30,
    position: "absolute",
    borderRadius: 8,
    left: 20,
    bottom: 10,
  },
  cartCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartItems: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  extraCharges: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 3,
    color: "white",
  },
  viewCartText: {
    fontSize: 18,
    fontWeight: "600",
    color: "white",
  },
});

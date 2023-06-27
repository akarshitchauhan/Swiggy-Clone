import { StyleSheet, Text, View, ScrollView, Pressable } from "react-native";
import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  cleanCart,
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "../redux/CartReducer";

const CartScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const cart = useSelector((state) => state.cart.cart);
  const total = cart
    .map((item) => item.price * item.quantity)
    .reduce((curr, prev) => curr + prev, 0);
  const dispatch = useDispatch();
  const instructions = [
    {
      id: "0",
      name: "Avoid Ringing",
      iconName: "bell",
    },
    {
      id: "1",
      name: "Leave at the door",
      iconName: "door-open",
    },
    {
      id: "2",
      name: "directions to reach",
      iconName: "directions",
    },
    {
      id: "3",
      name: "Avoid Calling",
      iconName: "phone-alt",
    },
  ];
  return (
    <>
      <ScrollView style={styles.rootCont}>
        {total > 0 ? (
          <>
            <View style={styles.topCont}>
              <Ionicons
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={24}
                color="black"
              />
              <Text style={styles.topText}>{route.params.name}</Text>
            </View>

            <View style={styles.secondCont}>
              <Text style={{ fontSize: 16, fontWeight: "500" }}>
                Ordering for Someone else ?{" "}
              </Text>
              <Text
                style={{ fontSize: 16, fontWeight: "700", color: "#FF4500" }}
              >
                Add Details
              </Text>
            </View>

            <View style={styles.thirdCont}>
              {cart.map((item, index) => (
                <View style={styles.thirdSubSubCont} key={index}>
                  <Text style={styles.itemName}>{item.name}</Text>

                  <Pressable>
                    <Pressable style={styles.thirdSubCont}>
                      <Pressable
                        onPress={() => {
                          dispatch(decrementQuantity(item));
                        }}
                      >
                        <Text style={styles.thirdSubContText}>-</Text>
                      </Pressable>

                      <Pressable>
                        <Text style={styles.thirdSubContText}>
                          {item.quantity}
                        </Text>
                      </Pressable>

                      <Pressable
                        onPress={() => {
                          dispatch(incrementQuantity(item));
                        }}
                      >
                        <Text style={styles.thirdSubContText}>+</Text>
                      </Pressable>
                    </Pressable>
                  </Pressable>

                  <Text style={styles.itemPrice}>
                    ₹{item.price * item.quantity}
                  </Text>
                </View>
              ))}
            </View>

            <View style={{ padding: 10 }}>
              <Text style={styles.deliveryInsc}>Delivery Instructions</Text>
              <ScrollView
                horizontal
                style={{ marginTop: 10 }}
                showsHorizontalScrollIndicator={false}
              >
                {instructions.map((item, i) => (
                  <Pressable style={styles.instructionsCont}>
                    <View style={styles.instructionsSubCont}>
                      <FontAwesome5
                        name={item.iconName}
                        size={22}
                        color={"gray"}
                      />
                      <Text style={styles.instructionsText}>{item.name}</Text>
                    </View>
                  </Pressable>
                ))}
              </ScrollView>
            </View>

            <View style={{ marginHorizontal: 10 }}>
              <Text style={styles.billingDetailText}>Billing Details</Text>
              <View style={styles.billingDetailCont}>
                <View style={styles.billingDetailSubCont}>
                  <Text style={styles.billingDetailSubContText1}>
                    Item Total
                  </Text>
                  <Text style={styles.itemTotalPrice}>₹{total}</Text>
                </View>

                <View style={styles.billingDetailSubCont}>
                  <Text style={styles.billingDetailSubContText1}>
                    Delivery Fee | 1.2KM
                  </Text>
                  <Text style={styles.redText}>FREE</Text>
                </View>

                <View style={styles.billingDetailSubCont}>
                  <Text
                    style={[
                      styles.billingDetailSubContText1,
                      { fontWeight: "bold" },
                    ]}
                  >
                    Free Delivery on Your order
                  </Text>
                </View>

                <View style={styles.line} />

                <View style={styles.billingDetailSubCont}>
                  <Text style={styles.billingDetailSubContText1}>
                    Delivery Tip
                  </Text>
                  <Text style={styles.redText}>ADD TIP</Text>
                </View>

                <View style={styles.billingDetailSubCont}>
                  <Text
                    style={[
                      styles.billingDetailSubContText1,
                      { fontWeight: "bold" },
                    ]}
                  >
                    Taxes and Charges
                  </Text>

                  <Text style={styles.redText}>95</Text>
                </View>

                <View style={styles.line} />

                <View style={styles.billingDetailSubCont}>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    To Pay
                  </Text>
                  <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                    {total + 95}
                  </Text>
                </View>
              </View>
            </View>
          </>
        ) : (
          <View style={styles.alternateCont}>
            <Text style={styles.alternateContText}>Your cart is Empty!</Text>
          </View>
        )}
      </ScrollView>

      {total === 0 ? null : (
        <Pressable style={styles.bottomCont}>
          <View style={{marginLeft: 5}}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>
              ₹{total + 95}
            </Text>
            <Text style={{ color: "#00A877", fontSize: 17 }}>
              View Detailed Bill
            </Text>
          </View>

          <Pressable
            onPress={() => {
              navigation.navigate("Loading");
              dispatch(cleanCart());
            }}
            style={styles.bottomButton}
          >
            <Text style={styles.buttonText}>Proceed To pay</Text>
          </Pressable>
        </Pressable>
      )}
    </>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  rootCont: {
    marginTop: 45,
  },
  topCont: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  topText: {
    fontSize: 20,
    fontWeight: "600",
    marginLeft: 10,
  },
  secondCont: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  thirdCont: {
    marginTop: 16,
    marginHorizontal: 15,
    backgroundColor: "white",
    borderRadius: 12,
    padding: 14,
  },
  thirdSubCont: {
    flexDirection: "row",
    paddingHorizontal: 2,
    paddingVertical: 10,
    alignItems: "center",
    borderColor: "#BEBEBE",
    borderWidth: 0.5,
    borderRadius: 10,
  },
  thirdSubSubCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  thirdSubContText: {
    fontSize: 20,
    color: "green",
    paddingHorizontal: 6,
    width: 35,
    fontWeight: "600",
  },
  itemName: {
    width: 100,
    fontSize: 16,
    fontWeight: "600",
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },
  alternateCont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  alternateContText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  deliveryInsc: {
    fontSize: 16,
    fontWeight: "600",
  },
  instructionsCont: {
    margin: 10,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
  },
  instructionsSubCont: {
    alignItems: "center",
    justifyContent: "center",
  },
  instructionsText: {
    width: 75,
    fontSize: 13,
    color: "#383838",
    paddingTop: 10,
    textAlign: "center",
  },
  billingDetailText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  billingDetailCont: {
    backgroundColor: "white",
    borderRadius: 7,
    padding: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  billingDetailSubCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 5,
  },
  billingDetailSubContText1: {
    fontSize: 18,
    fontWeight: "400",
    color: "gray",
  },
  itemTotalPrice: {
    fontSize: 18,
    fontWeight: "400",
  },
  redText: {
    fontSize: 18,
    fontWeight: "400",
    color: "#FF4500",
  },
  line: {
    borderColor: "gray",
    height: 1,
    borderWidth: 0.5,
    marginTop: 10,
  },
  bottomCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    marginHorizontal: 10,
    padding: 20,
  },
  bottomButton: {
    backgroundColor: "#00A877",
    padding: 14,
    width: 200,
    borderRadius: 10,
    width: 130,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});

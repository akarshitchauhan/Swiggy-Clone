import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import moment from "moment";
import MapView, { Marker, Polyline } from "react-native-maps";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
const OrderScreen = () => {
  const [tip, setTip] = useState(0);
  const time = moment().format("LT");
  const mapView = useRef(null);
  const [coordinates] = useState([
    {
      latitude: 28.672660,
      longitude: 77.469204,
    },
    {
      latitude: 28.67521,
      longitude: 77.44250,
    },
  ]);
  useEffect(() => {
    mapView.current.fitToCoordinates(coordinates, {
      edgePadding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
    });
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.topCont}>
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.topContText}>Delivery in 20 mins</Text>
          <Text style={[styles.topContText, { marginTop: 4 }]}>
            Order placed at {time}
          </Text>
        </View>
        <Text style={{ fontSize: 17, fontWeight: "bold", color: "white" }}>
          HELP
        </Text>
      </View>
      <MapView
        ref={mapView}
        style={{ width: "100%", height: 400 }}
        initialRegion={{
          latitude: 28.672660,
          longitude: 77.469204,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} />

        <Polyline
          coordinates={coordinates}
          strokeColor="black"
          lineDashPattern={[4]}
          strokeWidth={1}
        />
      </MapView>
      <View style={styles.bottomCont}>
        <View style={{ padding: 10 }}>
          <View>
            <Text style={styles.topLine}>
              Bikanervala has accepted your order
            </Text>
            <View style={styles.bottomSubCont}>
              <FontAwesome5
                name="hand-holding-heart"
                size={28}
                color="#fc8019"
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.text1}>Tip your hunger Saviour</Text>
                <Text style={styles.text2}>
                  Thank your delivery partner for helping you stay safe
                  indoors.Support them through these tough times with a tip
                </Text>
                <Pressable style={styles.bottomSubCont2}>
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setTip(30)}
                    style={styles.tipButton}
                  >
                    <Text style={styles.tipButtonText}>₹30</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setTip(50)}
                    style={{
                      alignItems: "center",
                      backgroundColor: "#F5F5F5",
                      marginHorizontal: 10,
                      borderRadius: 7,
                    }}
                  >
                    <Text
                      style={{
                        padding: 4,
                        color: "#002D62",
                        fontWeight: "bold",
                      }}
                    >
                      ₹50
                    </Text>
                    <Text
                      style={{
                        backgroundColor: "orange",
                        paddingHorizontal: 10,
                        fontSize: 14,
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Most Tipped
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => setTip(70)}
                    style={styles.tipButton}
                  >
                    <Text style={styles.tipButtonText}>₹70</Text>
                  </TouchableOpacity>
                </Pressable>
              </View>
            </View>
            {tip ? (
              <View>
                <Text
                  style={{
                    color: "#fc8019",
                    padding: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    fontSize: 16,
                    fontWeight: "600",
                  }}
                >
                  please pay {"₹"}
                  {tip} to your delivery agent at the time of delivery
                </Text>
                <TouchableOpacity
                  onPress={() => setTip(0)}
                  activeOpacity={0.7}
                  style={{
                    padding: 10,
                    marginLeft: 10,
                    marginRight: 10,
                    position: "absolute",
                    top: 40,
                    paddingBottom: 40,
                  }}
                >
                  <Text
                    style={{ color: "red", fontSize: 14, fontWeight: "700" }}
                  >
                    (Cancel)
                  </Text>
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({
  topCont: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 80,
    marginTop: 45,
    backgroundColor: "#fc8019",
    padding: 10,
  },
  topContText: {
    color: "white",
    fontSize: 17,
    fontWeight: "600",
  },
  bottomCont: {
    height: 320,
    width: "100%",
    backgroundColor: "white",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  topLine: {
    fontWeight: "500",
    fontSize: 17,
    textAlign: "center",
  },
  bottomSubCont: {
    flexDirection: "row",
    marginTop: 20,
    marginLeft: 10,
  },
  text1: {
    fontSize: 18,
    fontWeight: "500",
    paddingHorizontal: 2,
    marginBottom: 6,
  },
  text2: {
    fontSize: 16,
    fontWeight: "600",
    color: "#696969",
    marginRight: 10,
    width: 300,
    paddingHorizontal: 2,
  },
  bottomSubCont2: {
    paddingTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  tipButton: {
    backgroundColor: "#F5F5F5",
    marginHorizontal: 10,
    paddingHorizontal: 10,
    borderRadius: 7,
  },
  tipButtonText: {
    padding: 10,
    color: "#002D62",
    fontWeight: "bold",
  },
});

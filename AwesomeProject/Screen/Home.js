import { React } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
// for blur
import { BlurView } from "expo-blur";
//
import Splash from "../assets/Splashscreen.png";

const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.container}>
        <View style={{ backgroundColor: "", flex: 13 / 10 }}>
          <Image style={{ marginTop: -100, marginLeft: 150 }} source={Splash} />
        </View>
        <View style={{ marginTop: 0, alignSelf: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            <Text style={{ color: "white", fontSize: 25 }}>V</Text>accine{" "}
            <Text style={{ color: "white", fontSize: 25 }}>A</Text>pp
          </Text>
        </View>
        <View style={{ marginTop: 5, alignSelf: "center", margin: 0 }}>
          <Text style={{ color: "#EDEEEF" }}>
            Stay Vaccinated, Stay on Track{" "}
          </Text>
        </View>
        <View style={{ marginTop: 5, alignSelf: "center", margin: 0 }}>
          <Text style={{ color: "#EDEEEF" }}>with Vaccine Tracker App.</Text>
        </View>

        <View style={styles.bottom}>
          <View style={{ justifyContent: "center", alignContent: "center" }}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("SignUp");
              }}
            >
              <Text
                style={{
                  borderRadius: 10,
                  alignSelf: "center",
                  color: "black",
                  fontSize: 15,
                  backgroundColor: "#EDEEEF",
                  height: 40,
                  width: "60%",
                  textAlign: "center",
                  padding: 10,
                  fontWeight: "bold",
                }}
              >
                Get Started
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text
                style={{
                  borderRadius: 10,
                  alignSelf: "center",
                  color: "white",
                  fontSize: 15,
                  marginTop: 20,
                  backgroundColor: "#2E6969",
                  height: 40,
                  width: "60%",
                  textAlign: "center",
                  padding: 10,
                  fontWeight: "bold",
                }}
              >
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#329998",
  },

  top: {
    flex: 2 / 10,
  },
  bottom: {
    flex: 10 / 10,
    backgroundColor: "transparent",
    width: "95%",
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
  input: {
    backgroundColor: "#7C7D7A",
    width: "70%",
    height: 40,
    alignSelf: "center",
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default Home;

import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import userService from "../services/userservices";

//
import img from "../assets/banner.png";

const SignUp = ({ navigation }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("");

  const [errormsg, setErrormsg] = useState(null);
  const [passwordError, setpasswordError] = useState(null);

  const validatePassword = (password) => {
    // Define the regular expression pattern for the password rules
    const passwordPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;

    // Test if the password matches the pattern
    const isValid = passwordPattern.test(password);

    // Return true if the password is valid, false otherwise
    return isValid;
  };

  async function senddata() {
    const isValidPassword = validatePassword(password);
    if (password.length < 8) {
      setErrormsg("Password should be at least 8 characters long.");
    }
    if (!name || !email || !password || !confirmPassword || !role) {
      setErrormsg("Please fillout all the filled !!! ");
    } else if (password != confirmPassword) {
      setErrormsg("Password and Confirm password is Incorrect");
    } else if (isValidPassword == false) {
      setpasswordError(
        "Password should be atleast 1 Small,Large and 1 special character and 1 digit"
      );
    } else {
      userService
        .register(name, email, password, role)
        .then((data) => {
          console.log(data);
          // props.location.push("/login");
          navigation.navigate("Login");
        })
        .catch((err) => {
          console.log(err);
          // toast.error(err.response.data,{
          // // toast.error(err.history.data,{
          // position: toast.POSITION.TOP_CENTER
          // });
        });
    }
    console.log("Signup Successfully data : " + name, email, password, role);
  }

  return (
    <>
      <ImageBackground source={img} resizeMode="cover" style={styles.img}>
        {/* <KeyboardAvoidingView></KeyboardAvoidingView> */}
        <View style={styles.container}>
          <View style={styles.top}></View>
          <View style={styles.bottom}>
            <ScrollView>
              <View style={{ marginTop: 0, alignSelf: "center" }}>
                <Text
                  style={{
                    alignSelf: "center",
                    fontSize: 35,
                    fontWeight: "bold",
                    marginTop: 40,
                  }}
                >
                  <Text style={{ color: "white", fontSize: 40 }}>V</Text>accine{" "}
                  <Text style={{ color: "white", fontSize: 35 }}>A</Text>pp
                </Text>
              </View>
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 14,
                  marginTop: 10,
                }}
              >
                Create Your Account
              </Text>
              <Text
                style={{ alignSelf: "center", fontSize: 10, marginTop: 20 }}
              >
                {errormsg ? (
                  <View style={{ backgroundColor: "#C2185B", margin: 10 }}>
                    <Text
                      style={{
                        alignSelf: "center",
                        borderRadius: 10,
                        padding: 5,
                        color: "white",
                        fontSize: 10,
                      }}
                    >
                      {errormsg}
                    </Text>
                  </View>
                ) : null}
              </Text>
              {passwordError ? (
                <Text
                  style={{
                    alignSelf: "center",
                    backgroundColor: "white",
                    borderRadius: 10,
                    padding: 5,
                    color: "black",
                    fontSize: 10,
                  }}
                >
                  {passwordError}
                </Text>
              ) : null}

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 15,
                  margin: 0,
                  marginLeft: 60,
                }}
              >
                Name
              </Text>
              <TextInput
                onPressIn={() => {
                  setErrormsg(null);
                }}
                style={styles.input}
                onChangeText={(name) => {
                  setName(name.toUpperCase());
                }}
                placeholder="Enter Name"
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 60,
                }}
              >
                Email
              </Text>
              <TextInput
                onPressIn={() => {
                  setErrormsg(null);
                }}
                style={styles.input}
                onChangeText={(email) => {
                  setEmail(email);
                }}
                placeholder="Enter Email"
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 60,
                }}
              >
                Password
              </Text>
              <TextInput
                onPressIn={() => {
                  setErrormsg(null);
                }}
                style={styles.input}
                onChangeText={(pass) => {
                  setPassword(pass);
                }}
                placeholder="Enter Password"
                secureTextEntry={true}
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 60,
                }}
              >
                Confirm Password
              </Text>
              <TextInput
                onPressIn={() => {
                  setErrormsg(null);
                }}
                style={styles.input}
                onChangeText={(pass) => {
                  setConfirmPassword(pass);
                }}
                placeholder="Enter Confirm Password"
                secureTextEntry={true}
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 60,
                }}
              >
                Role
              </Text>
              <TextInput
                onPressIn={() => {
                  setErrormsg(null);
                }}
                style={styles.input}
                onChangeText={(role) => {
                  setRole(role.toLowerCase());
                }}
                placeholder="User || Admin ||Delivery || clinic"
              />

              <TouchableOpacity
                onPress={() => {
                  senddata();
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
                  Sign up
                </Text>
              </TouchableOpacity>

              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 10,
                  marginTop: 10,
                }}
              >
                Help or Question?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Login");
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "white",
                    fontSize: 10,
                    marginBottom: 30,
                  }}
                >
                  Login
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  img: {
    flex: 1,
  },
  top: {
    flex: 2.5 / 10,
  },
  bottom: {
    flex: 7.5 / 10,
    backgroundColor: "#329998",
    width: "100%",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  input: {
    backgroundColor: "#EDEEEF",
    width: "70%",
    height: 40,
    alignSelf: "center",
    borderRadius: 5,
    paddingLeft: 10,
  },
});

export default SignUp;

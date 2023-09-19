import { React, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  ScrollView,
} from "react-native";
import jwtDecode from "jwt-decode";

import userService from "../services/userservices";
import * as MailComposer from "expo-mail-composer";

//
import img from "../assets/banner.png";
// const image = { uri:'https://reactjs.org/logo-og.png'}

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [LoginToken, setLoginToken] = useState([]);
  const [errormsg, setErrormsg] = useState(null);

  function checkfiled() {
    if (!email || !password) {
      setErrormsg("Please fillout all the filled !!! ");
    }
  }

  // useEffect( async()=>{
  //     //const tok = await AsyncStorage.setItem("token", JSON.stringify(LoginToken));
  // },[])

  // const sendVerificationEmail = ({email}) => {
  // const emailBody = `
  //   <p>Dear user,</p>
  //   <p>Click the link below to verify your email:</p>
  //   <a href="localhost:4000/signup">Verify Email</a>
  // `;

  // MailComposer.composeAsync({
  //   recipients: ['adeelilyas7373@gmail.com'], // Replace with the user's email
  //   subject: 'Verify Your Email',
  //   body: emailBody,
  //   isHtml: true,
  // })
  //   .then((result) => {
  //     if (result.status === 'sent') {
  //       Alert.alert('Email sent successfully!');
  //     } else {
  //       Alert.alert('Email not sent.');
  //     }
  //   })
  //   .catch((error) => {
  //     Alert.alert('An error occurred:', error.message);
  //   });
  // }
  return (
    <>
      <ImageBackground source={img} resizeMode="cover" style={styles.img}>
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
                    marginTop: 70,
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
                Login to your Account
              </Text>
              <Text
                style={{
                  alignSelf: "center",
                  color: "red",
                  fontSize: 10,
                  marginTop: 20,
                }}
              >
                {errormsg ? (
                  <View style={{ backgroundColor: "#C2185B" }}>
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

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "white",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 60,
                  marginTop: 10,
                }}
              >
                Email
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(email) => {
                  setEmail(email);
                }}
                placeholder="Enter Email"
              />

              {/* {console.log(name)} */}

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
                style={styles.input}
                onChangeText={(pass) => {
                  setPassword(pass);
                }}
                placeholder="Enter Password"
              />

              <TouchableOpacity
                onPress={(e) => {
                  userService
                    .login(email, password)
                    .then((data) => {
                      const mytok = jwtDecode(data);
                      //setLoginToken(data);
                      // console.log("LOGIN TOKEN" + data );
                      // console.log(" LOGIN TOKEN  after JWTDECODE = " + JSON.stringify(mytok));
                      console.log(" LOGIN TOKEN  Role= " + mytok.role);

                      if (mytok.role.toLowerCase() == "user") {
                        navigation.navigate("Homeuser", {
                          token_id: mytok._id,
                        });
                      } else if (mytok.role.toLowerCase() == "admin") {
                        navigation.navigate("AdminDrawer");
                      } else if (mytok.role.toLowerCase() == "clinic") {
                        navigation.navigate("ClinicDrawer");
                      } else if (mytok.role.toLowerCase() == "delivery") {
                        navigation.navigate("DeliveryDrawer");
                      } else {
                        console.log("first define role");
                      }
                      // window.location.href = "/";
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                  checkfiled();
                  // sendVerificationEmail(email);
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

              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontSize: 10,
                  marginTop: 10,
                }}
              >
                Forgot Password?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SignUp");
                }}
              >
                <Text
                  style={{ alignSelf: "center", color: "white", fontSize: 10 }}
                >
                  Don't have Account?
                  <Text style={{ textDecorationLine: "underline" }}>
                    Signup
                  </Text>
                </Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </ImageBackground>
    </>

    // <View style={styles.container}>
    //     <Text>Login PAGE PLEASE</Text>
    //     <TouchableOpacity onPress={()=>{navigation.navigate("SignUp")}}>
    //         <Text>SignUp</Text>
    //     </TouchableOpacity>

    // </View>
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
    // borderTopLeftRadius:50,
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

export default Login;

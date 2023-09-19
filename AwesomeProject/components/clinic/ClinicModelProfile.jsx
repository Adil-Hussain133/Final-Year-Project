import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Pressable,
  Modal,
  TextInput,
  Alert,
} from "react-native";
import axios from "axios";
import MyComponentAlert from "./AlertCall";

import myURL from "../../services/myurls";

const ClinicModelProfile = ({
  navigation,
  modalVisible,
  setModalVisible,
  User_Token,
  profiledata,
}) => {
  const [my_ID, setmy_ID] = useState(clinic_Token._id);
  const [my_ROLE, setmy_ROLE] = useState(clinic_Token.my_ROLE);

  console.log("Profile data at Model" + profiledata.name); // everyhting in profile is here
  //console.log("PersonalModelProfile data" + JSON.stringify(Tokendata));
  // const [modalVisible, setModalVisible] = useState(false);

  // ID OF THE USER -- THERE ARE MANY USER LOGIN AT RUN TIME
  // const [_my_ID,SetmyID] = useState('');
  // const [_my_ROLE,SetROLE] = useState('');
  const [name, SetName] = useState("Adeel");
  const [gender, SetGender] = useState("");
  const [age, SetAge] = useState(0);
  const [cnic, SetCNIC] = useState(0);
  const [country, SetCountry] = useState("");
  const [phoneno, SetPhoneno] = useState("");
  const [allergies, SetAllergies] = useState("");
  const [medical, SetMedical] = useState("");
  // const [image,SetImage] = useState('');
  // const [Picture,setPicture] = useState('');

  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <Text style={styles.textStyle}> X </Text>
          </Pressable>

          <View style={styles.modalView}>
            <ScrollView style={{ width: "100%" }}>
              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Name
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(name) => {
                  SetName(name);
                }}
                placeholder="Enter Name"
              />

              {/* {console.log(firstname)} */}

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Gender
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(gender) => {
                  SetGender(gender);
                }}
                placeholder="Enter Gender"
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                CNIC
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(cnic) => {
                  SetCNIC(cnic);
                }}
                placeholder="Enter CNIC [without -]"
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Age
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(age) => {
                  SetAge(age);
                }}
                placeholder="Enter Age  "
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Phone Number
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(phone) => {
                  SetPhoneno(phone);
                }}
                placeholder="Enter Phone"
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Country
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(country) => {
                  SetCountry(country);
                }}
                placeholder="Enter Country"
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Medical
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(medical) => {
                  SetMedical(medical);
                }}
                placeholder="Enter Medical"
              />

              <Text
                style={{
                  alignSelf: "flex-start",
                  color: "black",
                  fontSize: 15,
                  margin: 10,
                  marginLeft: 20,
                }}
              >
                Allergies
              </Text>
              <TextInput
                style={styles.input}
                onChangeText={(allergies) => {
                  SetAllergies(allergies);
                }}
                placeholder="Enter Allergies"
              />

              {/* <Text style={{alignSelf:'flex-start',color:'black',fontSize:15,margin:10,marginLeft:20}}>Images</Text>
                        <TextInput style={styles.input} onChangeText={(country)=>{setcountry(country)}}  placeholder="Enter Image"/> */}

              <Pressable
                onPress={(e) => {
                  axios
                    .put(myURL + "/Clinic/clinicProfile/" + profiledata._id, {
                      my_ID,
                      my_ROLE,
                      name,
                      gender,
                      age,
                      cnic,
                      country,
                      phoneno,
                      medical,
                      allergies,
                    })
                    .then((res) => {
                      console.log(res.data);
                      console.log("Profile Save!! ");
                      setModalVisible(!modalVisible);
                      Alert.alert("SAVE PROFILE");
                      navigation.navigate("Homeuser");

                      // {Alert.alert("Hi")}
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                }}
              >
                <Text
                  style={{
                    borderRadius: 10,
                    alignSelf: "center",
                    color: "white",
                    fontSize: 15,
                    marginTop: 20,
                    backgroundColor: "#E92424",
                    height: 40,
                    width: "60%",
                    textAlign: "center",
                    padding: 10,
                    fontWeight: "bold",
                  }}
                >
                  Profile
                </Text>
              </Pressable>
              {/* <MyComponentAlert /> */}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  //
  //
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    flex: 9 / 10,
    width: "90%",
    margin: 5,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    shadowColor: "white",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    marginTop: 20,
    // backgroundColor: 'white',
    borderWidth: 2,
    borderColor: "#2196F3",
    padding: 15,
  },
  textStyle: {
    color: "white",
    backgroundColor: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: "white",
    width: "90%",
    height: 40,
    alignSelf: "center",
    borderRadius: 5,
    paddingLeft: 10,
    borderWidth: 2,
    borderColor: "gray",
  },
});

export default ClinicModelProfile;

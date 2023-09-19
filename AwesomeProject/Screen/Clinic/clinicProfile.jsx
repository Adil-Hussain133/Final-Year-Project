import React, { useEffect, useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import person from "../../assets/person.jpg";
import myURL from "../../services/myurls";

import PersonalModelProfile from "../../components/user/PersonalModelProfile";

import { useRoute } from "@react-navigation/native";
const ClinicProfile = ({ navigation, token_id }) => {
  const route = useRoute();
  let Token = route.params?.token;
  console.log("tok", Token._id);

  const [resData, setresData] = useState([]);

  useEffect(() => {
    getClinicProfile();
  }, []);

  const getClinicProfile = () => {
    axios
      .get(`${myURL}/Clinic/clinicProfile?my_ID=${Token._id}`)
      .then((res) => {
        console.log("match User ID" + res.data);
        setresData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <ScrollView>
        {/* {console.log("DATA : ", data)} */}
        <View style={{ flex: 1 }}>
          <View
            style={{
              height: 300,
              justifyContent: "center",
              backgroundColor: "#329998",
              borderBottomLeftRadius: 40,
              borderBottomRightRadius: 40,
            }}
          >
            <Pressable
              onPress={() => {
                navigation.navigate("Homeclinic");
              }}
            >
              <Ionicons
                name="arrow-back-circle-sharp"
                size={40}
                color="white"
                style={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                  marginTop: 40,
                  marginLeft: 20,
                }}
              />
            </Pressable>
            <View style={{ alignItems: "center" }}>
              <Image
                source={person}
                style={{ width: 100, height: 100, borderRadius: 100 }}
              />
              <AntDesign
                name="pluscircle"
                size={24}
                color="white"
                style={{ marginTop: -15 }}
              />
              <Text
                style={{
                  margin: 5,
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                {resData.name}
              </Text>
              <Text style={{ margin: 0, color: "white", marginBottom: 10 }}>
                {resData.country}
              </Text>
              <Pressable onPress={() => setModalVisible(!modalVisible)}>
                <Feather name="edit" size={35} color="white" />
              </Pressable>
              {/* <TouchableOpacity onPress={()=>{ navigation.navigate("PersonalModel")}}> */}
              <Text style={{ color: "white" }}>EDIT</Text>
              {/* </TouchableOpacity> */}
              <Pressable
                onPress={() => {
                  resData._id
                    ? axios
                        .delete(`${myURL}/Clinic/clinnicProfile/${resData._id}`)
                        .then((res) => {
                          console.log(res.data);
                          console.log("Profile Save!! ");
                          Alert.alert("Delete Record");
                          navigation.navigate("Homeclinic");
                        })
                        .catch((err) => {
                          console.log(err);
                        })
                    : Alert.alert("Sorry, have no  Record");
                }}
              >
                <Text
                  style={{
                    padding: 10,
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: 10,
                  }}
                >
                  Delete
                </Text>
              </Pressable>
            </View>
          </View>

          <View style={{ flex: 6 / 10, margin: 40 }}>
            {/* first field */}
            {/* <Text style={{color:"gray"}}>Email:</Text>
                              <Text style={{fontSize:16,fontWeight:'bold'}}>Sp20-BCS-149@gmail.com</Text>
                              <View style={{borderBottomWidth:1,marginTop:10,marginBottom:10,borderBottomColor:'#ACA5A5'}}></View> */}
            {/* Second field */}
            <Text style={{ color: "gray" }}>Phone:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {resData.phoneno}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 10,
                marginBottom: 10,
                borderBottomColor: "#ACA5A5",
              }}
            ></View>
            {/* Second field */}
            <Text style={{ color: "gray" }}>CNIC:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {resData.cnic}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 10,
                marginBottom: 10,
                borderBottomColor: "#ACA5A5",
              }}
            ></View>
            {/* Second field */}

            {/* Second field */}
            <Text style={{ color: "gray" }}>Location:</Text>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              {resData.location}
            </Text>
            <View
              style={{
                borderBottomWidth: 1,
                marginTop: 10,
                marginBottom: 10,
                borderBottomColor: "#ACA5A5",
              }}
            ></View>

            {/*  */}
            {/* <Text style={{color:"gray"}}>Email:</Text>
                              <Text style={{fontSize:16,fontWeight:'bold'}}>Sp20-BCS-149@gmail.com</Text>
                              <View style={{borderBottomWidth:1,marginTop:10,marginBottom:10,borderBottomColor:'#ACA5A5'}}></View>
          */}

            {/*  update Profile Model */}
            <PersonalModelProfile
              modalVisible={modalVisible}
              setModalVisible={setModalVisible}
              User_Token={Token}
              profiledata={resData}
            />

            {/* end  */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ClinicProfile;

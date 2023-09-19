import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Homeclinic from "./Homeclinic";
import Extra1 from "./extacomponent";
const Tab = createMaterialBottomTabNavigator();

function ClinicBottomNavigation() {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Homeclinic"
        activeColor="orange"
        inactiveColor=""
        barStyle={{ backgroundColor: "white" }}
      >
        <Tab.Screen
          name="Homeclinic"
          component={Homeclinic}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color="white" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Setting"
          component={Extra1}
          options={{
            tabBarLabel: "Setting",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color="orange" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Clinic"
          component={Extra1}
          options={{
            tabBarLabel: "Clinic",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color="orange" size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Card"
          component={Extra1}
          options={{
            tabBarLabel: "Card",
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color="orange" size={26} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default ClinicBottomNavigation;

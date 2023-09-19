import { React } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//
import Home from "../Screen/Home";
import SignUp from "../Screen/Signup";
import Login from "../Screen/Login";

//
import SplashScreen from "../Screen/splashscreen";
import Homeuser from "../Screen/user/Homeuser";
import Homeadmin from "../Screen/admin/Homeadmin";
// import Homedelivery from '../Screen/delivery/Homedelivery';
//
import DeliveryBottomNavigation from "../Screen/delivery/bottomnavition";
import AdminBottomNavigation from "../Screen/admin/bottomnavition";
import ClinicBottomNavigation from "../Screen/Clinic/bottomnavition";
import UserBottomNavigation from "../Screen/user/bottomnavition";

//
import AdminDrawer from "../Screen/admin/Drawernavigation";
import UserDrawer from "../Screen/user/Drawernavigation";
import DeliveryDrawer from "../Screen/delivery/Drawernavigation";
import ClinicDrawer from "../Screen/Clinic/Drawernavigation";

// all inside compoents
import UserProfile from "../Screen/user/Profile";
import PersonalModel from "./user/PersonalModel";

//All User Screen Import
import Family from "../Screen/user/Family";
import ChildRecord from "../Screen/user/ChildRecord";
import Schedule from "../Screen/user/Schedule";
import News from "../Screen/user/News";
import PdfPrintOut from "../Screen/user/PdfPrintOut";
import ReminderVaccine from "../Screen/user/ReminderVaccine";
import ChildTrack from "../Screen/user/ChildTrack";
import BookVaccine from "../Screen/user/BookVaccine";
import VerificationForm from "../Screen/Clinic/VerificationForm";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator  screenOptions={{headerShown:false}} initialRouteName={'Splash'}> */}
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Login"}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen
          name="DeliveryBottomNavigation"
          component={DeliveryBottomNavigation}
        />
        <Stack.Screen
          name="AdminBottomNavigation"
          component={AdminBottomNavigation}
        />
        <Stack.Screen
          name="ClinicBottomNavigation"
          component={ClinicBottomNavigation}
        />
        <Stack.Screen
          name="UserBottomNavigation"
          component={UserBottomNavigation}
        />
        <Stack.Screen name="AdminDrawer" component={AdminDrawer} />
        <Stack.Screen name="ClinicDrawer" component={ClinicDrawer} />
        <Stack.Screen name="UserDrawer" component={UserDrawer} />
        <Stack.Screen name="DeliveryDrawer" component={DeliveryDrawer} />
        {/* all user components */}

        <Stack.Screen name="Homeuser" component={Homeuser} />
        <Stack.Screen name="UserProfile" component={UserProfile} />
        <Stack.Screen name="PersonalModel" component={PersonalModel} />
        <Stack.Screen name="Family" component={Family} />
        <Stack.Screen name="ChildRecord" component={ChildRecord} />
        <Stack.Screen name="ChildTrack" component={ChildTrack} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="News" component={News} />
        <Stack.Screen name="PdfPrintOut" component={PdfPrintOut} />
        <Stack.Screen name="ReminderVaccine" component={ReminderVaccine} />
        <Stack.Screen name="BookVaccine" component={BookVaccine} />

        {/* all admin componets */}
        {/* all clinic component */}
        <Stack.Screen name="VerificationForm" component={VerificationForm} />

        {/* all rider component */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

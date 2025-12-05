import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
// import OtpScreen from "../screens/OtpScreen";
// import SelectApartmentScreen from "../screens/SelectApartmentScreen";
// import BlockFlatScreen from "../screens/BlockFlatScreen";
// import HomeScreen from "../screens/HomeScreen";

import { RootStackParamList } from "./types";
import OtpVerificationScreen from "../screens/OtpVerificationScreen";
import SplashScreen from "../screens/SplashScreen";

const Stack = createStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    // <Stack.Navigator screenOptions={{ headerShown: false }}>
    //   <Stack.Screen name="Welcome" component={WelcomeScreen} />
    //   <Stack.Screen name="Login" component={LoginScreen} />
    //   <Stack.Screen name="OTP" component={OtpScreen} />
    //   <Stack.Screen name="SelectApt" component={SelectApartmentScreen} />
    //   <Stack.Screen name="BlockFlat" component={BlockFlatScreen} />
    //   <Stack.Screen name="Home" component={HomeScreen} />
    //   <Stack.Screen name="OTPVerification" component={OtpVerificationScreen} />
    // </Stack.Navigator>

<Stack.Navigator screenOptions={{ headerShown: false }}>
<Stack.Screen name="Splash" component={SplashScreen} />
<Stack.Screen name="Welcome" component={WelcomeScreen} />
{/* <Stack.Screen name="Login" component={LoginScreen} /> */}
<Stack.Screen name="OTPVerification" component={OtpVerificationScreen} />
</Stack.Navigator>

  );
}

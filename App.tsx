import React, { useState } from "react";
import { PortalProvider } from "@gorhom/portal";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context"; // Import SafeArea
import HomeScreen from "./screens/HomeScreen";
import CampaignScreen from "./screens/CampaignScreen";
import BottomBar from "./components/BottomBar"; // Assuming you saved the BottomBar component here
import MessageScreen from "./screens/MessageScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CampaignDetailsScreen from "./screens/CampaignDetailsScreen";
import CampaignTaskScreen from "./screens/CampaignTaskScreen";
import MessageDetailsScreen from "./screens/MessageDetailsScreen";
import NotificationScreen from "./screens/NotificationScreen";
import OnboardingScreen from "./screens/OnboardingScreen";
import SignupScreen from "./screens/Auth/SignupScreen";
import LoginScreen from "./screens/Auth/LoginScreen";
import PhoneNumber_1 from "./screens/Auth/PhoneNumber_1";

import "./globals.css"; // Import global CSS styles
import PhoneNumberVerifyCode from "./screens/Auth/PhoneNumberVerifyCode";
import PhoneNumberVerified from "./screens/Auth/PhoneNumberVerified";
import CreatePasscode from "./screens/Auth/CreatePasscode";

const Stack = createStackNavigator();

function App() {
  const [screenName, setScreenName] = useState("Onboarding"); // Track the active screen name

  const disableBottomBarScreens = [
    "CampaignDetails",
    "MessageDetails",
    "Notification",
    "Onboarding",

    "Login",
    "Signup",
    "PhoneNumber_1",
  ];

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PortalProvider>
          <NavigationContainer
            onStateChange={(state) => {
              // Extract the current route name when navigation state changes
              const currentRoute = state?.routes[state.index]?.name;
              setScreenName(currentRoute ?? "Onboarding");
            }}
          >
            <Stack.Navigator initialRouteName="Onboarding">
              <Stack.Screen
                name="Onboarding"
                component={OnboardingScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Campaign"
                component={CampaignScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Message"
                component={MessageScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CampaignDetails"
                component={CampaignDetailsScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ActiveCampaign"
                component={CampaignTaskScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="MessageDetails"
                component={MessageDetailsScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Notification"
                component={NotificationScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={SignupScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhoneNumber_1"
                component={PhoneNumber_1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhoneNumberVerifyCode"
                component={PhoneNumberVerifyCode}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PhoneNumberVerified"
                component={PhoneNumberVerified}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreatePasscode"
                component={CreatePasscode}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
            {/* 
            {disableBottomBarScreens.includes(screenName) ? null : (
              <BottomBar screenName={screenName} />
            )} */}
          </NavigationContainer>
        </PortalProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomBar from "@/components/BottomBar";
import { AppProviders } from "@/components/AppProviders";
import { disableBottomBarScreens, screens } from "./config/screens";

const Stack = createStackNavigator();

function App() {
  const [screenName, setScreenName] = useState("Onboarding");

  const handleStateChange = (state: any) => {
    const currentRoute = state?.routes[state.index]?.name;
    setScreenName(currentRoute ?? "Onboarding");
  };

  return (
    <AppProviders>
      <NavigationContainer onStateChange={handleStateChange}>
        <Stack.Navigator
          initialRouteName="Onboarding"
          screenOptions={{ headerShown: false }}
        >
          {screens.map(({ name, component }) => (
            <Stack.Screen key={name} name={name} component={component} />
          ))}
        </Stack.Navigator>

        {/* Conditional BottomBar */}
        {/* {!disableBottomBarScreens.includes(screenName) && (
          <BottomBar screenName={screenName} />
        )} */}
      </NavigationContainer>
    </AppProviders>
  );
}

export default App;

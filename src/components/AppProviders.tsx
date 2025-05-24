import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalProvider } from "@gorhom/portal";

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <GestureHandlerRootView style={{ flex: 1 }}>
    <SafeAreaProvider>
      <PortalProvider>{children}</PortalProvider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

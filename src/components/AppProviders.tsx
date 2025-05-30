import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { PortalProvider } from "@gorhom/portal";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export const AppProviders = ({ children }: { children: React.ReactNode }) => (
  <GestureHandlerRootView>
    <SafeAreaProvider>
      <PortalProvider>
        <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
      </PortalProvider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

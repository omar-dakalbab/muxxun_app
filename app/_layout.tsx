import React from "react";
import { Stack } from "expo-router";
import { AppProviders } from "@/components/AppProviders";

export default function RootLayout() {
  return (
    <AppProviders>
      <Stack screenOptions={{ headerShown: false }} />
    </AppProviders>
  );
}

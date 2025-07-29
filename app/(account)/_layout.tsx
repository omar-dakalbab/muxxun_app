import { Stack } from "expo-router";
import React from "react";
import { AppProviders } from "@/components/AppProviders";

export default function AppLayout() {
  return (
    <AppProviders>
      <Stack screenOptions={{ headerShown: false }} />
    </AppProviders>
  );
}

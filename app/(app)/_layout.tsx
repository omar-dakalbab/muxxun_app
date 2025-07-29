import { Stack } from "expo-router";
import { View } from "react-native";
import React from "react";
import BottomBar from "@/components/BottomBar/BottomBar";
import BottomBarSkeleton from "@/components/BottomBar/BottomBarSkeleton";
import { AppProviders } from "@/components/AppProviders";

export default function AppLayout() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timeout);
  }, []);
  return (
    <AppProviders>
      <Stack screenOptions={{ headerShown: false }} />

      {loading ? <BottomBarSkeleton /> : <BottomBar />}
    </AppProviders>
  );
}

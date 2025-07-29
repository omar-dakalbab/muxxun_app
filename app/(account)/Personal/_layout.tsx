import React from "react";
import { View, Text } from "react-native";
import { Stack } from "expo-router";

export default function PersonelLayout() {
  return (
    <View style={{ flex: 1 }}>
      <Stack screenOptions={{ headerShown: false }} />
    </View>
  );
}

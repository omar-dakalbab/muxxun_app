// components/Header.tsx
import { MessageCircle, SearchIcon } from "lucide-react-native";
import React from "react";
import { View, Text, Pressable } from "react-native";
import RenderIcon from "../RenderIcon";
import { router } from "expo-router";

type HeaderProps = {
  title: string;
  initials: string;
};

export default function Header({ title, initials }: HeaderProps) {
  return (
    <View className="flex-row items-center px-4 pb-4 justify-between">
      <View className="flex-row items-center">
        <View className="w-9 h-9 bg-[#00022D] rounded-full items-center justify-center mr-3">
          <Pressable onPress={() => {
            router.push({
              pathname: "/(profile)/",
            });
          }}>
            <Text className="text-white font-bold">{initials}</Text>
          </Pressable>
        </View>
        <Text className="text-lg font-semibold">{title}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <RenderIcon icon="search" />
        <Pressable onPress={() => {
          router.push("/(messages)")
        }}>
        <RenderIcon  icon="notification" />
        </Pressable>
      </View>
    </View>
  );
}

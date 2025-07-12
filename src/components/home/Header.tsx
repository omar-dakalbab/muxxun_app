// components/Header.tsx
import { MessageCircle, SearchIcon } from "lucide-react-native";
import React from "react";
import { View, Text } from "react-native";
import RenderIcon from "../RenderIcon";

type HeaderProps = {
  title: string;
  initials: string;
};

export default function Header({ title, initials }: HeaderProps) {
  return (
    <View className="flex-row items-center px-4 pb-4 justify-between">
      <View className="flex-row items-center">
        <View className="w-9 h-9 bg-[#00022D] rounded-full items-center justify-center mr-3">
          <Text className="text-white font-bold">{initials}</Text>
        </View>
        <Text className="text-lg font-semibold">{title}</Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
        <RenderIcon icon="search" />
        <RenderIcon icon="notification" />
      </View>
    </View>
  );
}

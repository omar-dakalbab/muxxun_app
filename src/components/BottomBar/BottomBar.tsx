import React from "react";
import { View, Text, Pressable } from "react-native";
import {
  Home,
  CreditCard,
  User,
  ArrowLeftRight,
  HandCoins,
} from "lucide-react-native";

export default function BottomBar() {
  return (
    <View className="flex-row justify-around items-center h-20 bg-white pb-8">
      <BottomTabItem icon={Home} label="Home" active />
      <BottomTabItem icon={CreditCard} label="Cards" />
      <BottomTabItem icon={ArrowLeftRight} label="Exchange" />
      <BottomTabItem icon={HandCoins} label="Payments" />
      <BottomTabItem icon={User} label="Recipients" />
    </View>
  );
}

function BottomTabItem({
  icon: Icon,
  label,
  active = false,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
}) {
  return (
    <Pressable className="items-center justify-center w-[19%]">
      <Icon
        size={20}
        color={active ? "#091249" : "#606060"} // primary or gray700
      />
      <Text
        className={`mt-2 text-captionS ${
          active ? "text-primary" : "text-gray700"
        }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

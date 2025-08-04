import React from "react";
import { View, Text, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Home,
  CreditCard,
  User,
  ArrowLeftRight,
  HandCoins,
} from "lucide-react-native";
import { useRouter, useSegments } from "expo-router";

const TABS: {
  icon: React.ElementType;
  label: string;
  route: string;
}[] = [
    { icon: Home, label: "Home", route: "(app)" },
    { icon: CreditCard, label: "Cards", route: "(cards)" },
    { icon: ArrowLeftRight, label: "Exchange", route: "(exchange)" },
    { icon: HandCoins, label: "Payments", route: "(transactions)" },
    { icon: User, label: "Recipients", route: "recipients" },
  ];

export default function BottomBar() {
  const router = useRouter();
  const segments = useSegments();

  // assuming your first segment after “/” corresponds to your tab key
  const currentTab = segments[0] ?? "home";

  return (
    <SafeAreaView
      edges={["bottom"]}
      className="absolute bottom-0 w-full bg-white border-t border-gray-200"
    >
      <View className="flex-row justify-around items-center py-2">
        {TABS.map(({ icon: Icon, label, route }) => (
          <BottomTabItem
            key={route}
            Icon={Icon}
            label={label}
            active={currentTab === route}
            onPress={() => router.push({ pathname: `/${route}` })}
          />
        ))}
      </View>
    </SafeAreaView>
  );
}

function BottomTabItem({
  Icon,
  label,
  active = false,
  onPress,
}: {
  Icon: React.ElementType;
  label: string;
  active?: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      className="items-center justify-center w-1/5"
      onPress={onPress}
      style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
    >
      <Icon
        size={24}
        color={active ? "#091249" : "#606060"}
      />
      <Text
        className={`mt-1 text-captionS ${active ? "text-primary" : "text-gray700"
          }`}
      >
        {label}
      </Text>
    </Pressable>
  );
}

import { View, Text } from "react-native";
import React from "react";

export default function ScreenHeader({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <View>
      <Text className="text-black font-inter-bold mb-3 text-h2 font-bold w-3/4">
        {title}
      </Text>
      <Text className="text-[13px] text-gray700 w-full font-inter">
        {description}
      </Text>
    </View>
  );
}

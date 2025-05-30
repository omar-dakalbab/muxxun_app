import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const AccountCard = ({
  icon,
  title,
  description,
  onClick,
  isCardActive = false,
}: {
  icon: any;
  title: string;
  description: string;
  onClick: () => void;
  isCardActive?: boolean;
}) => (
  <View className="flex-row items-start bg-gray100 mt-2 p-6 rounded-2xl">
    <Image className="h-5 w-5 mt-1 mr-3" source={icon} />

    <View className="flex-1 mr-3">
      <Text className="text-h5 font-inter-bold font-semibold mb-2">
        {title}
      </Text>
      <Text className="text-footnote text-gray700 leading-[20px]">
        {description}
      </Text>
    </View>

    <Pressable
      onPress={onClick}
      className="h-10 w-10 bg-white rounded-lg items-center justify-center shadow-sm"
    >
      <Image source={require("@/assets/arrow.png")} />
    </Pressable>
  </View>
);

export default AccountCard;

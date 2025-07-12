import React from "react";
import { View, Text, Pressable, Image, ImageBackground } from "react-native";

export default function MuxxusCard() {
  return (
    <ImageBackground
      source={require("@/assets/svg/home-gradient.png")}
      resizeMode="cover"
      imageStyle={{ borderRadius: 16 }}
      className="flex-1 rounded-2xl p-6 justify-between items-center relative overflow-hidden bg-gray100"
    >
      {/* Credit image coming from right */}
      <Image
        source={require("@/assets/credit.png")}
        resizeMode="cover"
        className="absolute top-0 right-0 w-[90%] h-[63%] z-0"
      />

      {/* Close button */}
      <Pressable className="absolute top-4 right-4 z-10">
        <Text className="text-white text-2xl">×</Text>
      </Pressable>
      <Text></Text>
      {/* Description */}
      <Text className="text-gray-700 text-[15px] mt-2 mb-4 z-10 w-[80%] text-center">
        All your transactions, cards, and deposits will appear here once you’ve
        completed the account setup.
      </Text>
    </ImageBackground>
  );
}

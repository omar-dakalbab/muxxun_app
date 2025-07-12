import React from "react";
import { Image, Text, View } from "react-native";
import HeaderNavigation from "@/components/HeaderNavigations";
import { Button } from "@/components/ui/Button";
import { router, useLocalSearchParams } from "expo-router";

export default function SuccessPage() {
  const { title, description } = useLocalSearchParams();

  return (
    <View className="flex-1 bg-white relative">
      <HeaderNavigation title="" />
      <View className="mt-12 w-[70%] self-center">
        <Image
          source={require("@/assets/Union (1).png")}
          className="self-center mt-10 mb-5"
        />
        <Text className="text-center text-3xl font-bold mb-4">
          {title}
        </Text>
        <Text className="text-center text-body text-gray500 font-bold mb-4">
          {description}
        </Text>
      </View>
      <View className="absolute bottom-16 px-5 w-full z-20">
        <Button
          variant="secondary"
          label="Continue"
          onPress={() => {
            router.push({
              pathname: "/(app)/",
            });
          }}
        />
      </View>
      <Image
        source={require("@/assets/Images (1).png")}
        className="absolute bottom-0 w-full z-10"
        resizeMode="cover"
      />
    </View>
  );
}

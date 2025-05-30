import React from "react";
import { Image, Text, View } from "react-native";

import HeaderNavigation from "@/components/HeaderNavigations";
import { Button } from "@/components/ui/Button";
import { router, useLocalSearchParams } from "expo-router";

export default function PhoneNumberVerified() {

  const phoneNumber = useLocalSearchParams().phoneNumber
  return (
    <View className="flex-1 bg-white relative">
      <HeaderNavigation title="" />
      <View className="mt-12 w-[70%] self-center">
        <Image
          source={require("@/assets/master.png")}
          className="self-center mt-10 mb-5"
        />
        <Text className="text-center text-3xl font-bold mb-4">
          We've verified your phone number
        </Text>
      </View>
      <View className="absolute bottom-16 px-5 w-full z-20">
        <Button
          label="Continue"
          onPress={() => {
            router.push({
              pathname: "/(auth)/signup/create_passcode",
              params: { phoneNumber },
            });
          }}
        />
      </View>
      <Image
        source={require("@/assets/verified.png")}
        className="absolute bottom-0 w-full z-10"
        resizeMode="stretch"
      />
    </View>
  );
}

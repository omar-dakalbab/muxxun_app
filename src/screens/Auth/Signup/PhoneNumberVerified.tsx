import React, { useRef, useState } from "react";
import { Image, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import BottomSheetController from "@/components/BottomSheet";
import PageLayout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import { Button } from "@/components/ui/Button";
import SuccessStatus from "@/components/SuccessStatus";

export default function PhoneNumberVerified() {
  const bottomSheetRef = useRef(null);
  const [sheetContent, setSheetContent] = useState(null);
  const route = useRoute();
  const navigation = useNavigation();
  const [showSuccess, setShowSuccess] = useState(false);

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
        {/* <Text className="text-center text-base text-gray-500 mb-2">
          We just sent you a verification code
        </Text>
        <Text className="text-center text-sm font-semibold text-primary mb-4">
          (+225) 07 68 06 94 93
        </Text> */}
      </View>
      <View className="absolute bottom-16 px-5 w-full z-20">
        <Button
          label="Continue"
          onPress={() => {
            console.log("Verified and continue");
            navigation.navigate("CreatePasscode", {
              phoneNumber: route.params?.phoneNumber,
            });
          }}
        />
      </View>
      <Image
        source={require("@/assets/verified.png")}
        className="absolute bottom-0 w-full z-10"
        resizeMode="stretch"
      />

      {/* Verified image at the bottom of the screen */}
    </View>
  );
}

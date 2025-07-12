import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderNavigation from "@/components/HeaderNavigations";
import React from "react";
import { router } from "expo-router";

export default function Home() {
  const handleSkip = () => {
    Alert.alert(
      "Are you sure you want to skip the verification process?",
      "You won’t be able to send, receive and exchange money until we have verified your identity.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "SKIP", onPress: () => router.back(), style: "destructive" },
      ]
    );
  };

  const handleContinue = () => router.push("/(account)/account_setup");
  const HEIGHT = Dimensions.get("window").height;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      <HeaderNavigation title="" />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 24 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center mt-4">
          <ImageBackground
            source={require("@/assets/success-bg.png")}
            style={{
              width: "100%",
              height: HEIGHT * 0.4,
              justifyContent: "center",
              alignItems: "center",
            }}
            resizeMode="cover"
          ></ImageBackground>
        </View>
        <View className="px-6 mt-auto">
          <View className="items-center mt-6">
            <Text className="text-3xl font-bold text-pb text-center mb-4">
              Tell us about yourself
            </Text>
            <Text className="text-base text-gy text-center leading-relaxed">
              Completing the verification shouldn’t take longer than 10 minutes
              and you do it all from your phone.
            </Text>
          </View>
          <View className="mt-10 space-y-4">
            <TouchableOpacity
              onPress={handleContinue}
              className="w-full bg-[#091249] py-4 rounded-xl"
            >
              <Text className="text-white text-center text-base font-medium">
                Continue
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleSkip} className="w-full py-4">
              <Text className="text-black text-center text-base font-medium">
                Not right now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

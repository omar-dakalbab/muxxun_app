import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Dimensions,
} from "react-native";
import React from "react";
import { X } from "lucide-react-native";
import { router } from "expo-router";
import * as Notifications from "expo-notifications";

export default function NotificationAccept() {
  const label = "Notifications";
  const description =
    "We can send you instant payment notifications when you spend with your card so you see your payments in real time and your balance is always up to date";
  const image = require("@/assets/notification-accept.png");
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;

  const requestNotifications = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    if (status === "granted") {
      // Alert.alert("Success", "Notifications have been enabled.");
      router.push("/(app)");
    } else {
      Alert.alert(
        "Permission Denied",
        "Notifications permission was not granted."
      );
    }
  };

  return (
    <View className="flex-1 bg-white px-6 pt-24 pb-10 relative">
      {/* Close Button */}
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        className="absolute top-[60px] left-8 z-20"
      >
        <X size={24} color="#000" />
      </TouchableOpacity>

      {/* Centered Content */}
      <View className="flex-1 items-center justify-center z-10">
        {image && (
          <View
            style={{
              width: width,
              height: height * 0.4,
              justifyContent: "center",
              alignItems: "center",

              overflow: "hidden", // ensures rounded corners apply to the background too
            }}
          >
            <ImageBackground
              source={image} // your background image here
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
              resizeMode="cover"
            ></ImageBackground>
          </View>
        )}

        <Text className="text-2xl font-bold text-center text-black mt-6">
          {label}
        </Text>

        {description && (
          <Text className="text-base text-center text-gray500 mt-4 px-4 mb-4">
            {description}
          </Text>
        )}
      </View>

      {/* Footer */}
      <View className="w-full z-10">
        <View>
          <TouchableOpacity
            onPress={requestNotifications}
            className="w-full bg-black py-4 rounded-full z-10"
          >
            <Text className="text-white text-center text-base font-medium">
              Allow notifications
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              router.push({
                pathname: "/(auth)/login",
              });
            }}
            className="w-full py-4 rounded-full z-10 mt-4"
          >
            <Text className="text-black text-center text-base font-medium">
              Not right now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

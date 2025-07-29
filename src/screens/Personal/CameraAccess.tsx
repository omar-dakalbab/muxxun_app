import React, { useState, useEffect } from "react";
import { Camera } from "expo-camera";
import {
  View,
  Text,
  Image,
  Pressable,
  Alert,
  SafeAreaView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import camera from "@/assets/camera.png";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import HeaderNavigation from "@/components/HeaderNavigations";

export default function CameraAccess({ navigation }) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);

  const handleSkip = () => {
    Alert.alert(
      "Are you sure you want to skip the verification process?",
      "You won’t be able to send, receive and exchange money until we have verified your identity.",
      [
        { text: "Cancel", style: "cancel" },
        { text: "SKIP", onPress: () => navigation.navigate("Home2") },
      ]
    );
  };

  const handleAccess = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    if (status === "granted") {
      setHasPermission(true);
      navigation.navigate("CameraScreen");
    } else {
      setHasPermission(false);
      Alert.alert(
        "“MUXXUS” would like to access the camera",
        "MUXXUS requires access to the camera to take selfies and photos of your ID document."
      );
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      <HeaderNavigation title="" />

      <Layout>
        <View className="flex-1 justify-between">
          <View className="items-center">
            <Image
              source={camera}
              className="w-full max-w-[320px] h-80 resize-contain"
            />
            <Text className="text-2xl text-center font-bold mt-6 mb-4 w-4/5">
              Please allow camera access to continue
            </Text>
            <Text className="text-base text-center text-gray700 w-4/5">
              Submit a selfie and a photo of the document for identity
              verification.
            </Text>
          </View>

          <View>
            <Pressable
              onPress={handleAccess}
              className="bg-black w-full h-16 rounded-xl items-center justify-center mb-3"
            >
              <Text className="text-white text-lg font-bold">
                Allow camera access
              </Text>
            </Pressable>

            <Pressable
              onPress={handleSkip}
              className="w-full h-16 rounded-full items-center justify-center"
            >
              <Text className="text-black text-lg font-bold">
                Not right now
              </Text>
            </Pressable>
          </View>
        </View>
      </Layout>
    </SafeAreaView>
  );
}

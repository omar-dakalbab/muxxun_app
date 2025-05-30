import React from "react";
import { Text, View, Pressable } from "react-native";
import { Banknote, Plus } from "lucide-react-native";
import RenderIcon from "../RenderIcon";
import { router } from "expo-router";

export default function KYCCard() {
  return (
    <View className="flex-1 bg-white border border-zinc-200 rounded-2xl p-6 justify-center overflow-hidden">
      <View className="items-center">
        <RenderIcon icon="bank" />
        <Text className="text-h4 font-semibold mt-6">Complete setup</Text>
        <Text className="text-footnote text-gray500 mt-1">
          Please before using services, finish KYC
        </Text>

        <Pressable
          className="mt-8 px-6 py-3 border border-zinc-300 rounded-full flex-row items-center justify-center self-center"
          onPress={() => {
            router.push("/(account)");
          }}
        >
          <Plus size={16} color="black" />
          <Text className="ml-2 text-black">Continue</Text>
        </Pressable>
      </View>
    </View>
  );
}

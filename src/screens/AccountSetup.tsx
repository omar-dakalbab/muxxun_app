import { Text, View, Pressable, Image, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AccountCard from "@/components/ui/AccountCard";

export default function Home2({ navigation }: any) {
  return (
    <SafeAreaView className="bg-white flex-1">
      <StatusBar hidden={false} />

      <View className="mt-5 mx-5">
        <Text className="text-h2-bold font-bold text-black mb-3">
          What kind of account would you like to open?
        </Text>
        <Text className="text-gray700 text-body">
          You will be able to add new accounts later on.
        </Text>
      </View>

      <AccountCard
        icon={require("@/assets/master.png")}
        title="Personal Account"
        description="Send, spend, receive, and exchange your money freely."
        onClick={() => navigation.navigate("VerifyIdentify")}
      />

      <AccountCard
        icon={require("@/assets/bag.png")}
        title="Business Account"
        description="Collect invoices, do freelance or business work internationally."
        onClick={() => navigation.navigate("Business1")}
      />
    </SafeAreaView>
  );
}

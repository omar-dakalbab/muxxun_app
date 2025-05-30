import { View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import AccountCard from "@/components/ui/AccountCard";
import Layout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import ScreenHeader from "@/components/ui/ScreenHeader";
import { router } from "expo-router";

export default function AccountSetup() {
  return (
    <View className="bg-white flex-1">
      <HeaderNavigation />
      <StatusBar hidden={false} />

      <Layout>
        <ScreenHeader
          title="What kind of account would you like to open?"
          description="You will be able to add new accounts later on."
        />

        <View className="mt-4">
          <AccountCard
            icon={require("@/assets/master.png")}
            title="Personal Account"
            description="Send, spend, receive, and exchange your money freely."
            onClick={() => {
              router.push({
                pathname: "/(account)/Personal/VerifyIdentify",
              });
            }}
          />

          <AccountCard
            icon={require("@/assets/bag.png")}
            title="Business Account"
            description="Collect invoices, do freelance or business work internationally."
            onClick={() => {
              router.push({
                pathname: "/(account)/Business/BusinessVerifyIdentify",
              });
            }}
          />
        </View>
      </Layout>
    </View>
  );
}

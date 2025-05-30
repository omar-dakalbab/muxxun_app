import React from "react";
import { View, Text } from "react-native";
import HeaderNavigation from "@/components/HeaderNavigations";
import Layout from "@/components/layout";
import ToggleInput from "@/components/ToggleInput";
import { Button } from "@/components/ui/Button";
import { router } from "expo-router";

export default function IdentityVerification({ navigation }) {
  return (
    <View className="flex-1 bg-white">
      <HeaderNavigation title="" />

      <Layout
        footer={
          <Button
            label="Continue"
            size="lg"
            onPress={() => {
              // navigation.navigate("SumsubApplicant")
              router.push({
                pathname: "/(account)/Business/SumsubApplicant",
              });
            }}
          />
        }
      >
        <View className="flex-1 justify-between">
          <View>
            <View className="mb-3">
              <Text className="text-h2 mb-3 font-bold text-black">
                Identity verification
              </Text>
              <Text className="text-[15px] text-gray700">
                Let's get you verified {"\n"}
                Confirm your country of residence to learn {"\n"}
                how your personal data will be processed
              </Text>
            </View>

            <Text className="text-base mb-2">
              Select your country of residence:
            </Text>

            <ToggleInput title="All country except USA" description="" />
            <ToggleInput title="United States of America" description="" />

            <View className="mt-12">
              <Text className="text-[15px] text-gray700">
                By clicking the "Continue" button I agree that I have read the
                <Text className="text-orange underline"> Privacy Notice </Text>
                and give my consent to the processing of my personal data,
                including biometrics, as described in this
                <Text className="text-orange">
                  {" "}
                  Notification to Processing of Personal Data.{" "}
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </Layout>
    </View>
  );
}

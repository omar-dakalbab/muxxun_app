import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import ToggleInput from "@/components/ToggleInput";
import HeaderNavigation from "@/components/HeaderNavigations";
import SelectModal from "@/components/ui/SelectModal";
import { router } from "expo-router";

export default function IdentityDocument({ navigation }: { navigation: any }) {
  const [issueCountry, setIssueCountry] = useState("");

  const documentTypes = [
    "Passport",
    "Driver’s license",
    "ID card",
    "Residence permit",
  ];

  const countryOptions = [
    { label: "United States of America", value: "usa" },
    { label: "United Kingdom", value: "uk" },
    { label: "Canada", value: "canada" },
    { label: "Australia", value: "australia" },
    { label: "Germany", value: "germany" },
    { label: "France", value: "france" },
    { label: "India", value: "india" },
    { label: "Japan", value: "japan" },
  ];

  return (
    <View className="flex-1 bg-white">
      <HeaderNavigation />
      <StatusBar style="auto" />
      <Layout
        footer={
          <Button
            label="Continue"
            size="lg"
            onPress={() => {
              // navigation.navigate("CameraAccess")
              router.push({
                pathname: "/(account)/Business/CameraAccess",
                // params: { type: "identity_document" },
              });
            }}
          />
        }
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <View className="mb-5">
            <Text className="text-h2 font-bold text-black mb-3">
              Identity document
            </Text>
            <Text className="text-[15px] text-gray700">
              xxxxxxxxxx xxxxxx xxxxxxxx xxxxxxxx xxxxxxx xxxxxxxxx xx
              xxxxxxxxxx x xxxxxxx
            </Text>
          </View>

          <SelectModal
            subTitle="Select issuing country"
            title="Select issuing country"
            value={issueCountry}
            onChange={(e) => {
              setIssueCountry(e);
            }}
            options={countryOptions}
          />

          <View className="mb-4">
            <Text className="text-lg text-black">
              Choose your document type
            </Text>
          </View>

          {documentTypes.map((type) => (
            <ToggleInput key={type} title={type} />
          ))}

          <View className="mt-6 space-y-2">
            {[
              "Bright and clear",
              "All corners of the document should be visible",
            ].map((item, index) => (
              <View key={index} className="flex-row items-start">
                <Text className="text-[15px] text-gray700 mr-2">•</Text>
                <Text className="text-[15px] text-gray700 flex-1">{item}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </Layout>
    </View>
  );
}

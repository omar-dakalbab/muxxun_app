import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { StatusBar } from "expo-status-bar";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import ToggleInput from "@/components/ToggleInput";
import HeaderNavigation from "@/components/HeaderNavigations";
import SelectModal from "@/components/ui/SelectModal";
import { router } from "expo-router";
import { useAccountDataStore } from "@/store/useAccountDataStore";

export default function IdentityDocument() {
  const { identityVerification, setIdentityVerification } =
    useAccountDataStore();

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

  const handleDocumentTypeSelect = (type: string) => {
    setIdentityVerification({ documentType: type });
  };

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
              router.push({
                pathname: "/(account)/Business/CameraAccess",
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
              Please select the country that issued your document and the type
              of document.
            </Text>
          </View>

          <SelectModal
            subTitle="Select issuing country"
            title="Select issuing country"
            value={identityVerification?.issueCountry || ""}
            onChange={(value) =>
              setIdentityVerification({ issueCountry: value })
            }
            options={countryOptions}
          />

          <View className="mb-4 mt-6">
            <Text className="text-lg text-black">
              Choose your document type
            </Text>
          </View>

          {documentTypes.map((type) => (
            <ToggleInput
              key={type}
              title={type}
              value={identityVerification?.documentType === type}
              onToggle={() => handleDocumentTypeSelect(type)}
            />
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

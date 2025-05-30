import React from "react";
import { View, Text, ScrollView, Pressable } from "react-native";
import { Copy, File } from "lucide-react-native";

import Layout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import { router } from "expo-router";
import { Button } from "@/components/ui/Button";

const applicantData = [
  { label: "Full Name", value: "John Doe" },
  { label: "Date of Birth", value: "January 1, 1990" },
  { label: "Nationality", value: "American" },
  { label: "Gender", value: "Male" },
  { label: "Full Name", value: "John Doe" },
  { label: "Date of Birth", value: "January 1, 1990" },
  { label: "Nationality", value: "American" },
  { label: "Gender", value: "Male" },
];

const identityDocuments = [{ label: "Driving License" }];

export default function Reviews() {
  const renderCard = (data: typeof applicantData) => (
    <View className="bg-gray100 p-4 rounded-2xl my-4">
      {data.map((item, index) => (
        <View
          key={index}
          className="flex-row items-center justify-between"
          style={{ marginBottom: index === data.length - 1 ? 0 : 16 }}
        >
          <View>
            <Text className="text-gray500 text-footnote">{item.label}</Text>
            <Text className="text-black font-semibold text-h5">
              {item.value}
            </Text>
          </View>
          <Pressable className="p-3 border border-gray400 bg-white rounded-lg items-center justify-center shadow-sm">
            <Copy className="text-gray-500 rotate-90" size={18} />
          </Pressable>
        </View>
      ))}
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <HeaderNavigation title="" />
      <Layout>
        {/* Header */}
        <View className="mb-5">
          <Text className="text-black text-h2 font-bold mb-3">Reviews</Text>
          <Text className="text-gray700 text-body">
            Please check the information below to make sure everything is
            correct.
          </Text>
        </View>

        {/* Content */}
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
          {/* Applicant Section */}
          <View className="flex-row justify-between items-center">
            <Text className="text-xl font-bold font-inter-bold">
              Applicant data
            </Text>
            <Pressable
              onPress={() => {
                // navigation.navigate("EditApplicant")
                router.push({
                  pathname: "/(account)/Personal/EditApplicant",
                });
              }}
            >
              <Text className="text-pb text-xl font-inter underline">Edit</Text>
            </Pressable>
          </View>
          {renderCard(applicantData)}

          {/* Identity Documents Section */}
          <View className="flex-row justify-between items-center mt-6">
            <Text className="text-xl font-bold font-inter-bold">
              Identity documents
            </Text>
            <Pressable
              onPress={() => {
                // navigation.navigate("EditDocuments")
                router.push({
                  pathname: "/(account)/Personal/EditDocuments",
                });
              }}
            >
              <Text className="text-pb text-xl font-inter underline">Edit</Text>
            </Pressable>
          </View>

          <View className="bg-gray100 p-4 rounded-2xl my-4 flex-row items-center">
            <File className="text-black" size={24} />
            <Text className="text-gray500 font-semibold text-h5 ml-3">
              {identityDocuments[0].label}
            </Text>
          </View>
        </ScrollView>

        {/* Footer Button */}
        <View className="px-4 pb-4">
          <Button
            onPress={() => {
              // navigation.navigate("VerifyIdentify")
              router.push({
                pathname: "/(account)/Personal/VerifyIdentify",
              });
            }}
            label="Continue"
            // className="w-full"
          />
        </View>
      </Layout>
    </View>
  );
}

import React from "react";
import { View, Text, ScrollView, Pressable, Share } from "react-native";
import { Copy, File } from "lucide-react-native";

import Layout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import { router } from "expo-router";
import { Button } from "@/components/ui/Button";

const applicantData = [
  { label: "Receiver", value: "Salomon UIIX" },
  { label: "Sort code", value: "3252 32 12" },
  { label: "Accout number", value: "832498713948" },
  { label: "BIC", value: "ISSUED IN UNITED KINGDOM" },

];


export default function BankInformation() {

  
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: 'Check out this awesome content!',
        url: 'https://example.com', // optional
        title: 'Awesome Link',      // iOS only
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log('Shared with activity type:', result.activityType);
        } else {
          // shared
          console.log('Shared successfully');
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log('Share dismissed');
      }
    } catch (error) {
      console.error('Error sharing:', error.message);
    }
  };



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
          <Text className="text-black text-h1 mx-1 font-bold mb-3">Details you’ll need to {"\n"}make this transfer</Text>
          <Text className="text-gray700 text-body mx-1">
            Use your bank details to send money to {"\n"}your MUXXUS account.
          </Text>
        </View>

        {/* Content */}
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
          {/* Applicant Section */}
          <View className="flex-row justify-between items-center">
            <Text className="text-h5 font-bold font-inter-bold">
              International transfers only
            </Text>
            <Pressable
              onPress={onShare}
            >
              <Text className="text-primary text-h4 font-semibold font-inter ">Share</Text>
            </Pressable>
          </View>
          {renderCard(applicantData)}



        </ScrollView>

        {/* Footer Button */}
        <View className="px-1 pb-4">
          <Button
            onPress={() => {
              // navigation.navigate("VerifyIdentify")
              router.push({
                pathname: "/(account)/Personal/VerifyIdentify",
              });
            }}
            label="Continue"

          />
        </View>
      </Layout>
    </View>
  );
}
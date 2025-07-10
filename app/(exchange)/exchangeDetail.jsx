import React from "react";
import { View, Text, ScrollView, Pressable, Share } from "react-native";
import { Copy, File } from "lucide-react-native";

import Layout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import { router } from "expo-router";
import { Button } from "@/components/ui/Button";

const applicantData = [
  { label: "You're converting", value: "10 GBP" },
  { label: "To", value: "13.31 USD" },
  { label: "Fee (included)", value: "0.58 GBP" },
  { label: "Exchange rate", value: "1 GBP = 1.33 USD" },

];


export default function exchangeDetail() {


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
          <Text className="text-black text-h1 mx-1 font-bold mb-3">Does it all look good?</Text>

        </View>

        {/* Content */}
        <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
          {/* Applicant Section */}
          <View className="flex-row justify-between items-center">
            <Text className="text-h5 font-bold font-inter-bold">
              Exchange details
            </Text>
          </View>
          {renderCard(applicantData)}



        </ScrollView>

        {/* Footer Button */}
        <View className="px-1 pb-4">
          <Button
            onPress={() => {
              
              router.push({
                pathname: "/(topup)/SuccessPage/",
                params: {
                  title: "Exchange completed",
                  description: "10 GBP to 13.31 USD",
                },
              });
            }}
            label="Continue"

          />
        </View>
      </Layout>
    </View>
  );
}
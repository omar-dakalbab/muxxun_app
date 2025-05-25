import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import SelectModal from "@/components/ui/SelectModal";
import HeaderNavigation from "@/components/HeaderNavigations";
import ContButton from "@/components/ContButton";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import { useNavigation } from "@react-navigation/native";

export default function Activities({ navigation }: any) {
  const activityData = [
    {
      id: 0,
      title: "What will be the source of funds?",
      placeholder: "Select your source of funds",
      options: [
        { label: "Salary", value: "salary" },
        { label: "Business", value: "business" },
        { label: "Investment", value: "investment" },
        { label: "Other", value: "other" },
      ],
    },
    {
      id: 1,
      title: "What is your current occupation?",
      placeholder: "Select your occupation",
      options: [
        { label: "Student", value: "student" },
        { label: "Employed", value: "employed" },
        { label: "Unemployed", value: "unemployed" },
        { label: "Retired", value: "retired" },
      ],
    },
  ];

  return (
    <View className="bg-white flex-1 items-start justify-start">
      <HeaderNavigation title="" />

      <Layout footer={<Button label="Continue" size="lg" />}>
        <View className="mb-3">
          <Text className="text-black font-inter-bold mb-3 text-h2 font-bold w-full">
            Activities
          </Text>
        </View>

        {activityData.map((item) => (
          <SelectModal
            key={item.id}
            title={item.title}
            options={item.options}
            placeholder={item.placeholder}
          />
        ))}

        <Pressable
          className="h-14 mt-6 bg-[#F5F5F5] flex flex-row items-center rounded-2xl"
          onPress={() => {
            navigation.navigate("OperationActivity");
          }}
        >
          <Image
            className="ml-5 mr-3 object-contain"
            source={require("../../assets/plus.png")}
          />
          <Text className="text-pb text-h5 font-inter-bold font-semibold">
            Operations activity
          </Text>
        </Pressable>
      </Layout>
    </View>
  );
}

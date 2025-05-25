import React from "react";
import { View, Text, Pressable, Image } from "react-native";

import ContButton from "@/components/ContButton";
import Layout from "@/components/layout";
import SelectModal from "@/components/ui/SelectModal";
import { ScrollView } from "react-native-gesture-handler";
import HeaderNavigation from "@/components/HeaderNavigations";

export default function OperationActivity({ navigation }: { navigation: any }) {
  const activityData = [
    {
      id: 0,
      title: "Monthly Turnover (EUR)",
      placeholder: "Select Monthly Turnover",
      options: [
        { label: "From 1 to 50 000", value: "1-50000" },
        { label: "From 50 000 to 300 001", value: "50001-300001" },
        { label: "From 300 001 to 1 000 0001", value: "300001-1000001" },
        { label: "Over 1 000 001", value: "1000001+" },
      ],
    },
    {
      id: 1,
      title: "N. of incoming transactions",
      placeholder: "Select N. of incoming transactions",
      options: [
        { label: "From 1 to 31", value: "1-31" },
        { label: "From 31 to 101", value: "31-101" },
        { label: "From 101 to 501", value: "101-501" },
        { label: "Over 501", value: "501+" },
      ],
    },
    {
      id: 2,
      title: "N. of outgoing transactions",
      placeholder: "Select N. of outgoing transactions",
      options: [
        { label: "From 1 to 31", value: "1-31" },
        { label: "From 31 to 101", value: "31-101" },
        { label: "From 101 to 501", value: "101-501" },
        { label: "Over 501", value: "501+" },
      ],
    },
    {
      id: 3,
      title: "Value of incoming transactions",
      placeholder: "Select Value of incoming transactions",
      options: [
        { label: "From 1 to 1 001", value: "1-1001" },
        { label: "From 1 001 to 5 001", value: "1001-5001" },
        { label: "From 5 001 to 10 001", value: "5001-10001" },
        { label: "Over 10 001", value: "10001+" },
      ],
    },
    {
      id: 4,
      title: "Value of outgoing transactions",
      placeholder: "Select Value of outgoing transactions",
      options: [
        { label: "From 1 to 1 001", value: "1-1001" },
        { label: "From 1 001 to 5 001", value: "1001-5001" },
        { label: "From 5 001 to 10 001", value: "5001-10001" },
        { label: "Over 10 001", value: "10001+" },
      ],
    },
    {
      id: 5,
      title: "Max. value of incoming payment",
      placeholder: "Select Max. value of incoming payment",
      options: [
        { label: "From 1 to 1 001", value: "1-1001" },
        { label: "From 1 001 to 5 001", value: "1001-5001" },
        { label: "From 5 001 to 10 001", value: "5001-10001" },
        { label: "Over 10 001", value: "10001+" },
      ],
    },
    {
      id: 6,
      title: "Max. value of outgoing payment",
      placeholder: "Select Max. value of outgoing payment",
      options: [
        { label: "From 1 to 1 001", value: "1-1001" },
        { label: "From 1 001 to 5 001", value: "1001-5001" },
        { label: "From 5 001 to 10 001", value: "5001-10001" },
        { label: "Over 10 001", value: "10001+" },
      ],
    },
  ];

  return (
    <View className="bg-white flex-1">
      <HeaderNavigation title="" />
      <Layout footer={<ContButton />}>
        <View className="mb-5">
          <Text className="text-h2 text-primary font-inter-bold mb-3 font-bold w-full">
            Operation activity
          </Text>
          <Text className="text-body text-gray700 w-full">
            What will be the expected transaction activity on the account?
          </Text>
        </View>

        <ScrollView className="flex-1 mb-18">
          {activityData.map((item) => (
            <SelectModal
              key={item.id}
              title={item.title}
              subTitle={item.title}
              options={item.options}
              placeholder={item.placeholder}
            />
          ))}
        </ScrollView>
      </Layout>
    </View>
  );
}

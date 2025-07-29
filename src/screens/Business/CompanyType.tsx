import React from "react";
import { View, Text } from "react-native";
import Layout from "@/components/layout";
import SelectModal from "@/components/ui/SelectModal";
import HeaderNavigation from "@/components/HeaderNavigations";
import { Button } from "@/components/ui/Button";

export function CompanyType({ navigation }) {
  const activityData = [
    {
      id: 0,
      title: "Regulated financial institution",
      subTitle: "Company Type",
      options: [
        {
          label: "Regulated financial institution",
          value: "Regulated financial institution",
        },
        { label: "E-commerce", value: "E-commerce" },
        { label: "Unregulated company", value: "Unregulated company" },
        {
          label: "Unregulated company without documents",
          value: "Unregulated company without documents",
        },
      ],
    },
  ];

  return (
    <View className="bg-white flex-1 ">
      <HeaderNavigation title="" />
      <Layout footer={<Button label="Continue" size="lg" />}>
        <View className="mb-3">
          <Text className="text-black mb-3 text-h2 font-bold">
            Company type
          </Text>
          <Text className="text-body text-gray700">
            xxxxxxxxxx xxxxxx xxxxxxxx xxxxxxxx xxxxxxx xxxxxxxxx xx xxxxxxxxxx
          </Text>
        </View>

        {activityData.map((item) => (
          <SelectModal
            key={item.id}
            title={item.title}
            options={item.options}
            subTitle={item.subTitle}
          />
        ))}
      </Layout>
    </View>
  );
}

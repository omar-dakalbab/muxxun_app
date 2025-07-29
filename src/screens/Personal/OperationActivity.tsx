import React from "react";
import { View, Text, Pressable, Image } from "react-native";

import ContButton from "@/components/ContButton";
import Layout from "@/components/layout";
import SelectModal from "@/components/ui/SelectModal";
import { ScrollView } from "react-native-gesture-handler";
import HeaderNavigation from "@/components/HeaderNavigations";
import { operationActivityData } from "@/data/OperationActivity";

export default function OperationActivity({ navigation }: { navigation: any }) {
  return (
    <View className="bg-white flex-1">
      <HeaderNavigation title="" />
      <Layout
        footer={
          <ContButton
            title="Continue"
            onPress={() => navigation.navigate("Activities")}
          />
        }
      >
        <View className="mb-5">
          <Text className="text-h2 text-primary font-inter-bold mb-3 font-bold w-full">
            Operation activity
          </Text>
          <Text className="text-body text-gray700 w-full">
            What will be the expected transaction activity on the account?
          </Text>
        </View>

        <ScrollView className="flex-1 mb-18">
          {operationActivityData.map((item) => (
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

import React from "react";
import { View, Text, ScrollView } from "react-native";
import Layout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import ToggleInput from "@/components/ToggleInput";
import { servicesData } from "@/data/ServicesOptions";
import { router } from "expo-router";
import { Button } from "@/components/ui/Button";

export default function Services() {
  return (
    <View className="flex-1 bg-white">
      <HeaderNavigation title="" />

      <Layout
        footer={
          <Button
            label="Continue"
            onPress={() => {
              // navigation.navigate("VerifyIdentify")
              router.push({
                pathname: "/(account)/Personal/VerifyIdentify",
              });
            }}
            size="lg"
          />
        }
      >
        {/* Header */}
        <View className="mb-4">
          <Text className="text-primary font-bold text-h2 mb-2">Services</Text>
          <Text className="text-gray700 text-body w-11/12">
            What types of services do you plan to use?
          </Text>
        </View>

        {/* Services List */}
        <ScrollView className="mb-10" showsVerticalScrollIndicator={false}>
          {servicesData.map((service, index) => (
            <ToggleInput
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </ScrollView>
      </Layout>
    </View>
  );
}

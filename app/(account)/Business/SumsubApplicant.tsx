import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import HeaderNavigation from "@/components/HeaderNavigations";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { router } from "expo-router";
import { useAccountDataStore } from "@/store/useAccountDataStore";

export default function SumsubApplicant() {
  const { identityVerification, setIdentityVerification } =
    useAccountDataStore();

  const formFields = [
    { key: "firstName", label: "First Name", type: "text" },
    { key: "lastName", label: "Last Name", type: "text" },
    { key: "email", label: "E-mail", type: "email" },
    { key: "dateOfBirth", label: "Date of Birth", type: "date" },
    { key: "nationality", label: "Nationality", type: "text" },
    { key: "city", label: "City *", type: "text" },
    { key: "address", label: "Address line 1 *", type: "text" },
    { key: "address2", label: "Address line 2 *", type: "text" },
    { key: "postalCode", label: "Post code", type: "text" },
  ] as const;

  const handleChange = (
    key: keyof typeof identityVerification,
    value: string
  ) => {
    setIdentityVerification({ [key]: value });
  };

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="auto" />
      <HeaderNavigation title="" />

      <Layout
        footer={
          <Button
            label="Continue"
            size="lg"
            onPress={() => {
              router.push({
                pathname: "/(account)/Personal/IdentityDocument",
              });
            }}
          />
        }
      >
        <View className="flex-1">
          <ScrollView
            contentContainerStyle={{ paddingBottom: 100 }}
            showsVerticalScrollIndicator={false}
          >
            <View className="mb-5">
              <Text className="mb-2 text-h2 font-bold text-black">
                Sumsub Applicant data
              </Text>
              <Text className="text-[15px] text-gray700">
                Please fill out your details for verification.
              </Text>
            </View>

            <View>
              {formFields.map(({ key, label, type }) => (
                <Input
                  key={key}
                  label={label}
                  value={identityVerification?.[key] || ""}
                  onChangeText={(text) => handleChange(key, text)}
                  type={type}
                />
              ))}
            </View>
          </ScrollView>
        </View>
      </Layout>
    </View>
  );
}

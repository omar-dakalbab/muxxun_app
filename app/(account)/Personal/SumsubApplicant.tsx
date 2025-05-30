import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import HeaderNavigation from "@/components/HeaderNavigations";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import { router } from "expo-router";

export default function SumsubApplicant({ navigation }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    nationality: "",
    city: "",
    address1: "",
    address2: "",
    postcode: "",
  });

  const handleChange = (key: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const formFields = [
    { key: "firstName", label: "First Name", type: "text" },
    { key: "lastName", label: "Last Name", type: "text" },
    { key: "email", label: "E-mail", type: "email" },
    { key: "dob", label: "Date of Birth", type: "date" },
    { key: "nationality", label: "Nationality", type: "text" },
    { key: "city", label: "City *", type: "text" },
    { key: "address1", label: "Address line 1 *", type: "text" },
    { key: "address2", label: "Address line 2 *", type: "text" },
    { key: "postcode", label: "Post code", type: "text" },
  ] as const;

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
              // navigation.navigate("IdentityDocument")
              router.push({
                pathname: "/(account)/Personal/IdentityDocument",
                // params: { type: "sumsub_applicant" },
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
                  value={formData[key]}
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

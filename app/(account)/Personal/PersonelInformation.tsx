import React from "react";
import { View, Text } from "react-native";
import PageLayout from "@/components/layout";
import Input from "@/components/ui/Input";
import HeaderNavigation from "@/components/HeaderNavigations";
import { Button } from "@/components/ui/Button";
import SelectModal from "@/components/ui/SelectModal";
import { router } from "expo-router";
import { useAccountDataStore } from "@/store/useAccountDataStore"; // Adjust import as needed

export default function PersInfo() {
  const { personalInformation, setField } = useAccountDataStore();

  const handleChange =
    (field: keyof typeof personalInformation) => (value: string) => {
      setField(field, value);
    };

  const handleClear = (field: keyof typeof personalInformation) => () => {
    setField(field, "");
  };

  const renderInput = (
    field: keyof typeof personalInformation,
    label: string,
    placeholder: string,
    type: string = "text",
    options: any = []
  ) => (
    <Input
      label={label}
      placeholder={placeholder}
      className="mx-5 mb-3"
      value={personalInformation[field]}
      onClear={handleClear(field)}
      onChangeText={handleChange(field)}
      type={type}
      options={options}
    />
  );

  return (
    <View className="bg-white flex-1">
      <HeaderNavigation title="" />
      <PageLayout
        footer={
          <Button
            label="Continue"
            size="lg"
            onPress={() => {
              router.back();
            }}
          />
        }
      >
        {/* Header */}
        <View className="mb-3">
          <Text className="text-black font-inter-bold mb-3 text-h2 font-bold w-full">
            Personal information
          </Text>
        </View>

        {/* Input Fields */}
        <View>
          {renderInput("firstName", "First Name", "Enter your first name")}
          {renderInput("lastName", "Last Name", "Enter your last name")}
          {renderInput("email", "E-mail", "Enter your email")}
          {renderInput(
            "dateOfBirth",
            "Date of Birth",
            "Enter your date of birth",
            "date"
          )}
        </View>

        <SelectModal
          subTitle="Nationality"
          value={personalInformation.nationality}
          onChange={(value) => setField("nationality", value)}
          options={[
            { label: "Turkey", value: "TR" },
            { label: "United States", value: "US" },
            { label: "Germany", value: "DE" },
            { label: "France", value: "FR" },
            { label: "United Kingdom", value: "UK" },
          ]}
        />
      </PageLayout>
    </View>
  );
}

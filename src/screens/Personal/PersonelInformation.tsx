import HeaderNavigation from "@/components/HeaderNavigations";
import PageLayout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/input";
import SelectModal from "@/components/ui/SelectModal";
import React, { useState } from "react";
import { Text, View } from "react-native";

export default function PersInfo({ navigation }: any) {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    nationality: "",
  });

  const handleChange = (field: any) => (value: any) =>
    setState((prev) => ({ ...prev, [field]: value }));

  const handleClear = (field: any) => () =>
    setState((prev) => ({ ...prev, [field]: "" }));

  const renderInput = (
    field: string,
    label: string,
    placeholder: string,
    type: string,
    options: object
  ) => (
    <Input
      label={label}
      placeholder={placeholder}
      className="mx-5 mb-3"
      value={state[field]}
      onClear={handleClear(field)}
      onChangeText={handleChange(field)}
      type={type || "text"}
      options={options || []}
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
              // Handle continue action here
              console.log("Continue pressed", state);
              navigation.goBack(); // Navigate back or to the next screen
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
          value={state.nationality}
          onChange={(value) => setState({ ...state, nationality: value })}
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

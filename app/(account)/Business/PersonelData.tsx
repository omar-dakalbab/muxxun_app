import React from "react";
import { View, ScrollView, Text } from "react-native";
import ToggleInput from "@/components/ToggleInput";
import Layout from "@/components/layout";
import Input from "@/components/ui/Input";
import HeaderNavigation from "@/components/HeaderNavigations";
import ScreenHeader from "@/components/ui/ScreenHeader";
import SelectModal from "@/components/ui/SelectModal";
import { router } from "expo-router";
import { Button } from "@/components/ui/Button";
import { useAccountDataStore } from "@/store/useAccountDataStore";

export default function PersonalData() {
  const { personalInformation, setPersonalInformation } = useAccountDataStore();

  const handleChange = (field: string, value: string | boolean) => {
    setPersonalInformation({ [field]: value });
  };

  const handleContinue = () => {
    router.push({
      pathname: "/(account)/Business/BusinessVerifyIdentify",
    });
  };

  const inputs = [
    { label: "First Name", field: "firstName", type: "text" },
    { label: "Last Name", field: "lastName", type: "text" },
    {
      label: "Email",
      field: "email",
      type: "email",
      keyboardType: "email-address",
    },
    { label: "Date of Birth", field: "dateOfBirth", type: "date" },
    { label: "Nationality", field: "nationality", type: "text" },
    { label: "Position", field: "position", type: "text" },
  ];

  return (
    <View className="flex-1 bg-white">
      <HeaderNavigation title="" />
      <Layout footer={<Button onPress={handleContinue} label="Continue" />}>
        <ScrollView>
          <ScreenHeader
            title="Personal Data"
            description="Personal Data of the Main Representative"
          />
          <View className="mt-4">
            {inputs.map(({ label, field, type, keyboardType }) => {
              if (field === "position") {
                return (
                  <View key={field}>
                    <Text className="mb-3 text-[13px]">
                      Your position in the company
                    </Text>
                    <Input
                      label={label}
                      value={
                        personalInformation[
                          field as keyof typeof personalInformation
                        ] as string
                      }
                      onChangeText={(text) => handleChange(field, text)}
                      type={type}
                      keyboardType={keyboardType}
                    />
                  </View>
                );
              }

              return (
                <Input
                  key={field}
                  label={label}
                  value={
                    personalInformation[
                      field as keyof typeof personalInformation
                    ] as string
                  }
                  onChangeText={(text) => handleChange(field, text)}
                  type={type}
                  keyboardType={keyboardType}
                />
              );
            })}

            <ToggleInput
              title="I own shares of the company"
              value={personalInformation.ownsShares}
              onToggle={(val) => handleChange("ownsShares", val)}
            />

            <View className="mt-4">
              {personalInformation.ownsShares && (
                <>
                  <Input
                    label="Percentage of Shares Owned"
                    value={personalInformation.percentageSharesOwned}
                    onChangeText={(text) =>
                      handleChange("percentageSharesOwned", text)
                    }
                    type="text"
                    keyboardType="numeric"
                  />
                  <SelectModal
                    options={[
                      { label: "Direct Ownership", value: "direct" },
                      { label: "Indirect Ownership", value: "indirect" },
                    ]}
                    value={personalInformation.ownershipNature}
                    onChange={(val) => handleChange("ownershipNature", val)}
                    subTitle="Nature of ownership"
                  />
                </>
              )}
            </View>
          </View>
        </ScrollView>
      </Layout>
    </View>
  );
}

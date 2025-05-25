import React from "react";
import { View, ScrollView, Text } from "react-native";
import ContButton from "@/components/ContButton";
import ToggleInput from "@/components/ToggleInput";
import Layout from "@/components/layout";
import Input from "@/components/ui/Input";
import HeaderNavigation from "@/components/HeaderNavigations";
import ScreenHeader from "@/components/ui/ScreenHeader";
import SelectModal from "@/components/ui/SelectModal";

type PersonalDataProps = {
  navigation: any;
};

export default function PersonalData({ navigation }: PersonalDataProps) {
  const [state, setState] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    nationality: "",
    position: "",
    ownsShares: false,
    percentageSharesOwned: "",
  });

  const handleChange = (field: string, value: string | boolean) => {
    setState((prev) => ({ ...prev, [field]: value }));
  };

  const handleContinue = () => {
    console.log("Continue pressed with state:", state);
    navigation.navigate("BusinessVerifyIdentify");
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
      <Layout footer={<ContButton onPress={handleContinue} />}>
        <ScrollView>
          <ScreenHeader
            title="Personal Data"
            description="Personal Data of the Main Representative"
          />
          <View className="mt-4">
            {inputs.map(({ label, field, type, keyboardType }) => {
              if (field === "position") {
                return (
                  <View>
                    <Text className="mb-3 text-[13px]">
                      Your position in the company
                    </Text>
                    <Input
                      key={field}
                      label={label}
                      value={state[field as keyof typeof state] as string}
                      onChangeText={(text) => handleChange(field, text)}
                      type={type as "text" | "email" | "date"}
                      keyboardType={
                        keyboardType as
                          | "default"
                          | "email-address"
                          | "numeric"
                          | "phone-pad"
                          | undefined
                      }
                    />
                  </View>
                );
              }

              return (
                <Input
                  key={field}
                  label={label}
                  value={state[field as keyof typeof state] as string}
                  onChangeText={(text) => handleChange(field, text)}
                  type={type as "text" | "email" | "date"}
                  keyboardType={
                    keyboardType as
                      | "default"
                      | "email-address"
                      | "numeric"
                      | "phone-pad"
                      | undefined
                  }
                />
              );
            })}

            <ToggleInput
              title="I own shares of the company"
              value={state.ownsShares}
              onToggle={(val) => handleChange("ownsShares", val)}
            />

            <View className="mt-4">
              {state.ownsShares && (
                <Input
                  label="Percentage of Shares Owned"
                  value={state.percentageSharesOwned}
                  onChangeText={(text) =>
                    handleChange("percentageSharesOwned", text)
                  }
                  type="text"
                  keyboardType="numeric"
                />
              )}
              {state.ownsShares && (
                <SelectModal
                  options={[
                    { label: "Direct Ownership", value: "direct" },
                    { label: "Indirect Ownership", value: "indirect" },
                  ]}
                  subTitle="Nature of ownership"
                />
              )}
            </View>
          </View>
        </ScrollView>
      </Layout>
    </View>
  );
}

import HeaderNavigation from "@/components/HeaderNavigations";
import LoadingScreen from "@/components/LoadingScreen";
import ToggleInput from "@/components/ToggleInput";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import ScreenHeader from "@/components/ui/ScreenHeader";
import SelectModal from "@/components/ui/SelectModal";
import Input from "@/components/ui/Input";
import React from "react";
import { View } from "react-native";

export default function Address({
  navigation,
}: {
  navigation: {
    navigate: (screen: string) => void;
  };
}) {
  const [state, setState] = React.useState({
    country: "",
    city: "",
    postalCode: "",
    addressLine1: "",
    addressLine2: "",
  });

  const [loading, setLoading] = React.useState(false);

  if (loading) {
    return <LoadingScreen message="Uploading..." />;
  }

  return (
    <View className="bg-white flex-1 ">
      <HeaderNavigation />
      <Layout
        footer={
          <Button
            label="Continue"
            size="lg"
            onPress={() => {
              setLoading(true);
              // Simulate an async operation like uploading data
              setTimeout(() => {
                setLoading(false);
                navigation.navigate("CorporateInformation");
              }, 2000);
            }}
          />
        }
      >
        <ScreenHeader
          title="Company address"
          description="Registered address"
        />
        <View className="mt-4">
          <View className="mb-4">
            <ToggleInput title="Coincides with the registered address" />
          </View>

          <SelectModal
            subTitle="Country"
            value={state.country}
            onChange={(value) => setState({ ...state, country: value })}
            options={[
              { label: "United States", value: "US" },
              { label: "Canada", value: "CA" },
              { label: "United Kingdom", value: "UK" },
            ]}
          />

          <Input
            label="City"
            type="text"
            value={state.city}
            onChangeText={(text) => setState({ ...state, city: text })}
          />

          <Input
            label="Postal Code"
            type="text"
            value={state.postalCode}
            onChangeText={(text) => setState({ ...state, postalCode: text })}
          />
          <Input
            label="Address Line 1"
            type="text"
            value={state.addressLine1}
            onChangeText={(text) => setState({ ...state, addressLine1: text })}
          />
          <Input
            label="Address Line 2"
            type="text"
            value={state.addressLine2}
            onChangeText={(text) => setState({ ...state, addressLine2: text })}
          />
        </View>
      </Layout>
    </View>
  );
}

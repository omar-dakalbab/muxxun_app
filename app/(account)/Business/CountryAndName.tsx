import React from "react";
import { View } from "react-native";

import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ScreenHeader from "@/components/ui/ScreenHeader";
import HeaderNavigation from "@/components/HeaderNavigations";
import SelectModal from "@/components/ui/SelectModal";
import { useAccountDataStore } from "@/store/useAccountDataStore";

export default function CountryAndName() {
  const { countryAndName, setCountryAndName } = useAccountDataStore();

  return (
    <View className="bg-white flex-1">
      <HeaderNavigation title="" />
      <Layout footer={<Button size="lg" label="Continue" />}>
        <ScreenHeader
          title="Country and Name"
          description="xxxxxxxxxx xxxxxx xxxxxxxx xxxxxxxx xxxxxxx xxxxxxxxx xx xxxxxxxxxx x xxxxxxx"
        />
        <View className="flex justify-between flex-1 mt-6">
          <View>
            <Input
              value={countryAndName.name}
              onChangeText={(value) =>
                setCountryAndName({ ...countryAndName, name: value })
              }
              label="Company Name"
              type="text"
            />
            <SelectModal
              value={countryAndName.country}
              onChange={(value) =>
                setCountryAndName({ ...countryAndName, country: value })
              }
              subTitle="Country of incorporation of the company"
              options={[
                { label: "Select Country", value: "" },
                { label: "United States", value: "United States" },
                { label: "Canada", value: "Canada" },
                { label: "United Kingdom", value: "United Kingdom" },
                // Add more countries as needed
              ]}
            />
          </View>
        </View>
      </Layout>
    </View>
  );
}

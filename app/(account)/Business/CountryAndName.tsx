import React from "react";
import { View, Text, Pressable, Image, TextInput } from "react-native";
import { StatusBar } from "expo-status-bar";

import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import ScreenHeader from "@/components/ui/ScreenHeader";
import HeaderNavigation from "@/components/HeaderNavigations";
import Select from "@/components/ui/Select";
import SelectModal from "@/components/ui/SelectModal";

export default function CountryAndName({ navigation }) {
  const [state, setState] = React.useState({
    companyName: "",
  });
  return (
    <View className="bg-white flex-1">
      <HeaderNavigation title="" />
      <Layout footer={<Button size="lg">Continue</Button>}>
        <ScreenHeader
          title="Country and Name"
          description="xxxxxxxxxx xxxxxx xxxxxxxx xxxxxxxx xxxxxxx xxxxxxxxx xx xxxxxxxxxx x xxxxxxx"
        />
        <View className="flex justify-between flex-1 mt-6">
          <View>
            <Input
              value={state.companyName}
              onChangeText={(text) => setState({ ...state, companyName: text })}
              label="Company Name"
              type="text"
            />
            <SelectModal
              value={state.companyName}
              onChange={(value) => setState({ ...state, companyName: value })}
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

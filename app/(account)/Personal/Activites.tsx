import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

import SelectModal from "@/components/ui/SelectModal";
import HeaderNavigation from "@/components/HeaderNavigations";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/Button";

import { useSelectModal } from "@/store/useSelectModal";
import { activityData } from "@/data/Activities";
import { router } from "expo-router";
import ScreenHeader from "@/components/ui/ScreenHeader";

type RootStackParamList = {
  Activities: undefined;
  OperationActivity: undefined;
};

type ActivitiesScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "Activities"
>;

export default function Activities() {
  const navigation = useNavigation<ActivitiesScreenNavigationProp>();
  const { selections, setSelection } = useSelectModal();
  console.log("selections", selections);
  return (
    <View className="bg-white flex-1 items-start justify-start">
      <HeaderNavigation title="" />

      <Layout footer={<Button label="Continue" size="lg" />}>
        <ScreenHeader title="Activities" />

        {activityData.map((item) => (
          <SelectModal
            key={item.id}
            subTitle={item.title}
            options={item.options}
            placeholder={item.placeholder}
            value={selections[item.id] || undefined}
            onChange={(option) => setSelection("activites", item.id, option)}
          />
        ))}

        <Pressable
          className="h-14 mt-6 bg-[#F5F5F5] flex flex-row items-center rounded-2xl"
          onPress={() => {
            // navigation.navigate("OperationActivity")
            router.push({
              pathname: "/(account)/Business/OperationActivity",
              // params: { type: "activities" },
            });
          }}
        >
          <Image
            className="ml-5 mr-3 object-contain"
            source={require("@/assets/plus.png")}
          />
          <Text className="text-pb text-h5 font-inter-bold font-semibold">
            Operations activity
          </Text>
        </Pressable>
      </Layout>
    </View>
  );
}

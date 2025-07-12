import { Text, View, Pressable, ImageSourcePropType } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import AccountCard from "@/components/ui/AccountCard";
import { ScrollView } from "react-native-gesture-handler";
import { Building } from "lucide-react-native";
import ScreenHeader from "@/components/ui/ScreenHeader";
import HeaderNavigation from "@/components/HeaderNavigations";
import Layout from "@/components/layout";
import { router } from "expo-router";
import { useAccountDataStore } from "@/store/useAccountDataStore";

type Nav = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const SectionTitle = ({ title }: { title: string }) => (
  <View className="mt-5">
    <Text className="font-inter-bold text-h5 font-semibold">{title}</Text>
  </View>
);

const SkipButton = () => (
  <View className="w-full px-6">
    <Pressable
      className="bg-white w-full h-20 rounded-full items-center justify-center"
      onPress={() => {
        router.push("/(account)/Business/SignApplications");
      }}
    >
      <Text className="text-black font-semibold text-xl font-inter-bold">
        Skip for now
      </Text>
    </Pressable>
  </View>
);

export default function BusinessVerifyIdentify({ navigation }: Nav) {
  const {
    companyType,
    countryAndName,
    personalInformation,
    activities,
    operationActivities,
    services,
    identityVerification,
  } = useAccountDataStore();
  const verificationOptions = [
    {
      title: "Company type",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "BusinessCompanyType",
      isCardActive: Object.keys(companyType).length > 0,
    },
    {
      title: "Country and Name",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "CountryAndName",
      isCardActive: Object.keys(countryAndName).length > 0,
    },
    {
      title: "Personal Data",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "PersonelData",
      isCardActive: Object.keys(personalInformation).length > 0,
    },
    {
      title: "Identity verification",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "IdentityVerification",
      isCardActive: Object.keys(identityVerification || {}).length > 0,
    },
    {
      title: "User T&C",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "SignApplications",
    },
    {
      title: "Address",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "Address",
    },
    {
      title: "Corporate information",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "CorporateInformation",
    },
    {
      title: "Operations activity",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "OperationActivity",
      isCardActive: Object.keys(operationActivities).length > 0,
    },
    {
      title: "Services",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "Services",
      isCardActive: Object.keys(services).length > 0,
    },
    {
      title: "COF",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "IdentityDocument",
    },
    {
      title: "Add documents",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "SumsubApplicant",
    },
    {
      title: "Sign",
      description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
      icon: require("@/assets/car.png"),
      screen: "SignApplications",
    },
  ];
  return (
    <View className="bg-white flex-1">
      <HeaderNavigation />
      <Layout>
        <ScreenHeader
          title="Create new business account"
          description="Complete step by step"
        />

        <SectionTitle title="Method of verification" />

        <ScrollView
          className="flex-1 mt-2"
          showsVerticalScrollIndicator={false}
        >
          {verificationOptions.map(
            ({ title, screen, icon, description }, index) => (
              <AccountCard
                key={index}
                title={title}
                icon={icon}
                onClick={() => {
                  router.push({
                    pathname: `/(account)/Business/${screen}`,
                  });
                }}
                description={description}
              />
            )
          )}
        </ScrollView>

        <SkipButton />
      </Layout>
    </View>
  );
}

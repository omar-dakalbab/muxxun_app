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

type Nav = {
  navigation: {
    navigate: (screen: string) => void;
  };
};

const verificationOptions = [
  {
    title: "Company type",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: require("@/assets/car.png"),
    screen: "CompanyType",
    // icon: Building,
  },
  {
    title: "Country and Name",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: require("@/assets/car.png"),
    screen: "CountryAndName",
  },
  {
    title: "Personal Data",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: require("@/assets/car.png"),
    screen: "PersonelData",
  },
  {
    title: "Identity verification",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: require("@/assets/car.png"),
    screen: "IdentityVerification",
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
  },
  {
    title: "Services",
    description: "xxxxxxxxxxxxxxxxxxxxxxxxxxx",
    icon: require("@/assets/car.png"),
    screen: "Services",
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

const SectionTitle = ({ title }: { title: string }) => (
  <View className="mt-5">
    <Text className="font-inter-bold text-h5 font-semibold">{title}</Text>
  </View>
);

const SkipButton = ({ navigation }: { navigation: Nav["navigation"] }) => (
  <View className="w-full px-6">
    <Pressable
      className="bg-white w-full h-20 rounded-full items-center justify-center"
      onPress={() => {
        navigation.navigate("SignApplications"); // Navigate to Home or any other screen
      }}
    >
      <Text className="text-black font-semibold text-xl font-inter-bold">
        Skip for now
      </Text>
    </Pressable>
  </View>
);

export default function BusinessVerifyIdentify({ navigation }: Nav) {
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
                  navigation.navigate(screen);
                }}
                description={description}
              />
            )
          )}
        </ScrollView>

        <SkipButton navigation={navigation} />
      </Layout>
    </View>
  );
}

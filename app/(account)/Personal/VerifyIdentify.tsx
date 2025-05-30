import React from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import AccountCard from "@/components/ui/AccountCard";
import Layout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import ScreenHeader from "@/components/ui/ScreenHeader";
import { router } from "expo-router";
import { useAccountDataStore } from "@/store/useAccountDataStore";

type SectionTitleProps = {
  title: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => (
  <View className="mb-2">
    <Text className="font-inter-bold text-h5 font-semibold">{title}</Text>
  </View>
);

const SkipButton: React.FC = () => (
  <View className="w-full px-6">
    <Pressable
      className="bg-white w-full h-20 rounded-full items-center justify-center"
      onPress={() =>
        router.push({
          pathname: "/(account)/Personal/SignApplications",
        })
      }
    >
      <Text className="text-black font-semibold text-xl font-inter-bold">
        Skip for now
      </Text>
    </Pressable>
  </View>
);

export default function VerifyIdentify() {
  const {
    personalInformation,
    activities,
    operationActivities,
    services,
    identityVerification,
  } = useAccountDataStore();

  // Define the verification options with their respective data
  const verificationOptions = [
    {
      title: "Personal information",
      screen: "PersonelInformation",
      icon: require("@/assets/car.png"),
      description: "XXXX XXXX XXXX XXXX",
      isCardActive: Object.keys(personalInformation).length > 0,
    },
    {
      title: "Activites",
      screen: "Activites",
      icon: require("@/assets/car.png"),
      description: "XXXX XXXX XXXX XXXX",
      isCardActive: Object.keys(activities).length > 0,
    },
    {
      title: "Operations activity",
      screen: "OperationActivity",
      icon: require("@/assets/car.png"),
      description: "XXXX XXXX XXXX XXXX",
      isCardActive: Object.keys(operationActivities).length > 0,
    },
    {
      title: "Services",
      screen: "Services",
      icon: require("@/assets/car.png"),
      description: "XXXX XXXX XXXX XXXX",
      isCardActive: Object.keys(services).length > 0,
    },
    {
      title: "Identity verification",
      screen: "IdentityVerification",
      icon: require("@/assets/car.png"),
      description: "XXXX XXXX XXXX XXXX",
      isCardActive: Object.keys(identityVerification || {}).length > 0,
    },
  ];
  return (
    <View className="bg-white flex-1">
      <HeaderNavigation />
      <Layout>
        <ScreenHeader
          title="Verify your identity"
          description="We need to check that you are who you say you are. Here's how you can do it."
        />
        <SectionTitle title="Method of verification" />
        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          {verificationOptions.map(
            ({ title, screen, icon, description, isCardActive }) => (
              <AccountCard
                key={title}
                title={title}
                icon={icon}
                description={description}
                onClick={() =>
                  router.push({
                    pathname: `/(account)/Personal/${screen}`,
                  })
                }
                isCardActive={isCardActive}
              />
            )
          )}
        </ScrollView>
        <SkipButton />
      </Layout>
    </View>
  );
}

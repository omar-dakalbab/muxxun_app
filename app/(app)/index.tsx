import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/home/Header";
import KYCCard from "@/components/home/KYCCard";
import MuxxusCard from "@/components/home/MuxxusCard";
import Skeleton from "@/components/home/Skeleton";

export default function Home() {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <View className="flex-1 bg-white">
        <Skeleton />
      </View>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Header title="SmartHome" initials="JD" />
      <View className="flex-1 px-4 gap-6">
        <View className="flex-1 ">
          <KYCCard />
        </View>
        <View className="flex-1 ">
          <MuxxusCard />
        </View>
      </View>
    </SafeAreaView>
  );
}

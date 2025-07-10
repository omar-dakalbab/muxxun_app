import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import Header from "@/components/home/Header";
import Skeleton from "@/components/home/Skeleton";
import { useAccountDataStore } from "@/store/useAccountDataStore";
import CompleteKyc from "@/components/home/CompleteKyc";
import MainHome from "@/components/home/MainHome";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const userConditions = useAccountDataStore((state) => state.userConditions);

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
      {userConditions?.isCompletedKYC ?
        <MainHome loading={loading} /> : <CompleteKyc loading={loading} />
      }
    </SafeAreaView>
  );
}

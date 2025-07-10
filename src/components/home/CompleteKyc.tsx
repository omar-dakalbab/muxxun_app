import React, { useRef } from "react";
import { Animated, View } from "react-native";
import KYCCard from "@/components/home/KYCCard";
import MuxxusCard from "@/components/home/MuxxusCard";
import Skeleton from "@/components/home/Skeleton";
import { useAccountDataStore } from "@/store/useAccountDataStore";
import Widgets from "./Widgets";

export default function CompleteKyc({ loading }: { loading?: boolean }) {
    const userConditions = useAccountDataStore((state) => state.userConditions);
    const scrollY = useRef(new Animated.Value(0)).current
    if (loading) {
        return (
            <View className="flex-1 bg-white">
                <Skeleton />
            </View>
        );
    }

    return (
        <View className="flex-1 px-4 gap-6">
            <View className="flex-1 ">
                <KYCCard />
            </View>
            <View className="flex-1 ">
                <MuxxusCard />
            </View>
            <View className="flex-1 ">
                <Widgets scrollY={scrollY} />
            </View>
        </View>
    );
}

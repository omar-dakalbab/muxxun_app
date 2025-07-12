import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const SkeletonItem = ({ style }: { style?: any }) => {
  const opacity = useSharedValue(1);

  React.useEffect(() => {
    opacity.value = withRepeat(
      withTiming(0.5, { duration: 700 }),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return <Animated.View style={[style, animatedStyle]} />;
};

export default function Skeleton() {
  return (
    <SafeAreaView className="flex-1 bg-white px-4 pt-4 gap-6">
      {/* Header Skeleton */}
      <View className="flex-row items-center justify-between">
        <View className="flex-row items-center space-x-3">
          <SkeletonItem style={{ width: 36, height: 36, borderRadius: 999, backgroundColor: "#e5e7eb" }} />
          <SkeletonItem style={{ width: 96, height: 16, borderRadius: 4, backgroundColor: "#e5e7eb" }} />
        </View>
        <View className="flex-row space-x-3">
          <SkeletonItem style={{ width: 20, height: 20, borderRadius: 999, backgroundColor: "#e5e7eb" }} />
          <SkeletonItem style={{ width: 20, height: 20, borderRadius: 999, backgroundColor: "#e5e7eb" }} />
        </View>
      </View>

      {/* KYC Card Skeleton */}
      <View className="flex-1 bg-white border border-zinc-200 rounded-2xl p-6 justify-center">
        <SkeletonItem style={{ width: 32, height: 32, borderRadius: 999, backgroundColor: "#e5e7eb", alignSelf: "center", marginBottom: 16 }} />
        <SkeletonItem style={{ width: 128, height: 16, borderRadius: 4, backgroundColor: "#e5e7eb", alignSelf: "center", marginBottom: 8 }} />
        <SkeletonItem style={{ width: 192, height: 12, borderRadius: 4, backgroundColor: "#e5e7eb", alignSelf: "center", marginBottom: 16 }} />
        <View className="w-48 h-8 border border-zinc-300 rounded-full self-center justify-center items-center flex-row">
          <SkeletonItem style={{ width: 16, height: 16, borderRadius: 999, backgroundColor: "#e5e7eb", marginRight: 8 }} />
          <SkeletonItem style={{ width: 64, height: 16, borderRadius: 4, backgroundColor: "#e5e7eb" }} />
        </View>
      </View>

      {/* Muxxus Card Skeleton */}
      <View className="flex-1 bg-gray-100 rounded-2xl p-6 justify-end pb-14">
        <SkeletonItem style={{ width: 80, height: 20, borderRadius: 4, backgroundColor: "#e5e7eb", alignSelf: "center", marginBottom: 8 }} />
        <SkeletonItem style={{ width: "75%", height: 12, borderRadius: 4, backgroundColor: "#e5e7eb", alignSelf: "center", marginBottom: 8 }} />
        <SkeletonItem style={{ width: "66%", height: 12, borderRadius: 4, backgroundColor: "#e5e7eb", alignSelf: "center" }} />
      </View>
    </SafeAreaView>
  );
}

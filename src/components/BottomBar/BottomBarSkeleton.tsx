import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const SkeletonItem = ({ style }: { style: any }) => {
  const opacity = useSharedValue(1);

  React.useEffect(() => {
    opacity.value = withRepeat(withTiming(0.5, { duration: 700 }), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return <Animated.View style={[style, animatedStyle]} />;
};

export default function BottomBarSkeleton() {
  return (
    <View style={styles.container}>
      {Array.from({ length: 5 }).map((_, index) => (
        <View key={index} style={styles.tabItem}>
          <SkeletonItem style={styles.icon} />
          <SkeletonItem style={styles.label} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 100,
    backgroundColor: "#ffffff",
    paddingBottom: 24,
    // borderTopWidth: 1,
    borderColor: "#f1f1f1",
  },
  tabItem: {
    alignItems: "center",
    justifyContent: "center",
    width: "19%",
  },
  icon: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#e5e7eb", // Tailwind's gray-200
  },
  label: {
    width: 40,
    height: 12,
    borderRadius: 4,
    backgroundColor: "#e5e7eb",
    marginTop: 8,
  },
});

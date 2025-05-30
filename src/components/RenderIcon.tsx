import { Image, View, StyleSheet } from "react-native";
import React from "react";

const iconMap: Record<string, any> = {
  notification: require("@/assets/icons/notification.png"),
  bank: require("@/assets/icons/bank.png"),
  search: require("@/assets/icons/search.png"),
};

interface RenderIconProps {
  icon: keyof typeof iconMap;
  style?: any;
}

export default function RenderIcon({ icon, style }: RenderIconProps) {
  const imageSource = iconMap[icon];

  if (!imageSource) {
    console.warn(`Icon "${icon}" not found in iconMap.`);
    return null;
  }

  return (
    <View style={[styles.container, style]}>
      <Image source={imageSource} style={styles.image} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 24, // w-6
    height: 24, // h-6
  },
});

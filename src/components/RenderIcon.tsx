import { Image, View, StyleSheet } from "react-native";
import React from "react";

const iconMap: Record<string, any> = {
  notification: require("@/assets/icons/notification.png"),
  bank: require("@/assets/icons/bank.png"),
  search: require("@/assets/icons/search.png"),
  user: require("@/assets/icons/user.png"),
  dots: require("@/assets/icons/dots.png"),
  transfer: require("@/assets/icons/transfer.png"),
  topup: require("@/assets/icons/topup.png"),
  exchange: require("@/assets/icons/exchange.png"),
  addaccount: require("@/assets/icons/addaccount.png"),
  file: require("@/assets/icons/file.png"),
  hide: require("@/assets/icons/hide.png"),
  banknote: require("@/assets/icons/banknote.png"),
};

interface RenderIconProps {
  icon: keyof typeof iconMap;
  style?: any;
  size?: number;
}

export default function RenderIcon({ icon, style, size = 24 }: RenderIconProps) {
  const imageSource = iconMap[icon];

  if (!imageSource) {
    console.warn(`Icon "${icon}" not found in iconMap.`);
    return null;
  }

  return (
    <View style={[styles.container, style]}>
      <Image source={imageSource} style={{
        width: size,
        height: size,
      }} resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
});

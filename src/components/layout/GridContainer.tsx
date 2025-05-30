// components/GridContainer.tsx
import React from "react";
import { View, ViewStyle } from "react-native";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export default function GridContainer({ children, style }: Props) {
  return (
    <View
      style={[
        {
          paddingHorizontal: 16,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
        },
        style,
      ]}
    >
      {children}
    </View>
  );
}

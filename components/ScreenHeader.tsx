import { View, Text } from "react-native";
import React, { ReactNode } from "react";

type ScreenHeaderProps = {
  children: ReactNode;
};

export default function ScreenHeader(
  { children }: ScreenHeaderProps = { children: <></> }
) {
  return (
    <Text className="text-3xl font-bold text-left text-black dark:text-white">
      {children}
    </Text>
  );
}

import { View, Text } from "react-native";
import React, { ReactNode } from "react";

type ScreenHeaderDescriptionProps = {
  children: ReactNode;
};

export default function ScreenHeaderDescription(
  { children }: ScreenHeaderDescriptionProps = { children: <></> }
) {
  return (
    <Text className="text-base font-normal text-left text-secondary mt-2">
      {children}
    </Text>
  );
}

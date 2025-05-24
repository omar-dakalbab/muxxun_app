import React from "react";
import { Text, TouchableOpacity, ViewStyle, TextStyle } from "react-native";
import clsx from "clsx";

interface ContButtonProps {
  onPress?: () => void;
  title?: string;
  disabled?: boolean;
  className?: string; // optional for custom styling
}

export default function ContButton({
  onPress,
  title = "Continue",
  disabled = false,
  className = "",
}: ContButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      className={clsx(
        "w-full py-4 rounded-xl mt-auto",
        disabled ? "bg-gray-300" : "bg-black",
        className
      )}
    >
      <Text
        className={clsx(
          "text-center text-base font-medium",
          disabled ? "text-gray-500" : "text-white"
        )}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
}

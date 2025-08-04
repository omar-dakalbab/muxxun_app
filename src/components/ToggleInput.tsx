import React from "react";
import { View, Text, Switch, Image, ImageSourcePropType } from "react-native";

type ToggleInputProps = {
  title: string;
  description?: string;
  value?: boolean;
  onToggle?: (value: boolean) => void;
  image?: ImageSourcePropType;
  className?: string;
  textClassName?: string;
  descriptionClass?: string;
  isUp?: boolean; // NEW prop for alternate layout
};

export default function ToggleInput({
  title,
  description,
  value,
  onToggle,
  image,
  descriptionClass = "text-gray700 text-footnote mt-1",
  className = "bg-gray100 flex-row justify-between items-center p-5 rounded-2xl border border-gray100 mb-4",
  textClassName = "text-primary text-[13px] font-semibold",
  isUp = false,
}: ToggleInputProps) {
  const isControlled = value !== undefined;
  const [internalValue, setInternalValue] = React.useState(false);
  const isToggled = isControlled ? value : internalValue;

  const handleToggle = (newValue: boolean) => {
    if (!isControlled) {
      setInternalValue(newValue);
    }
    onToggle?.(newValue);
  };

  if (isUp) {
    // NEW layout when isUp = true: image + title + switch aligned at top, description below
    return (
      <View className="bg-gray100 flex-row justify-between items-start p-5 rounded-2xl border border-gray100 mb-4">
        <View className="flex-row items-start flex-1 pr-4">
          {image && (
            <Image
              source={image}
              className="w-5 h-5 mr-3"
              resizeMode="contain"
            />
          )}
          <View className="flex-1">
            <Text className={textClassName}>{title}</Text>
            {!!description && (
              <Text className={descriptionClass}>{description}</Text>
            )}
          </View>
        </View>
        <Switch
          value={isToggled}
          onValueChange={handleToggle}
          trackColor={{ false: "#ccc", true: "#2563eb" }}
          thumbColor={isToggled ? "#fff" : "#fff"}
        />
      </View>
    );
  }

  // Default layout — exactly your original code:
  return (
    <View className={className}>
      <View className="flex-row items-start flex-1 pr-4">
        {image && (
          <Image
            source={image}
            className="w-5 h-5 mr-3 mt-1"
            resizeMode="contain"
          />
        )}
        <View className="flex-1">
          <Text className={textClassName}>{title}</Text>
          {!!description && (
            <Text className="text-gray700 text-footnote mt-1">{description}</Text>
          )}
        </View>
      </View>
      <Switch
        value={isToggled}
        onValueChange={handleToggle}
        trackColor={{ false: "#ccc", true: "#2563eb" }}
        thumbColor={isToggled ? "#fff" : "#fff"}
      />
    </View>
  );
}

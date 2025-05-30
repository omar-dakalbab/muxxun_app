import React from "react";
import { View, Text, Switch } from "react-native";

type ToggleInputProps = {
  title: string;
  description?: string;
  value?: boolean;
  onToggle?: (value: boolean) => void;
  className?: string;
  textClassName?: string;
};

export default function ToggleInput({
  title,
  description,
  value,
  onToggle,
  className = "bg-gray100 flex-row justify-between items-center p-5 rounded-2xl border border-gray100 mb-4",
  textClassName = "text-primary text-[13px] font-semibold",
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

  return (
    <View className={className}>
      <View className="flex-1 pr-4">
        <Text className={textClassName}>{title}</Text>
        {!!description && (
          <Text className="text-gray700 text-footnote mt-1">{description}</Text>
        )}
      </View>
      <Switch
        value={isToggled}
        onValueChange={handleToggle}
        trackColor={{ false: "#ccc", true: "#2563eb" }} // Gray / Blue
        thumbColor={isToggled ? "#fff" : "#fff"}
      />
    </View>
  );
}

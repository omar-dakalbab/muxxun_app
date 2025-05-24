import React, { useRef, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  Pressable,
  Animated,
  Easing,
  Keyboard,
  Platform,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { ChevronDown } from "lucide-react-native";

type Option = {
  label: string;
  value: string;
};

type SelectProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: Option[];
  error?: string;
};

const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  error,
}) => {
  const pickerRef = useRef<RNPickerSelect>(null);
  const [isFocused, setIsFocused] = useState(false);

  const animatedLabel = useRef(new Animated.Value(value ? 1 : 0)).current;
  const animatedBorder = useRef(new Animated.Value(isFocused ? 1 : 0)).current;

  const shouldFloatLabel = isFocused || value.length > 0;

  useEffect(() => {
    Animated.timing(animatedLabel, {
      toValue: shouldFloatLabel ? 1 : 0,
      duration: 200,
      useNativeDriver: false,
    }).start();
  }, [shouldFloatLabel]);

  useEffect(() => {
    Animated.timing(animatedBorder, {
      toValue: isFocused ? 1 : 0,
      duration: 250,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [isFocused]);

  const labelStyle = {
    position: "absolute" as const,
    left: 14,
    paddingHorizontal: 4,
    color: "#A1A1A1",
    top: 18,
    fontSize: 16,
    zIndex: 10,
  };

  const containerStyle = {
    borderRadius: 12,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
    borderColor: animatedBorder.interpolate({
      inputRange: [0, 1],
      outputRange: ["#d1d5db", "#000"],
    }),
  };

  return (
    <View className="mb-5 relative">
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
          pickerRef.current?.togglePicker?.();
        }}
        className="h-10 w-10 bg-white rounded-lg items-center justify-center shadow-sm absolute top-4 right-4 z-10"
      >
        <Image source={require("@/assets/arrow.png")} className="rotate-90" />
      </Pressable>
      <Pressable
        onPress={() => {
          Keyboard.dismiss();
          pickerRef.current?.togglePicker?.();
        }}
      >
        <Animated.View style={containerStyle} className="bg-gray100">
          <Animated.Text style={labelStyle} className="bg-gray100">
            {label}
          </Animated.Text>
          <View className="flex-row items-center pt-5">
            <RNPickerSelect
              ref={pickerRef}
              value={value}
              onValueChange={(val) => {
                onChange(val);
                setIsFocused(true);
              }}
              items={options}
              useNativeAndroidPickerStyle={false}
              placeholder={{ label: "Select an option...", value: "" }}
              onOpen={() => setIsFocused(true)}
              onClose={() => setIsFocused(false)}
              Icon={() => <ChevronDown size={20} color="#111" />}
              style={{
                inputIOS: {
                  fontSize: 16,
                  color: "#000",
                  paddingTop: 12,
                  paddingBottom: 4,
                },
                inputAndroid: { fontSize: 16, color: "#000" },
                iconContainer: { display: "none" },
              }}
            />
          </View>
        </Animated.View>
      </Pressable>
      {error && <Text className="text-sm text-red-500 mt-1">{error}</Text>}
    </View>
  );
};

export default Select;

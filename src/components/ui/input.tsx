import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  Text,
  Pressable,
  TextInputProps,
  Animated,
  Easing,
  Keyboard,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import RNPickerSelect from "react-native-picker-select";
import { ChevronDown } from "lucide-react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

type InputProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onClear?: () => void;
  hasClear?: boolean;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  editable?: boolean;
  error?: string;
  type: "text" | "email" | "phone" | "password" | "select" | "date";
  options?: { label: string; value: string }[]; // for select
};

const countryCodes = [
  { label: "+1 (US)", value: "+1" },
  { label: "+44 (UK)", value: "+44" },
  { label: "+90 (TR)", value: "+90" },
  { label: "+49 (DE)", value: "+49" },
];

const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  onClear,
  hasClear = true,
  secureTextEntry = false,
  keyboardType = "default",
  editable = true,
  error,
  type = "text",
}) => {
  // const inputRef = useRef<TextInput>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [countryCode, setCountryCode] = useState("+1");
  const [showDatePicker, setShowDatePicker] = useState(false);

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
    backgroundColor: isFocused ? "#fff" : "#F5F5F5",
    paddingHorizontal: 4,
    color: "#A1A1A1",
    top: 18,
    fontSize: 16,
    zIndex: 10,
  };

  const containerStyle = {
    borderWidth: 2,
    borderRadius: 12,
    paddingTop: 8,
    paddingBottom: 8,
    paddingHorizontal: 16,
    backgroundColor: isFocused ? "#fff" : "#F5F5F5",
    borderColor: isFocused ? "#000" : "#F5F5F5",
  };

  const pickerRef = useRef<RNPickerSelect>(null);

  const inputRef = useRef<TextInput>(null);
  const [isKeyboardOpened, setIsKeyboardOpened] = useState(false);

  useEffect(() => {
    const showSub = Keyboard.addListener("keyboardDidShow", () =>
      setIsKeyboardOpened(true)
    );
    const hideSub = Keyboard.addListener("keyboardDidHide", () =>
      setIsKeyboardOpened(false)
    );

    return () => {
      showSub.remove();
      hideSub.remove();
    };
  }, []);
  return (
    <Pressable
      onPress={() => {
        if (isKeyboardOpened) {
          Keyboard.dismiss();
        } else {
          inputRef.current?.focus();
        }
      }}
    >
      <View className="mb-5">
        <Animated.View style={containerStyle}>
          <Animated.Text style={labelStyle}>{label}</Animated.Text>

          <View className="flex-row items-center mt-1 pt-7">
            {type === "phone" && (
              <View
                style={{
                  width: 90,
                  marginRight: 8,
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Pressable
                  onPress={() => pickerRef.current?.togglePicker?.()}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    flex: 1,
                  }}
                >
                  <RNPickerSelect
                    ref={pickerRef}
                    value={countryCode}
                    onValueChange={setCountryCode}
                    items={countryCodes}
                    useNativeAndroidPickerStyle={false}
                    style={{
                      inputIOS: {
                        fontSize: 16,
                        color: "#000",
                        paddingVertical: 6,
                      },
                      inputAndroid: { fontSize: 16, color: "#000" },
                      iconContainer: { display: "none" },
                    }}
                    Icon={() => null}
                  />
                  <ChevronDown size={20} color="#111" />
                </Pressable>
              </View>
            )}

            {type === "date" ? (
              <>
                <Pressable
                  className="flex-1"
                  onPress={() => editable && setShowDatePicker(true)}
                >
                  <Text className="text-black text-[18px]">
                    {value
                      ? new Date(value).toLocaleDateString()
                      : "Select date"}
                  </Text>
                </Pressable>
                {showDatePicker && (
                  <DateTimePicker
                    value={value ? new Date(value) : new Date()}
                    mode="date"
                    display={Platform.OS === "ios" ? "spinner" : "default"}
                    onChange={(event, selectedDate) => {
                      setShowDatePicker(false);
                      if (selectedDate) {
                        onChangeText(selectedDate.toISOString());
                      }
                    }}
                  />
                )}
              </>
            ) : (
              <TextInput
                className="flex-1 text-black dark:text-white text-[18px]"
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry}
                keyboardType={keyboardType}
                editable={editable}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                placeholderTextColor="#aaa"
                ref={inputRef}
              />
            )}

            {hasClear &&
              value.length > 0 &&
              onClear &&
              type !== "select" &&
              type !== "date" && (
                <Pressable
                  onPress={onClear}
                  hitSlop={10}
                  android_ripple={{ color: "#e5e7eb", borderless: true }}
                  className="ml-2"
                >
                  <Ionicons name="close-circle" size={20} color="#A1A1A1" />
                </Pressable>
              )}
          </View>
        </Animated.View>

        {error && <Text className="text-sm text-red-500 mt-1">{error}</Text>}
      </View>
    </Pressable>
  );
};

export default Input;

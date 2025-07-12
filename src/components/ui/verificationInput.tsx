import React, { useRef, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TextInputKeyPressEventData,
  NativeSyntheticEvent,
  Platform,
  Dimensions,
} from "react-native";

const BOX_COUNT = 4;
const GAP = 12;
const SCREEN_WIDTH = Dimensions.get("window").width;
const TOTAL_GAP = GAP * (BOX_COUNT - 1);
const BOX_WIDTH = (SCREEN_WIDTH - 40 - TOTAL_GAP) / BOX_COUNT; // 40 is horizontal padding/margin

type VerificationCodeInputProps = {
  code: string;
  onChange: (code: string) => void;
  disableKeyboard?: boolean;
};

const VerificationCodeInput: React.FC<VerificationCodeInputProps> = ({
  code = "",
  onChange,
  disableKeyboard,
}) => {
  const inputsRef = useRef<Array<TextInput | null>>([]);
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [activeCode, setActiveCode] = useState<boolean>(false);
  const handleChange = (text: string, index: number) => {
    const digitsOnly = text.replace(/\D/g, "").slice(0, 1);
    const newCode = code.slice(0, index) + digitsOnly + code.slice(index + 1);
    if (newCode.length === BOX_COUNT) {
   
      setActiveCode(true);
    }
    onChange(newCode);

    if (digitsOnly && index < BOX_COUNT - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    e: NativeSyntheticEvent<TextInputKeyPressEventData>,
    index: number
  ) => {
    if (e.nativeEvent.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      justifyContent: "space-between",
      gap: GAP,
    },
    inputBox: {
      height: 80,
      borderRadius: 20,
      backgroundColor: activeCode ? "#EBE0FE" : "#f0f0f0",
      textAlign: "center",
      fontSize: 20,
      fontWeight: "600",
      color: "#000",
      paddingVertical: Platform.OS === "ios" ? 8 : 0,
    },
    inputBoxFocused: {
      borderWidth: 2,
      borderColor: "#000",
      backgroundColor: "#fff",
    },
  });

  return (
    <View style={styles.container}>
      {Array(BOX_COUNT)
        .fill(null)
        .map((_, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputsRef.current[index] = ref)}
            style={[
              styles.inputBox,
              { width: BOX_WIDTH },
              focusedIndex === index && styles.inputBoxFocused,
            ]}
            value={code[index] || ""}
            keyboardType="number-pad"
            maxLength={1}
            onChangeText={(text) => handleChange(text, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onFocus={() => setFocusedIndex(index)}
            onBlur={() => setFocusedIndex(null)}
            autoFocus={index === 0}
            editable={!disableKeyboard}
            secureTextEntry={true}
          />
        ))}
    </View>
  );
};

export default VerificationCodeInput;

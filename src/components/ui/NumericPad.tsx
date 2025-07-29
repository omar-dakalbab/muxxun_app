import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { ScanFaceIcon, Delete } from "lucide-react-native"; // Icons

type Props = {
  onPress: (value: string) => void;
  onBackspace: () => void;
  onFaceID?: () => void;
};

const keys = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

const NumericPad: React.FC<Props> = ({ onPress, onBackspace, onFaceID }) => {
  return (
    <View className="p-4 bg-white rounded-t-3xl">
      {keys.map((row, rowIndex) => (
        <View key={rowIndex} className="flex-row justify-between mb-4">
          {row.map((key) => (
            <TouchableOpacity
              key={key}
              className="w-20 h-20 rounded-full items-center justify-center"
              onPress={() => onPress(key)}
            >
              <Text className="text-2xl font-semibold text-black">{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <View className="flex-row justify-between">
        <TouchableOpacity
          className="w-20 h-20 rounded-full items-center justify-center"
          onPress={onFaceID}
        >
          <ScanFaceIcon size={28} stroke="black" />
        </TouchableOpacity>
        <TouchableOpacity
          className="w-20 h-20 rounded-full items-center justify-center"
          onPress={() => onPress("0")}
        >
          <Text className="text-2xl font-semibold text-black">0</Text>
        </TouchableOpacity>
        <TouchableOpacity
          className="w-20 h-20 rounded-full items-center justify-center"
          onPress={onBackspace}
        >
          <Delete size={28} stroke="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NumericPad;

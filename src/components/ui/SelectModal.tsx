import {
  View,
  Text,
  Pressable,
  Image,
  Modal,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import {
  ArrowLeft,
  Check,
  CircleCheck,
  Icon,
  Search,
} from "lucide-react-native";

export default function SelectModal({
  onPress,
  title = "Select an option",
  options = [
    { label: "Bank Account", value: "bank_account" },
    { label: "Credit Card", value: "credit_card" },
    { label: "Cash", value: "cash" },
    { label: "Other", value: "other" },
  ],
  placeholder = "Select an option",
}: {
  onPress?: () => void;
  title?: string;
  options?: { label: string; value: string }[];
  placeholder?: string;
}) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOptionSelect = (value: string) => {
    if (selectedOption === value) {
      setSelectedOption(null); // Deselect if already selected
    } else {
      setSelectedOption(value); // Select the new option
    }
    // setOpenModal(false);
    // onPress?.();
  };

  return (
    <View className="bg-gray100 p-5 rounded-xl flex items-center flex-row justify-between mb-4 w-full">
      <Text className="text-h5 text-black font-semibold">{title}</Text>
      <Pressable
        className="h-10 w-10 bg-white rounded-lg items-center justify-center shadow-sm"
        onPress={() => setOpenModal(true)}
      >
        <Image
          source={require("@/assets/arrow.png")}
          className="rotate-90 w-4 h-4"
        />
      </Pressable>

      <Modal
        animationType="fade"
        transparent={true}
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        <View className="flex-1 justify-end bg-gray-500">
          <View className="bg-white rounded-t-2xl p-4 w-full h-[90vh]">
            {/* Dash */}
            <Pressable
              onPress={() => {
                setOpenModal(false);
                // onPress?.();
              }}
              className="w-8 h-1 bg-gray-300 rounded-full self-center mb-2"
            ></Pressable>

            {/* Header */}
            <View className="flex-row items-center justify-between mb-4">
              <Pressable
                onPress={() => setOpenModal(false)}
                className="p-2 rounded-full"
              >
                <Text className="text-base text-blue-600">
                  <ArrowLeft />
                </Text>
              </Pressable>
              <Text className="text-lg font-semibold">{title}</Text>
              <View className="w-12" /> {/* Placeholder for spacing */}
            </View>

            {/* Search Bar */}
            <View className="flex-row items-center mb-4 bg-gray100 rounded-lg px-4 py-4 ">
              <Search className="text-gray500" />
              <TextInput
                placeholder="Search..."
                value={searchQuery}
                onChangeText={setSearchQuery}
                className="flex-1 ml-2 text-base text-gray500"
              />
            </View>

            {/* Options */}
            <FlatList
              data={filteredOptions}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <Pressable
                  className="px-4 py-3"
                  onPress={() => handleOptionSelect(item.value)}
                >
                  <View className="flex flex-row items-center justify-between">
                    <View className="flex flex-row items-center gap-5">
                      <View className="w-2 h-1 bg-black" />
                      <Text className="text-h5 font-semibold">
                        {item.label}
                      </Text>
                    </View>
                    <View>
                      {selectedOption === item.value ? (
                        <CircleCheck
                          className="ml-auto text-white"
                          fill={"#000"}
                        />
                      ) : (
                        <CircleCheck
                          className="ml-auto text-transparent"
                          fill={"transparent"}
                        />
                      )}
                    </View>
                  </View>
                  <View className="border-b border-gray-100 py-3 ml-auto w-[90%]" />
                </Pressable>
              )}
              keyboardShouldPersistTaps="handled"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}

import React, {
  useRef,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from "react";
import { View, Text, Pressable, TextInput, Image } from "react-native";
import { ArrowLeft, CircleCheck, Search } from "lucide-react-native";
import {
  BottomSheetModal,
  BottomSheetFlatList,
  BottomSheetBackdrop,
} from "@gorhom/bottom-sheet";

export default function SelectModal({
  title = "Select an option",
  options = [],
  placeholder = "Select an option",
  subTitle = "",
  value,
  onChange,
}: {
  title?: string;
  options?: { label: string; value: string }[];
  placeholder?: string;
  subTitle?: string;
  value?: string;
  onChange?: (value: any) => void;
}) {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  const [selectedOption, setSelectedOption] = useState(value || "");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const snapPoints = useMemo(() => ["80%"], []);
  console.log("Snap points", snapPoints); // Should log ['80%']

  const openSheet = useCallback(() => {
    bottomSheetModalRef.current?.present();

    // scroll to top
    setTimeout(() => {
      bottomSheetModalRef.current?.snapToIndex(1);
    }, 100);
  }, []);

  const handleOptionSelect = (val: string) => {
    const newValue = selectedOption === val ? "" : val;
    setSelectedOption(newValue);
    onChange?.(newValue);
    bottomSheetModalRef.current?.dismiss();
  };

  return (
    <>
      <View className="bg-gray100 p-5 rounded-xl flex items-center flex-row justify-between mb-4 w-full">
        <View className="gap-1 w-4/5">
          {subTitle && <Text className="text-gray700">{subTitle}</Text>}
          <Text className="text-h5 text-black font-semibold">
            {selectedOption || placeholder}
          </Text>
        </View>
        <Pressable
          onPress={openSheet}
          className="h-10 w-10 bg-white rounded-lg items-center justify-center shadow-sm"
        >
          <Image
            source={require("@/assets/arrow.png")}
            className="rotate-90 w-4 h-4"
          />
        </Pressable>
      </View>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        // snapPoints={"80%"}
        keyboardBehavior="interactive"
        enablePanDownToClose
        backdropComponent={(props) => <BottomSheetBackdrop {...props} />}
        snapPoints={snapPoints}
      >
        <View className="flex-1 p-4">
          {/* Header */}
          <View className="flex-row items-center justify-between mb-4">
            <Pressable
              onPress={() => bottomSheetModalRef.current?.dismiss()}
              className="p-2 rounded-full"
            >
              <ArrowLeft />
            </Pressable>
            <Text className="text-lg font-semibold">{title}</Text>
            <View className="w-12" />
          </View>

          {/* Search Bar */}
          <View className="flex-row items-center mb-4 bg-gray100 rounded-lg px-4 py-4">
            <Search className="text-gray500" />
            <TextInput
              placeholder="Search..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              className="flex-1 ml-2 text-base text-gray500"
            />
          </View>

          {/* FlatList */}
          <BottomSheetFlatList
            style={{ flex: 1 }} // ✅ Important
            contentContainerStyle={{ paddingBottom: 24 }}
            data={filteredOptions}
            keyExtractor={(item) => item.value}
            keyboardShouldPersistTaps="handled"
            renderItem={({ item }) => (
              <Pressable
                className="px-4 py-3"
                onPress={() => handleOptionSelect(item.value)}
              >
                <View className="flex-row justify-between items-center">
                  <View className="flex-row items-center gap-5 w-4/5">
                    <View className="w-2 h-1 bg-black" />
                    <Text className="text-h5 font-semibold">{item.label}</Text>
                  </View>
                  {selectedOption === item.value ? (
                    <CircleCheck className="text-black" fill="#000" />
                  ) : (
                    <CircleCheck
                      className="text-transparent"
                      fill="transparent"
                    />
                  )}
                </View>
                <View className="border-b border-gray-100 py-3 ml-auto w-[90%]" />
              </Pressable>
            )}
          />
        </View>
      </BottomSheetModal>
    </>
  );
}

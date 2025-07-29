import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import Animated, { FadeInLeft, FadeOutUp } from "react-native-reanimated";

const EMOJI_OPTIONS = ["❤️", "👍", "😂", "😢", "🙏"];

type Reactions = {
  [emoji: string]: number;
};

export default function ReactionBar() {
  const [selected, setSelected] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  const [reactions, setReactions] = useState<Reactions>({
    "❤️": 200,
    "👍": 0,
    "😂": 0,
    "😢": 0,
    "🙏": 0,
  });

  const toggleEmojiPicker = () => setShowOptions((prev) => !prev);

  const handleSelect = (emoji: string) => {
    setSelected(emoji);
    setReactions((prev) => ({
      ...prev,
      [emoji]: (prev[emoji] || 0) + 1,
    }));
    setShowOptions(false);
  };

  const totalReactions = Object.values(reactions).reduce((a, b) => a + b, 0);

  return (
    <View style={{ paddingVertical: 8, paddingHorizontal: 16 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
          <View className="border border-gray700 p-4 rounded-full">
            {showOptions ? (
              <Animated.View
                entering={FadeInLeft}
                exiting={FadeOutUp}
                style={{ flexDirection: "row", gap: 12 }}
              >
                {EMOJI_OPTIONS.map((emoji) => (
                  <TouchableOpacity
                    key={emoji}
                    onPress={() => handleSelect(emoji)}
                  >
                    <Text style={{ fontSize: 24 }}>{emoji}</Text>
                  </TouchableOpacity>
                ))}
              </Animated.View>
            ) : (
              <TouchableOpacity
                onPress={toggleEmojiPicker}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <Image
                  source={require("@/assets/reaction.png")}
                  style={{ width: 24, height: 24 }}
                />
                <Text style={{ fontSize: 14, color: "#555" }}>React</Text>
              </TouchableOpacity>
            )}
          </View>

          <FlatList
            horizontal
            data={Object.entries(reactions).filter(([_, count]) => count > 0)}
            keyExtractor={([emoji]) => emoji}
            renderItem={({ item }) => (
              <View style={{ marginRight: 8 }}>
                <Text style={{ fontSize: 18 }}>{item[0]}</Text>
              </View>
            )}
            showsHorizontalScrollIndicator={false}
          />

          <Text style={{ fontSize: 14, color: "#666" }}>{totalReactions}</Text>
        </View>
      </View>
    </View>
  );
}

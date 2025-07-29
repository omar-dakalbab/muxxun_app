import React from "react";
import { View, Text, Pressable, Image } from "react-native";
import { File } from "lucide-react-native";

import HeaderNavigation from "@/components/HeaderNavigations";
import Layout from "@/components/layout";
import ContButton from "@/components/ContButton";

const documents = [
  { title: "General T&Cs (version 2)" },
  { title: "Annex 1 (version 5)" },
  { title: "Annex 1 (version 5)" },
  { title: "Annex 1 (version 5)" },
  { title: "Annex 1 (version 5)" },
];

export default function SignApplications({ navigation }: any) {
  const renderDocumentItem = (title: string, index: number) => (
    <View
      key={index}
      className="bg-gray100 p-3 rounded-2xl mb-4 flex-row items-center"
    >
      <File className="text-black" size={24} />
      <Text className="text-gray500 font-semibold text-h5 ml-3">{title}</Text>
      <Pressable
        // onPress={onClick}
        className="h-10 w-10 bg-white rounded-lg items-center justify-center shadow-sm ml-auto"
      >
        <Image source={require("@/assets/arrow.png")} className="rotate-90" />
      </Pressable>
    </View>
  );

  return (
    <View className="flex-1 bg-white">
      <HeaderNavigation title="" />
      <Layout
        footer={
          <ContButton
            title="I agree"
            onPress={() => navigation.navigate("SendSmsScreen")}
            className="w-full"
          />
        }
      >
        {/* Header */}
        <View className="mb-5">
          <Text className="text-black text-h2 font-bold mb-3">Reviews</Text>
          <Text className="text-gray700 text-body">
            Please check the information below to make sure everything is
            correct.
          </Text>
        </View>

        {/* Document List */}
        {documents.map((doc, index) => renderDocumentItem(doc.title, index))}
      </Layout>
    </View>
  );
}

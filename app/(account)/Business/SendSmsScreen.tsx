import React, { useRef, useState } from "react";
import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import PageLayout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import { Button } from "@/components/ui/Button";
import VerificationCodeInput from "@/components/ui/VerificationInput";
import { FileText, MessagesSquare } from "lucide-react-native";
import { router } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";

export default function SendSmsScreen() {
  const { signAppSmsCode, setSignAppSmsCode, isLogin, phoneNumber } =
    useAuthStore();

  const handleCodeChange = (code: string) => {
    setSignAppSmsCode(code);
    if (code.length === 4) {
      Keyboard.dismiss();
    }
  };

  const isPhoneNumberValid = signAppSmsCode && signAppSmsCode.length === 4;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <HeaderNavigation title="" />

          <PageLayout
            title="Enter code from SMS"
            description={
              <Text>
                We sent the code via SMS to{" "}
                <Text className="font-bold">{phoneNumber}</Text>. Enter it below
                to sign the application
              </Text>
            }
            footer={
              <Button
                label="Continue"
                onPress={() => {
                  if (isLogin) {
                    router.push({
                      pathname: "/(auth)/signup/create_passcode_digits",
                    });
                  } else {
                    router.push({
                      pathname: "/(auth)/signup/phone_number_verified",
                    });
                  }
                }}
                disabled={!isPhoneNumberValid}
                variant={isPhoneNumberValid ? "default" : "secondary"}
                size="lg"
              />
            }
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "#000",
                  marginBottom: 8,
                }}
              >
                {phoneNumber}
              </Text>

              <VerificationCodeInput
                code={signAppSmsCode}
                onChange={handleCodeChange}
              />

              <Text
                style={{
                  fontSize: 16,
                  color: "#A1A1A1",
                  margin: 20,
                  textAlign: "center",
                }}
              >
                Resend code to:
              </Text>

              <SendOptions
                title="SMS"
                onPress={() => {
                  console.log("Pressed SMS");
                }}
              />
              <SendOptions
                title="Whatsapp"
                onPress={() => {
                  console.log("Pressed Whatsapp");
                }}
              />
            </ScrollView>
          </PageLayout>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const SendOptions = ({ title, onPress }: any) => (
  <View className="bg-gray100 w-2/3 mt-4 rounded-3xl flex-row items-center justify-between px-6 py-3">
    <View className="flex flex-row items-center">
      <FileText />
      <Text className="text-h5 font-bold ml-3">{title}</Text>
    </View>
    <Pressable
      onPress={onPress}
      className="h-12 w-12 bg-white rounded-lg items-center justify-center border border-gray400 shadow-sm"
    >
      <MessagesSquare />
    </Pressable>
  </View>
);

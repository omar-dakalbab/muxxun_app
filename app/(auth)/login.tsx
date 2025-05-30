import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import PageLayout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import formatPhoneNumber from "@/utils/formatNumber";
import { router } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";

export default function LoginScreen() {
  const { phoneNumber, setPhoneNumber, setIsLogin } = useAuthStore();
  const isPhoneNumberValid = phoneNumber.length >= 5;

  const handleContinue = () => {
    Keyboard.dismiss();
    setIsLogin(true);
    router.push({
      pathname: "/(auth)/signup/phone_verify_code",
    });
  };

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
            title="Login"
            description="We will send you a verification code to this number."
            footer={
              <Button
                label="Continue"
                onPress={handleContinue}
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
              <Input
                label="Mobile number"
                value={phoneNumber}
                onChangeText={(text) => {
                  const formatted = formatPhoneNumber(text);
                  setPhoneNumber(formatted);
                }}
                keyboardType="phone-pad"
                onClear={() => setPhoneNumber("")}
                type="phone"
              />
            </ScrollView>
          </PageLayout>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

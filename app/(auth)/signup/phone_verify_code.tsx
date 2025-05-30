import React from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import PageLayout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import { Button } from "@/components/ui/Button";
import VerificationCodeInput from "@/components/ui/VerificationInput";
import { router } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";

export default function PhoneNumberVerifyCode() {
  const { isLogin, phoneNumber, passcode, setPasscode } = useAuthStore();
  const handleCodeChange = (code: string) => {
    setPasscode(code);
    if (code.length === 4) {
      Keyboard.dismiss();
    }
  };

  const isPhoneNumberValid = passcode && passcode.length === 4;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Adjust based on header
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ flex: 1, backgroundColor: "white" }}>
          <HeaderNavigation title="" />
          <PageLayout
            title="Verify you phone number"
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
              <View className="mb-2">
                <Text className="text-body text-gray500">
                  Please enter the code we sent to
                </Text>
              </View>

              <Text
                style={{
                  fontSize: 16,
                  color: "#000",
                  marginBottom: 20,
                }}
              >
                {phoneNumber}
              </Text>

              <VerificationCodeInput
                code={passcode}
                onChange={handleCodeChange}
              />

              <Text
                style={{
                  fontSize: 16,
                  color: "#A1A1A1",
                  marginTop: 32,
                  textAlign: "center",
                }}
              >
                Didn't get the code?{" "}
                <Text
                  style={{
                    color: "#000",
                    fontWeight: "600",
                  }}
                >
                  Resend it
                </Text>
              </Text>
            </ScrollView>
          </PageLayout>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

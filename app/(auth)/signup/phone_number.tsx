import React, { useRef, useState } from "react";
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
import BottomSheetController, {
  BottomSheetControllerRef,
} from "@/components/BottomSheet";
import Input from "@/components/ui/Input";
import formatPhoneNumber from "@/utils/formatNumber";
import { router } from "expo-router";

export default function PhoneNumberScreen() {
  const bottomSheetRef = useRef<BottomSheetControllerRef>(null);
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [sheetContent, setSheetContent] = useState<React.ReactNode>(null);
  const isPhoneNumberValid = phoneNumber.length >= 5; // Add proper validation as needed
  const handleContinue = () => {
    Keyboard.dismiss();
    router.push({
      pathname: "/(auth)/signup/phone_verify_code",
      params: { phoneNumber }
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
            title="What phone number would you like to use?"
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
            <BottomSheetController
              ref={bottomSheetRef}
              content={sheetContent}
              snapPoints={["80%", "80%"]}
              onChange={(index) =>
                console.log("Sheet index changed to:", index)
              }
            />
          </PageLayout>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

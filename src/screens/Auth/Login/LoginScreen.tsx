import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useRef, useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    View,
} from "react-native";
import PhoneInput from "react-native-phone-number-input";

import BottomSheetController, {
    BottomSheetControllerRef,
} from "@/components/BottomSheet";
import HeaderNavigation from "@/components/HeaderNavigations";
import PageLayout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import formatPhoneNumber from "@/utils/formatNumber";

// Define your stack param list for navigation
type RootStackParamList = {
  PhoneNumberVerifyCode: { phoneNumber: string };
  // Add other screens if needed
};

type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PhoneNumberVerifyCode"
>;

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp>();
  const phoneInputRef = useRef<PhoneInput>(null);
  const bottomSheetRef = useRef<BottomSheetControllerRef>(null);

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [sheetContent, setSheetContent] = useState<React.ReactNode>(null);

  const isPhoneNumberValid = phoneNumber.length >= 5; // Add proper validation as needed

  const handleContinue = () => {
    Keyboard.dismiss();
    navigation.navigate("PhoneNumberVerifyCode", {
      phoneNumber,
      isLogin: true,
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

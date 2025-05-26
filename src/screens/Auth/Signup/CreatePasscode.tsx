import React, { useRef, useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";

import BottomSheetController from "@/components/BottomSheet";
import HeaderNavigation from "@/components/HeaderNavigations";
import PageLayout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import Input from "@/components/ui/input";
import PhoneInput from "react-native-phone-number-input";

export default function CreatePasscode() {
  const navigation = useNavigation();
  const route = useRoute();

  const phoneInputRef = useRef<PhoneInput>(null);
  const bottomSheetRef = useRef(null);

  const [sheetContent, setSheetContent] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isPasswordValid = password.length >= 5;
  const isMatch = password === confirmPassword;
  const canContinue = isPasswordValid && isMatch;

  const handleContinue = () => {
    Keyboard.dismiss();
    navigation.navigate("CreatePasscodeDigits", {
      phoneNumber: route?.params?.dob ?? "", // Fallback if `dob` is undefined
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
            title="Create password"
            description="Create a new password"
            footer={
              <Button
                label="Continue"
                onPress={handleContinue}
                disabled={!canContinue}
                variant={canContinue ? "default" : "secondary"}
                size="lg"
              />
            }
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, marginTop: 50 }}
              keyboardShouldPersistTaps="handled"
            >
              <Input
                label="Password"
                value={password}
                onChangeText={setPassword}
                onClear={() => setPassword("")}
                keyboardType="default"
                type="password"
              />

              <Input
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                onClear={() => setConfirmPassword("")}
                keyboardType="default"
                type="password"
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

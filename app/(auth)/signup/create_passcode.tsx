import React, { useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import { useRoute } from "@react-navigation/native";

import PageLayout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import { Button } from "@/components/ui/Button";
import BottomSheetController from "@/components/BottomSheet";
import Input from "@/components/ui/Input";
import { router } from "expo-router";

export default function CreatePasscode() {
  const route = useRoute();
  const bottomSheetRef = useRef(null);

  const [sheetContent, setSheetContent] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isPasswordValid = password.length >= 5;
  const isMatch = password === confirmPassword;
  const canContinue = isPasswordValid && isMatch;

  const handleContinue = () => {
    Keyboard.dismiss();
    router.push({
      pathname: "/(auth)/signup/create_passcode_digits",
      params: { phoneNumber: route?.params?.phoneNumber },
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
              contentContainerStyle={{ flexGrow: 1 }}
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

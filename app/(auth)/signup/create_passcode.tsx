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
import { router } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";

export default function CreatePasscode() {
  const { password, confirmPassword, setPassword, setConfirmPassword } =
    useAuthStore();

  const isPasswordValid = password.length >= 5;
  const isMatch = password === confirmPassword;
  const canContinue = isPasswordValid && isMatch;

  const handleContinue = () => {
    Keyboard.dismiss();
    router.push({
      pathname: "/(auth)/signup/create_passcode_digits",
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
                value={confirmPassword || ""}
                onChangeText={setConfirmPassword || (() => {})}
                onClear={() => setConfirmPassword && setConfirmPassword("")}
                keyboardType="default"
                type="password"
              />
            </ScrollView>
          </PageLayout>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

import React from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import PageLayout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import VerificationCodeInput from "@/components/ui/VerificationInput";
import NumericPad from "@/components/ui/NumericPad";
import SuccessStatus from "@/components/SuccessStatus";
import { router } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";
import { useModalStore } from "@/store/useModalStore";
import * as LocalAuthentication from "expo-local-authentication";

export default function CreatePasscodeDigits() {
  const { isLogin, smsCode, setSmsCode } = useAuthStore();
  const {
    passcodeSetupModal,
    setPasscodeSetupModal,
    biometricAuthModal,
    setBiometricAuthModal,
  } = useModalStore();

  const handleDigitPress = (digit: string) => {
    const newPasscode = smsCode + digit;
    if (newPasscode.length > 4) return;
    setSmsCode(newPasscode);
    if (newPasscode.length === 4) {
      isLogin
        ? handleLoginPasscode(newPasscode)
        : handleCreatePasscode(newPasscode);
    }
  };

  const handleLoginPasscode = (code: string) => {
    Alert.alert("Logged in", `You are logged in with passcode: ${code}`, [
      {
        text: "OK",
        onPress: () => {
          if (isLogin) {
            router.push({
              pathname: "/(app)",
            });
          } else {
            router.push({
              pathname: "/(account)",
            });
          }
        },
      },
    ]);
  };

  const handleCreatePasscode = (code: string) => {
    Alert.alert(
      "MUXXUS passcode",
      `Are you sure you want to set a passcode that anyone can guess?`,
      [
        {
          text: "Change It",
          style: "cancel",
          onPress: () => setSmsCode(""),
        },
        {
          text: "Continue",
          onPress: () => setPasscodeSetupModal(true),
        },
      ],
      { cancelable: true }
    );
  };

  const handleBackspace = () => {
    setSmsCode(smsCode.slice(0, -1));
  };

  const handleFaceIDToggle = async () => {
    const hasHardware = await LocalAuthentication.hasHardwareAsync();
    const supportedTypes =
      await LocalAuthentication.supportedAuthenticationTypesAsync();
    const isEnrolled = await LocalAuthentication.isEnrolledAsync();

    if (!hasHardware || !isEnrolled || supportedTypes.length === 0) {
      Alert.alert(
        "Biometric not available",
        "Your device does not support Face ID or fingerprint."
      );
      return;
    }

    const result = await LocalAuthentication.authenticateAsync({
      promptMessage: "Authenticate to enable Face ID",
      fallbackLabel: "Use Passcode",
      cancelLabel: "Cancel",
      disableDeviceFallback: false,
    });

    if (result.success) {
      setBiometricAuthModal(true);
    } else {
      Alert.alert("Authentication Failed", "Could not verify your identity.");
    }
  };

  const handleSuccessContinue = () => {
    setPasscodeSetupModal(false);
    if (isLogin) {
      router.push({
        pathname: "/(app)/index",
      });
    } else {
      router.push({
        pathname: "/(auth)/signup/notification_accept",
      });
    }
  };
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 bg-white">
          <HeaderNavigation title="" />
          <PageLayout
            title="Create Passcode"
            description="Use this passcode to log into MUXXUS."
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              keyboardShouldPersistTaps="handled"
            >
              <VerificationCodeInput
                code={smsCode}
                onChange={(e) => setSmsCode(e)}
                disableKeyboard={true}
              />
            </ScrollView>

            <NumericPad
              onPress={handleDigitPress}
              onBackspace={handleBackspace}
              onFaceID={handleFaceIDToggle}
            />

            <SuccessStatus
              visible={passcodeSetupModal}
              setVisible={setPasscodeSetupModal}
              label={`Your passcode has \n been set up`}
              image={require("@/assets/success-bg.png")}
              footer={
                <TouchableOpacity
                  onPress={handleSuccessContinue}
                  className="w-full bg-black py-4 rounded-full"
                >
                  <Text className="text-white text-center text-base font-medium">
                    Continue
                  </Text>
                </TouchableOpacity>
              }
              onExit={() => setPasscodeSetupModal(false)}
            />
            <SuccessStatus
              visible={biometricAuthModal}
              setVisible={setBiometricAuthModal}
              label={`Do you want to set up \n biometric ?`}
              description="XXXXXX"
              image={require("@/assets/success-bg.png")}
              footer={
                <View className="w-full">
                  <TouchableOpacity
                    onPress={handleSuccessContinue}
                    className="w-full bg-black py-4 rounded-full"
                  >
                    <Text className="text-white text-center text-base font-medium">
                      Yes, enable Face ID
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setBiometricAuthModal(false)}
                    className="w-full py-4 rounded-full mt-4"
                  >
                    <Text className="text-black text-center text-base font-medium">
                      Not right now
                    </Text>
                  </TouchableOpacity>
                </View>
              }
              onExit={() => {
                setBiometricAuthModal(false);
                setPasscodeSetupModal(true);
              }}
            />
          </PageLayout>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

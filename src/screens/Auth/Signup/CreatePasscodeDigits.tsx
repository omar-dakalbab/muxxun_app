import React, { useRef, useState } from "react";
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
import { useNavigation, useRoute } from "@react-navigation/native";

import PageLayout from "@/components/layout";
import HeaderNavigation from "@/components/HeaderNavigations";
import BottomSheetController from "@/components/bottom-sheet";
import VerificationCodeInput from "@/components/ui/verificationInput";
import NumericPad from "@/components/ui/numericPad";
import SuccessStatus from "@/components/SuccessStatus";

export default function CreatePasscodeDigits() {
  const bottomSheetRef = useRef(null);
  const [sheetContent, setSheetContent] = useState(null);
  const [passcode, setPasscode] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showFaceID, setShowFaceID] = useState(false);

  const navigation = useNavigation();
  const { params } = useRoute();
  const isLogin = params?.isLogin || false;

  const handleDigitPress = (digit: string) => {
    const newPasscode = passcode + digit;
    if (newPasscode.length > 4) return;

    setPasscode(newPasscode);

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
          // setShowSuccess(true);
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
          onPress: () => setPasscode(""),
        },
        {
          text: "Continue",
          onPress: () => setShowSuccess(true),
        },
      ],
      { cancelable: true }
    );
  };

  const handleBackspace = () => {
    setPasscode(passcode.slice(0, -1));
  };

  const handleFaceIDToggle = () => {
    setShowFaceID(!showFaceID);
    console.log("Face ID triggered");
  };

  const handleSuccessContinue = () => {
    setShowSuccess(false);
    navigation.navigate("NotificationAccept" as never);
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
                code={passcode}
                onChange={() => setPasscode(passcode)}
                disableKeyboard={true}
              />
            </ScrollView>

            <NumericPad
              onPress={handleDigitPress}
              onBackspace={handleBackspace}
              onFaceID={handleFaceIDToggle}
            />

            <BottomSheetController
              ref={bottomSheetRef}
              content={sheetContent}
              snapPoints={["80%", "80%"]}
              onChange={(index) =>
                console.log("Sheet index changed to:", index)
              }
            />

            <SuccessStatus
              visible={showSuccess}
              setVisible={setShowSuccess}
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
              onExit={() => setShowSuccess(false)}
            />

            <SuccessStatus
              visible={showFaceID}
              setVisible={setShowFaceID}
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
                    onPress={() => setShowFaceID(false)}
                    className="w-full py-4 rounded-full mt-4"
                  >
                    <Text className="text-black text-center text-base font-medium">
                      Not right now
                    </Text>
                  </TouchableOpacity>
                </View>
              }
              onExit={() => {
                setShowFaceID(false);
                setShowSuccess(true);
              }}
            />
          </PageLayout>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

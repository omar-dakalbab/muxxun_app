import React, { useRef, useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    View,
} from "react-native";

import BottomSheetController from "@/components/BottomSheet";
import HeaderNavigation from "@/components/HeaderNavigations";
import PageLayout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import VerificationCodeInput from "@/components/ui/verificationInput";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function PhoneNumberVerifyCode() {
  const bottomSheetRef = useRef(null);
  const [sheetContent, setSheetContent] = useState(null);

  const route = useRoute();
  const initialPhoneNumber: string = route.params?.phoneNumber || "";
  const isLogin: boolean = route.params?.isLogin || false;
  const [userPhoneNumber, setUserPhoneNumber] = useState(initialPhoneNumber);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [codeActive, setCodeActive] = useState(false);
  const handleCodeChange = (code: string) => {
    setPhoneNumber(code);
    if (code.length === 4) {
      setCodeActive(true);
      Keyboard.dismiss();
      console.log("Code entered:", code);
    }
  };

  const isPhoneNumberValid = phoneNumber && phoneNumber.length === 4;
  const navigation = useNavigation();
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
            // description={"Please enter the code we sent to"}
            footer={
              <Button
                label="Continue"
                onPress={() => {
                  console.log("Verified and continue");
                  if (isLogin) {
                    navigation.navigate("CreatePasscodeDigits", {
                      phoneNumber: userPhoneNumber,
                      isLogin,
                    });
                  } else {
                    navigation.navigate("PhoneNumberVerified", {
                      phoneNumber: userPhoneNumber,
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
                {userPhoneNumber}
              </Text>

              <VerificationCodeInput
                code={phoneNumber}
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
                Didn’t get the code?{" "}
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

import React, { useRef, useState } from "react";
import {
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TouchableWithoutFeedback,
    View
} from "react-native";

import BottomSheetController from "@/components/BottomSheet";
import HeaderNavigation from "@/components/HeaderNavigations";
import PageLayout from "@/components/layout";
import { Button } from "@/components/ui/Button";
import VerificationCodeInput from "@/components/ui/verificationInput";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
    FileText,
    MessagesSquare
} from "lucide-react-native";

export default function SendSmsScreen() {
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
            title="Enter code from SMS"
            description={
              <Text>
                We sent the code via SMS to{" "}
                <Text className="font-bold">+2250708070605</Text>. Enter it
                below to sign the application
              </Text>
            }
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
              <Text
                style={{
                  fontSize: 16,
                  color: "#000",
                  marginBottom: 8,
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
                  margin: 20,
                  textAlign: "center",
                }}
              >
                Resend code to:
              </Text>

              <SendOptions
                title="SMS"
                onPress={() => {
                  console.log("Pressed SMS");
                }}
              />
              <SendOptions
                title="Whatsapp"
                onPress={() => {
                  console.log("Pressed Whatsapp");
                }}
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

const SendOptions = ({ title, onPress }: any) => (
  <View className="bg-gray100 w-2/3 mt-4 rounded-3xl flex-row items-center justify-between px-6 py-3">
    <View className="flex flex-row items-center">
      <FileText />
      <Text className="text-h5 font-bold ml-3">{title}</Text>
    </View>
    <Pressable
      onPress={onPress}
      className="h-12 w-12 bg-white rounded-lg items-center justify-center border border-gray400 shadow-sm"
    >
      <MessagesSquare />
    </Pressable>
  </View>
);

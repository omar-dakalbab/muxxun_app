import React, { useRef, useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import PageLayout from "../../components/layout";
import HeaderNavigation from "../../components/HeaderNavigations";
import { Button } from "../../components/Button";
import BottomSheetController from "../../components/bottom-sheet";
import Input from "../../components/ui/input";
import PhoneInput from "react-native-phone-number-input";
import { useNavigation } from "@react-navigation/native";

export default function CreatePasscode() {
  const navigation = useNavigation();
  const phoneInputRef = useRef<PhoneInput>(null);
  const bottomSheetRef = useRef(null);
  const [sheetContent, setSheetContent] = useState(null);
  const [dob, setDob] = useState("");
  const isPhoneNumberValid = dob && dob.length >= 5;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0} // Adjust as needed
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
                onPress={() => {
                  Keyboard.dismiss();
                  navigation.navigate("PhoneNumberVerifyCode", {
                    phoneNumber: dob,
                  });
                }}
                disabled={!isPhoneNumberValid}
                variant={isPhoneNumberValid ? "default" : "secondary"}
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
                value={dob}
                onChangeText={setDob}
                keyboardType="default"
                onClear={() => setDob("")}
                type="password"
              />

              <Input
                label="Confirm Password"
                value={dob}
                onChangeText={setDob}
                keyboardType="default"
                onClear={() => setDob("")}
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

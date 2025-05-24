import { View, Text, TouchableOpacity, Alert } from "react-native";
import React from "react";
import SuccessStatus from "@/components/SuccessStatus";

export default function NotificationAccept({ navigation }: any) {
  const [showSuccess, setShowSuccess] = React.useState(true);

  return (
    <View>
      <SuccessStatus
        onExit={() => {
          //   setShowSuccess(false);
        }}
        setVisible={setShowSuccess}
        visible={showSuccess}
        label={`Get instant payment notifications!`}
        description="We can send you instant payment notifications when you spend with your card so you see your payments in real time and your balance is always up to date"
        image={require("@/assets/notification-accept.png")}
        footer={
          <View>
            <TouchableOpacity
              onPress={() => {
                //Don't Allow and Allow
                Alert.alert(
                  "Notifications",
                  "Notifications have been enabled.",
                  [
                    { text: "OK", onPress: () => {} },
                    { text: "Cancel", style: "cancel" },
                  ]
                );
              }}
              className="w-full bg-black py-4 rounded-full z-10"
            >
              <Text className="text-white text-center text-base font-medium">
                Allow notifications
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Login");
              }}
              className="w-full py-4 rounded-full z-10 mt-4"
            >
              <Text className="text-black text-center text-base font-medium">
                Not right now
              </Text>
            </TouchableOpacity>
          </View>
        }
      />
    </View>
  );
}

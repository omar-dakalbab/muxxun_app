import { X } from "lucide-react-native";
import React from "react";
import {
  Modal,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ImageBackground,
} from "react-native";

const { width, height } = Dimensions.get("window");

type Props = {
  visible: boolean;
  setVisible: (visible: boolean) => void;
  label: string;
  footer?: React.ReactNode;
  description?: string;
  image?: any;
  onExit?: () => void;
};

const SuccessStatus: React.FC<Props> = ({
  visible,
  setVisible,
  label,
  footer,
  description,
  image,
  onExit,
}) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      statusBarTranslucent
    >
      <View className="flex-1 bg-white px-6 pt-24 pb-10 relative">
        {/* Close Button */}
        <TouchableOpacity
          onPress={onExit}
          className="absolute top-[60px] left-8 z-20"
        >
          <X size={24} color="#000" />
        </TouchableOpacity>

        {/* Centered Content */}
        <View className="flex-1 items-center justify-center z-10">
          {image && (
            <View
              style={{
                width: width,
                height: height * 0.4,
                justifyContent: "center",
                alignItems: "center",

                overflow: "hidden", // ensures rounded corners apply to the background too
              }}
            >
              <ImageBackground
                source={image} // your background image here
                style={{
                  width: "100%",
                  height: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                resizeMode="cover"
              >
                {/* <Image
                  source={image} // your foreground image
                  style={{
                    width: "80%", // slightly smaller so background is visible
                    height: "80%",
                  }}
                  resizeMode="contain"
                /> */}
              </ImageBackground>
            </View>
          )}

          <Text className="text-2xl font-bold text-center text-black mt-6">
            {label}
          </Text>

          {description && (
            <Text className="text-base text-center text-gray500 mt-4 px-4 mb-4">
              {description}
            </Text>
          )}
        </View>

        {/* Footer */}
        <View className="w-full z-10">{footer}</View>
      </View>
    </Modal>
  );
};

export default SuccessStatus;

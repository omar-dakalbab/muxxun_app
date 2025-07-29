import {
  CameraView,
  CameraType,
  useCameraPermissions,
  Camera,
} from "expo-camera";
import React, { useRef, useState } from "react";
import {
  Button,
  Dimensions,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import * as ImageManipulator from "expo-image-manipulator";
import { router } from "expo-router";

export default function CameraScreen({ navigation }) {
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef(null);
  const [frameLayout, setFrameLayout] = useState(null);
  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="Grant permission" />
      </View>
    );
  }

  // Capture photo function

  async function takePicture() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ quality: 1 });

      const photoAspectRatio = photo.width / photo.height;
      const cropAspectRatio = 4 / 3;

      let cropWidth, cropHeight, originX, originY;

      if (photoAspectRatio > cropAspectRatio) {
        cropHeight = photo.height;
        cropWidth = cropHeight * cropAspectRatio;
        originX = (photo.width - cropWidth) / 2;
        originY = 0;
      } else {
        cropWidth = photo.width;
        cropHeight = cropWidth / cropAspectRatio;

        const trimBottomPx = photo.height * 0.05; // adjust this %
        originY = (photo.height - cropHeight) / 2 - trimBottomPx / 2;
        cropHeight = cropHeight - trimBottomPx;
        originX = 0;
      }
      const cropped = await ImageManipulator.manipulateAsync(
        photo.uri,
        [
          {
            crop: {
              originX,
              originY,
              width: cropWidth,
              height: cropHeight,
            },
          },
        ],
        { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
      );

      // navigation.navigate("DocumentPreviewScreen", { photoUri: cropped.uri });
      router.push({
        pathname: "/(account)/Personal/DocumentPreviewScreen",
        params: { photoUri: cropped.uri },
      });

      if (cameraRef.current) {
        cameraRef.current.pausePreview();
      }
    }
  }

  return (
    <View className="flex-1">
      <CameraView
        style={{ flex: 1, backgroundColor: "black" }}
        facing="back"
        ref={cameraRef}
        zoom={0.1}
      >
        <View className="flex-1 justify-center items-center bg-black opacity-50">
          <View className="justify-evenly mt-24 flex-1 items-center mx-4">
            <View className="items-center mt-24">
              <View>
                <Text className="text-white font-inter-bold font-bold text-3xl mb-8">
                  Front of the card
                </Text>
              </View>
              {/* Square Here Edit!!! */}
              <View className="w-full">
                <View
                  onLayout={(event) => {
                    const { x, y, width, height } = event.nativeEvent.layout;
                    setFrameLayout({ x, y, width, height });
                  }}
                  className="bg-white w-[380px] h-72 border-2 rounded-2xl border-black mb-8"
                />
              </View>
              <View className="w-9/12">
                <Text className="text-white text-center font-inter-bold ">
                  Position all 4 corners of the page clearly in the frame and
                  take a picture.
                </Text>
              </View>
            </View>

            <View className="items-center mt-24">
              <TouchableOpacity onPress={takePicture} className="mb-10">
                <Image source={require("@/assets/shutterIcon.png")} />
              </TouchableOpacity>
              <View>
                <Image source={require("@/assets/Onfido Logo.png")} />
              </View>
            </View>
          </View>
        </View>
      </CameraView>
    </View>
  );
}

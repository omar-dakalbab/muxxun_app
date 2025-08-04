import React, { useRef } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { CameraView } from 'expo-camera';
import { router } from 'expo-router';

export default function TakeSelfieScreen() {
  const cameraRef = useRef(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync({ quality: 1 });
      router.push({
        pathname: "/ProfileDetails",
        params: { photoUri: photo.uri },
      });
    }
  };

  return (
    <View className="flex-1">
      <CameraView
        style={{ flex: 1 }}
        ref={cameraRef}
        facing="front"
        zoom={0}
      >
        <View className="flex-1 justify-end items-center mb-12">
          <TouchableOpacity onPress={takePicture}>
            <Image source={require("@/assets/shutterIcon.png")} />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}
import { CameraView, CameraType, useCameraPermissions, Camera } from 'expo-camera';
import React, { useRef, useState } from 'react';
import { Button, Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import * as ImageManipulator from 'expo-image-manipulator';

export default function BackCameraScreen({ navigation }) {
    const [permission, requestPermission] = useCameraPermissions();
    const cameraRef = useRef(null);

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>We need your permission to show the camera</Text>
                <Button onPress={requestPermission} title="Grant permission" />
            </View>
        );
    }

    // Capture photo function
    
async function takePicture() {
  if (cameraRef.current) {
    const photo = await cameraRef.current.takePictureAsync({ quality: 1 });

    const screen = Dimensions.get('window');

    const viewfinderWidth = 380;
    const viewfinderHeight = 300;

    const cropWidthRatio = viewfinderWidth / screen.width;
    const cropHeightRatio = viewfinderHeight / screen.height;

    const crop = {
      originX: (photo.width - photo.width * cropWidthRatio) / 2,
      originY: (photo.height - photo.height * cropHeightRatio) / 2,
      width: photo.width * cropWidthRatio,
      height: photo.height * cropHeightRatio,
    };

    const cropped = await ImageManipulator.manipulateAsync(
      photo.uri,
      [{ crop }],
      { compress: 1, format: ImageManipulator.SaveFormat.JPEG }
    );

    navigation.navigate('BackDocumentPreviewScreen', { photoUri: cropped.uri });
  }
}

    return (
        <View className='flex-1'>
            <CameraView
                style={{ flex: 1, backgroundColor: 'black' }}
                facing="back"
                ref={cameraRef}
                zoom={0.1}
            >
                <View className='flex-1 justify-center items-center bg-black opacity-50'>
                    <View className='justify-evenly mt-24 flex-1 items-center mx-4'>

                        <View className='items-center mt-24'>
                            <View className='flex-row justify-center'>
                                <Image className='mr-5' source={require('../../assets/back.png')} />
                                <Text className='text-white font-inter-bold font-bold text-3xl mb-8'>Back of the card</Text>
                            </View>
                            {/* Square Here Edit!!! */}
                            <View className='w-full' >
                                    <View  className='bg-white w-[380px] h-72 border-2 rounded-2xl border-black mb-8' />
                            </View>
                            <View className='w-9/12'>
                                <Text className='text-white text-center font-inter-bold '>
                                    Position all 4 corners of the page clearly in the frame and take a picture.
                                </Text>
                            </View>
                        </View>

                        <View className='items-center mt-24'>
                            <TouchableOpacity
                                onPress={takePicture}
                                className='mb-10'
                            >
                                <Image source={require('../../assets/shutterIcon.png')} />
                            </TouchableOpacity>
                            <View>
                                <Image source={require('../../assets/Onfido Logo.png')} />
                            </View>
                        </View>
                    </View>
                </View>
            </CameraView>
        </View>
    );
}

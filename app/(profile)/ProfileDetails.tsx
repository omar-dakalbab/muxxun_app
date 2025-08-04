import React, { useState, useEffect } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
  Alert,
  Platform,
  ActionSheetIOS,
} from 'react-native';
import HeaderNavigation from '@/components/HeaderNavigations';
import { router, useLocalSearchParams } from 'expo-router';
import * as ImagePicker from 'expo-image-picker';
import Input from '@/components/ui/Input';

export default function ProfileDetails() {
  const [imageUri, setImageUri] = useState < string | null > (null);
  const { photoUri } = useLocalSearchParams();

  useEffect(() => {
    if (photoUri && typeof photoUri === 'string') {
      setImageUri(photoUri);
    }
  }, [photoUri]);

  const handleGalleryPick = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!granted) {
      Alert.alert('Permission required', 'Please allow access to media library.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri(result.assets[0].uri);
    }
  };

  const openCamera = () => {
    router.push('/(profile)/TakeSelfieScreen');
  };

  const openImageOptions = () => {
    if (Platform.OS === 'ios') {
      ActionSheetIOS.showActionSheetWithOptions(
        {
          options: ['Take a Selfie', 'Choose from Gallery', 'Cancel'],
          cancelButtonIndex: 2,
        },
        (buttonIndex) => {
          if (buttonIndex === 0) openCamera();
          else if (buttonIndex === 1) handleGalleryPick();
        }
      );
    } else {
      Alert.alert('Profile Photo', 'Choose an option', [
        { text: 'Take a Selfie', onPress: openCamera },
        { text: 'Choose from Gallery', onPress: handleGalleryPick },
        { text: 'Cancel', style: 'cancel' },
      ]);
    }
  };

  return (
    <View className="bg-white flex-1">
      <HeaderNavigation />

      <ScrollView>
        <View className="flex-row justify-between mr-3 ml-6 my-4">
          <View>
            <Text className="text-h1 font-bold">My Profile</Text>
            <Text className="text-h4 text-gray600 mt-1">Personal account</Text>
          </View>

          <View className="w-16 h-16 bg-[#00022D] rounded-full items-center justify-center mr-3 relative">
            <Pressable onPress={openImageOptions}>
              <Image
                className="w-16 h-16 object-cover rounded-full"
                source={imageUri ? { uri: imageUri } : require('@/assets/maria.png')}
              />
            </Pressable>
            <Image
              source={require('@/assets/cameraborder.png')}
              className="w-6 h-6 object-contain absolute -bottom-1 -right-1"
            />
          </View>
        </View>

        <View className="mx-5 mt-5">
          <Input label="First name" value="Salomon" editable={false} />
          <Input label="Last name" value="UXUI" editable={false} />
          <Input label="Date of birth" value="1 Jun 1994" editable={false} />
          <Input label="Country of residence" value="United Kingdom" />
          <Input label="Postcode and City" value="W1W 7LT London" />
          <Input label="Street and number" value="Great Portland Street, 1B" />
          <Input label="Email" value="office@designmesocial.eu" />
        </View>
      </ScrollView>
    </View>
  );
}

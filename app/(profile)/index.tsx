import { Image, Pressable, ScrollView, Text, View, Alert, Platform, ActionSheetIOS } from 'react-native';
import HeaderNavigation from '@/components/HeaderNavigations';
import { router, useLocalSearchParams } from 'expo-router';
import AccountCard from '@/components/ui/AccountCard';
import CardGroup from '@/components/NavCardItem';
import React, { Component, useState, useEffect } from 'react';
import MyAccountsCard from '@/components/MyAccountCard';
import * as ImagePicker from 'expo-image-picker';

const group1 = [
    { title: 'Card confirmation', image: require('@/assets/user.png'), hideAction: true,smallerImage: true, },
    { title: 'Account details', image: require('@/assets/church.png'), route: "/ProfileDetails", hideAction: true,smallerImage: true, },
    { title: 'Transaction history', image: require('@/assets/book.png'), route: "/(transactions)/", hideAction: true,smallerImage: true, },
    { title: 'Documents', image: require('@/assets/document icon.png'), route: "/Documents", hideAction: true,smallerImage: true, },
];

const group2 = [
    { title: 'Devices', image: require('@/assets/tv.png'), hideAction: true,smallerImage: true, },
    { title: 'Privacy', image: require('@/assets/lock.png'), route: "/Privacy", hideAction: true,smallerImage: true, },
    {
        title: 'Face ID',
        image: require('@/assets/faceId.png'),
        showToggle: true,
        smallerImage: true,

    },
    {
        title: 'Hide balances',
        image: require('@/assets/hideEye.png'),
        showToggle: true,
        smallerImage: true,

    },
];
const group3 = [
    { title: 'Languages', image: require('@/assets/world.png'), route: "/Language", hideAction: true,smallerImage: true, },
    { title: 'Help and Support', image: require('@/assets/question.png'), route: "/HelpSupport", hideAction: true,smallerImage: true, },
];
const group4 = [
    { title: 'Privacy policy', image: require('@/assets/document icon.png'), route: "/PrivacyPolicy", hideAction: true,smallerImage: true, },
    { title: 'Term & conditions', image: require('@/assets/document icon.png'), route: "/TermsAndConditions", hideAction: true,smallerImage: true, },
    { title: 'Close account', image: require('@/assets/xcircle.png'), hideAction: true,smallerImage: true, },
    { title: 'Logout', image: require('@/assets/door.png'), hideAction: true,smallerImage: true, },
];

export default function index() {
    const [imageUri, setImageUri] = useState<string | null>(null);
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
        <View className='bg-white flex-1'>
            <HeaderNavigation
                onLeftIconPress={() => {
                    router.push("/(app)/")
                }}
            />

            <ScrollView>
                <View className='flex-row justify-between mx-6 my-4'>
                    <View>
                        <Text className='text-h1 font-bold'>Salomon UIUX</Text>
                        <Text className='text-h4 text-gray600 mt-1'>Personal account</Text>
                    </View>
                    <View className="w-16 h-16 bg-[#00022D] rounded-full items-center justify-center mr-3 relative">
                        <Pressable
                            onPress={openImageOptions}
                        >
                            <Image className="w-16 h-16 object-cover rounded-full"
                                source={imageUri ? { uri: imageUri } : require('@/assets/maria.png')}
                            />
                        </Pressable>

                        {/* Camera icon in bottom right */}
                        <Image
                            source={require("@/assets/cameraborder.png")}
                            className="w-6 h-6 object-contain absolute -bottom-1 -right-1"
                        />
                    </View>
                </View>




                <View className='mx-4 flex justify-between h-52 my-6 border relative border-gray200 rounded-2xl p-4'>
                    <View className='absolute top-5 right-5'><Image className='h-5 w-5 object-contain' source={require("@/assets/cross.png")} /></View>
                    <View className='flex flex-1 justify-end'>
                        <Text className='text-h4 font-bold mb-3'>Create new Safebox</Text>
                        <View className='flex-row justify-between '>
                            <Text className='text-h4 text-gray500'>Set your financial goals and start{'\n'}saving - we’ll do the rest!</Text>
                            <Pressable onPress={() => {
                                router.push("/MyAccounts")
                            }} className=' border border-gray100 rounded-3xl py-3 px-5'><Text className='text-h5 font-semibold'>Open Now</Text></Pressable>
                        </View>
                    </View>
                </View>



                <Text className='mx-4 mt-4 text-h4 text-gray600 '>Profile</Text>

                <CardGroup data={group1} />
                <Text className='mx-4 text-h4 text-gray600 '>Security</Text>
                <CardGroup data={group2} />
                <Text className='mx-4 text-h4 text-gray600 '>General</Text>
                <CardGroup data={group3} />
                <Text className='mx-4 text-h4 text-gray600 '>Legal</Text>
                <CardGroup data={group4} />
                <Text className='mb-4'></Text>





            </ScrollView>


        </View>
    )
}
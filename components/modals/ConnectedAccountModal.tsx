import {
    View,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import SocialMediaModal from './SocialMediaModal';

export default function ConnectedAccountModal({
    visible, onClose
}) {
    const [socialMediaModal, setSocialMediaModal] = useState(false);
    const [titleOfModal, setTitleOfModal] = useState('');
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <SocialMediaModal
                visible={socialMediaModal}
                onClose={() => setSocialMediaModal(false)}
                title={titleOfModal}
            />


           <View className="flex-1 justify-end items-center bg-black/50">
                <View className="bg-white w-full h-[90%] p-5 rounded-t-lg shadow-lg">
                    {/* Header */}
                    <View className="flex-row justify-center items-center pb-4 mb-3 border-b border-gray-200">
                        <Text className="text-lg font-semibold text-center">
                            Connected Accounts
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={onClose}
                        className="absolute top-5 right-5 p-1 rounded-full bg-white border border-gray-300"
                    >
                        <Ionicons name="close" size={20} color="black" />
                    </TouchableOpacity>

                    {/* Form Content */}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View className="border border-modalBackground rounded-[16px] p-4 flex-row justify-between items-center mb-3">
                            <View>
                                <View className="flex-row items-center">
                                    <View className={`w-14 h-14 bg-white rounded-full flex items-center justify-center border-[1px] border-modalBackground`}>
                                        <Ionicons name="logo-instagram" size={24} color="red" />
                                    </View>
                                    <Text
                                        className="text-textDarkColor text-base font-[600] ml-2">
                                        Instagram
                                    </Text>

                                </View>
                                <View className="mt-2 flex-row">
                                    <Text className="text-accountActiveColor font-[400]">Connected </Text>
                                    <Text>@harveyspecterofficial</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => {
                                    setSocialMediaModal(true)

                                    setTitleOfModal("Instagram")
                                }}
                                className="border border-primary bg-primary rounded-[16px] px-6 py-3">
                                <Text className="text-white">Connect</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="border border-modalBackground rounded-[16px] p-4 flex-row justify-between items-center mb-3">
                            <View>
                                <View className="flex-row items-center">
                                    <View className={`w-14 h-14 bg-white rounded-full flex items-center justify-center border-[1px] border-modalBackground`}>
                                        <Ionicons name="logo-tiktok" size={24} color="black" />
                                    </View>
                                    <Text
                                        className="text-textDarkColor text-base font-[600] ml-2">
                                        Instagram
                                    </Text>

                                </View>
                                <View className="mt-2 flex-row">
                                    {/* <Text className="text-accountActiveColor font-[400]">Connected </Text> */}
                                    <Text>Not Connected</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => { }}
                                className="border border-primary bg-primary rounded-[16px] px-6 py-3">
                                <Text className="text-white">Connect</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="border border-modalBackground rounded-[16px] p-4 flex-row justify-between items-center mb-3">
                            <View>
                                <View className="flex-row items-center">
                                    <View className={`w-14 h-14 bg-white rounded-full flex items-center justify-center border-[1px] border-modalBackground`}>
                                        <Ionicons name="logo-youtube" size={24} color="red" />
                                    </View>
                                    <Text
                                        className="text-textDarkColor text-base font-[600] ml-2">
                                        Instagram
                                    </Text>

                                </View>
                                <View className="mt-2 flex-row">
                                    {/* <Text className="text-accountActiveColor font-[400]">Connected </Text> */}
                                    <Text>Not Connected</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => { }}
                                className="border border-primary bg-primary rounded-[16px] px-6 py-3">
                                <Text className="text-white">Connect</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="border border-modalBackground rounded-[16px] p-4 flex-row justify-between items-center mb-3">
                            <View>
                                <View className="flex-row items-center">
                                    <View className={`w-14 h-14 bg-white rounded-full flex items-center justify-center border-[1px] border-modalBackground`}>
                                        <Ionicons name="logo-facebook" size={24} color="blue" />
                                    </View>
                                    <Text
                                        className="text-textDarkColor text-base font-[600] ml-2">
                                        Instagram
                                    </Text>

                                </View>
                                <View className="mt-2 flex-row">
                                    {/* <Text className="text-accountActiveColor font-[400]">Connected </Text> */}
                                    <Text>Not Connected</Text>
                                </View>
                            </View>
                            <TouchableOpacity
                                onPress={() => { }}
                                className="border border-primary bg-primary rounded-[16px] px-6 py-3">
                                <Text className="text-white">Connect</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

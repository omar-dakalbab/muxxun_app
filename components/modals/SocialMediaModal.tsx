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

const Badge = ({ children }) => (
    <View className="bg-gray-200 px-3 py-1 rounded-full mr-2 mb-2">
        <Text className="text-gray-700">{children}</Text>
    </View>
);

export default function SocialMediaModal({ visible, onClose, title }) {
    const [name, setName] = useState('');

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
           <View className="flex-1 justify-end items-center bg-black/50">
                <View className="bg-white w-full h-[90%] p-5 rounded-t-lg shadow-lg">
                    {/* Header */}
                    <View className="flex-row justify-center items-center pb-4 mb-3 border-b border-gray-200">
                        <Text className="text-lg font-semibold text-center">
                            {title}
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
                        {/* Full Name */}
                        <View className="mb-4">
                            <Text className="text-gray-600 mb-1">Instagram Account</Text>
                            <TextInput
                                className="border border-gray-300 p-3 rounded-md"
                                value={name}
                                onChangeText={setName}
                                placeholder='@username'
                            />
                        </View>

                        <View>
                            <Text className="text-gray-600 mb-1">Instagram Informations</Text>
                            <View className="flex-row justify-between">
                                <View className="flex-1 border border-gray-300 p-4 rounded-md mr-2">
                                    <Text className="text-gray-600 text-center">Total Followers</Text>
                                    <Text className="text-gray-600 font-semibold text-center">10K</Text>
                                </View>
                                <View className="flex-1 border border-gray-300 p-4 rounded-md">
                                    <Text className="text-gray-600 text-center">Total Likes</Text>
                                    <Text className="text-gray-600 font-semibold text-center">100</Text>
                                </View>

                            </View>

                            <View className="flex-row justify-between mt-2">
                                <View className="flex-1 border border-gray-300 p-4 rounded-md mr-2">
                                    <Text className="text-gray-600 text-center">Total Reels Viewers</Text>
                                    <Text className="text-gray-600 font-semibold text-center">10K</Text>
                                </View>
                                <View className="flex-1 border border-gray-300 p-4 rounded-md">
                                    <Text className="text-gray-600 text-center">Total Comment</Text>
                                    <Text className="text-gray-600 font-semibold text-center">100</Text>
                                </View>

                            </View>
                            <View className="flex-row justify-between mt-2">
                                <View className="flex-1 border border-gray-300 p-4 rounded-md mr-2">
                                    <Text className="text-gray-600 text-center">Total Share</Text>
                                    <Text className="text-gray-600 font-semibold text-center">10K</Text>
                                </View>
                                <View className="flex-1 border border-gray-300 p-4 rounded-md">
                                    <Text className="text-gray-600 text-center">Total Post</Text>
                                    <Text className="text-gray-600 font-semibold text-center">100</Text>
                                </View>

                            </View>
                        </View>



                        {/* Save Button */}
                        <TouchableOpacity className="bg-indigo-500 p-4 rounded-md items-center mt-4">
                            <Text className="text-white font-semibold">Connect Account</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

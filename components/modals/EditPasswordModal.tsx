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



export default function EditPasswordModal({ visible, onClose }) {

    const [name, setName] = useState('@1234OneTwo3');


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
                           Change Password
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
                            <Text className="text-gray-600 mb-1">Current Password</Text>
                            <TextInput
                                className="border border-gray-300 p-3 rounded-md"
                                value={name}
                                onChangeText={setName}
                            />
                        </View>

                        <View className="mb-4">
                            <Text className="text-gray-600 mb-1">New Password</Text>
                            <TextInput
                                className="border border-gray-300 p-3 rounded-md"
                                value={name}
                                onChangeText={setName}
                            />
                        </View>

                        <View className="mb-4">
                            <Text className="text-gray-600 mb-1">New Password</Text>
                            <TextInput
                                className="border border-gray-300 p-3 rounded-md"
                                value={name}
                                onChangeText={setName}
                            />
                        </View>

                      

                        {/* Save Button */}
                        <TouchableOpacity className="bg-indigo-500 p-4 rounded-md items-center mt-4">
                            <Text className="text-white font-semibold">Save Changes</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

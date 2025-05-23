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
import { Contact, LogOut, MessageSquareWarningIcon, PhoneCall, TriangleAlert, TriangleAlertIcon } from 'lucide-react-native';
import { useNavigation } from '@react-navigation/native';

export default function LogoutModal({
    visible,
    onClose
}) {
    const navigation = useNavigation();
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >
            <View className="flex-1 justify-end items-center bg-black/50">
                <View className="bg-white w-full h-[30%] p-5 rounded-t-lg shadow-lg">
                    <TouchableOpacity
                        onPress={onClose}
                        className="absolute top-5 right-5 p-1 rounded-full bg-white border border-gray-300"
                    >
                        <Ionicons name="close" size={20} color="black" />
                    </TouchableOpacity>
                    <View className="items-center justify-center">
                        <View className="flex-column items-center justify-center mb-4 mt-3 bg-logoutTextColor w-16 h-16 p-4 rounded-full">
                            <LogOut size={24} color="#FF0000" />
                        </View>
                        <Text>
                            Are you sure want to logout?
                        </Text>
                    </View>
                    <View className="flex-row justify-between mt-8">
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate('Login');
                                onClose();
                            }}
                        className="flex-1 bg-buttonLightRed text-white py-3 rounded-lg items-center mr-2">
                            <Text className="text-white font-medium text-sm">Logout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 border border-red-500 text-red-500 py-3 rounded-lg items-center ml-2">
                            <Text className="text-red-500 font-medium text-sm">Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
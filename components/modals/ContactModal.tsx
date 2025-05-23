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
import { Contact, PhoneCall } from 'lucide-react-native';

export default function ContactModal({
    visible,
    onClose
}) {
    const [name, setName] = useState('John Doe');
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
                            Contact Us
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={onClose}
                        className="absolute top-5 right-5 p-1 rounded-full bg-white border border-gray-300"
                    >
                        <Ionicons name="close" size={20} color="black" />
                    </TouchableOpacity>

                    {/* Form Content */}

                    <Text className="text-gray-600 mb-1">
                        You can get in touch with us for any inquiries or support
                        by contacting our team. We’re here to help!
                    </Text>

                    <Text className="text-textDarkColor text-base font-[600] mt-4 mb-2">
                        Customer Services
                    </Text>
                    <View className="border border-modalBackground rounded-[16px] p-4">
                        <View className="flex-row items-center border-b border-modalBackground pb-4 mb-4 border-b-[0.5px]">
                            <View className="mr-4 bg-contactUsIconBg rounded-full p-3">
                                <PhoneCall color={"#000"} />
                            </View>
                            <View>
                                <Text
                                    className="text-gray-600" >
                                    Email
                                </Text>
                                <Text className="text-textDarkColor text-base font-[600]">
                                    info@gmail.com
                                </Text>

                            </View>
                        </View>
                        <View className="flex-row items-center">
                            <View className="mr-4 bg-contactUsIconBg rounded-full p-3">
                                <PhoneCall color={"#000"} />
                            </View>
                            <View>
                                <Text
                                    className="text-gray-600" >
                                    Email
                                </Text>
                                <Text className="text-textDarkColor text-base font-[600]">
                                    info@gmail.com
                                </Text>

                            </View>
                        </View>
                    </View>

                    <Text className="text-textDarkColor text-base font-[600] mt-4 mb-2">
                        Social Media
                    </Text>
                    <View className="border border-modalBackground rounded-[16px] p-4">
                        <View className="flex-row items-center border-b border-modalBackground pb-4 mb-4 border-b-[0.5px]">
                            <View className={`w-12 h-12 mr-4 bg-white rounded-full flex items-center justify-center border-[1px] border-modalBackground`}>
                                <Ionicons name="logo-instagram" size={24} color="red" />
                            </View>
                            <View>
                               
                                <Text className="text-textDarkColor text-base font-[600]">
                                    @inflxr_official
                                </Text>

                            </View>
                        </View>
                        <View className="flex-row items-center border-b border-modalBackground pb-4 mb-4 border-b-[0.5px]">
                            <View className={`w-12 h-12 mr-4 bg-white rounded-full flex items-center justify-center border-[1px] border-modalBackground`}>
                                <Ionicons name="logo-tiktok" size={24} color="black" />
                            </View>
                            <View>
                                
                                <Text className="text-textDarkColor text-base font-[600]">
                                @inflxr_official
                                </Text>

                            </View>
                        </View>
                        <View className="flex-row items-center border-b border-modalBackground pb-4 mb-4 border-b-[0.5px]">
                            <View className={`w-12 h-12 mr-4 bg-white rounded-full flex items-center justify-center border-[1px] border-modalBackground`}>
                                <Ionicons name="logo-youtube" size={24} color="red" />
                            </View>
                            <View>
                               
                                <Text className="text-textDarkColor text-base font-[600]">
                                @inflxr_official
                                </Text>

                            </View>
                        </View>
                        <View className="flex-row items-center">
                            <View className={`w-12 h-12 mr-4 bg-white rounded-full flex items-center justify-center border-[1px] border-modalBackground`}>
                                <Ionicons name="logo-facebook" size={24} color="blue" />
                            </View>
                            <View>
                                
                                <Text className="text-textDarkColor text-base font-[600]">
                                @inflxr_official
                                </Text>

                            </View>
                        </View>
                        
                    </View>




                </View>
            </View>
        </Modal>
    )
}
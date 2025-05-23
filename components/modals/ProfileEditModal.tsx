import {
    View,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Camera } from 'lucide-react-native';

const Badge = ({ children }) => (
    <View className="bg-gray-200 px-3 py-1 rounded-full mr-2 mb-2">
        <Text className="text-gray-700">{children}</Text>
    </View>
);

export default function ProfileEditModal({ visible, onClose }) {
    const [name, setName] = useState('Harvey Specter');
    const [email, setEmail] = useState('harveyspecter_official@gmail.com');
    const [phone, setPhone] = useState('(+123) - 123412341234');
    const [location, setLocation] = useState('Kuwait');

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
                            Edit Profile
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

                        <View className="w-40 h-40 rounded-full mx-auto">
                            <Image
                                source={require('../../assets/Avatar.png')}
                                className="w-40 h-40 rounded-full mx-auto shadow-sm"
                            />
                            <TouchableOpacity className="flex flex-row items-center absolute bottom-2 left-[28%] bottom-[-5px] p-2 rounded-full bg-white border border-gray-300 shadow-sm">
                                <Camera
                                    size={15}
                                    color={'#2B2B2C'}
                                />
                                <Text className="text-textDarkColor ml-2">
                                    Add
                                </Text>
                            </TouchableOpacity>

                        </View>




                        <Text className="text-textDarkColor text-base font-[600] mt-4 mb-2">Profile</Text>
                        <View className="mb-4">
                            <Text className="text-gray-600 mb-1">Full Name</Text>
                            <TextInput
                                className="border border-gray-300 p-3 rounded-md"
                                value={name}
                                onChangeText={setName}
                            />
                        </View>

                        {/* Date of Birth */}
                        <View className="mb-4">
                            <Text className="text-gray-600 mb-1">Date of Birth</Text>
                            <TextInput
                                className="border border-gray-300 p-3 rounded-md bg-gray-100"
                                value="10 / 10 / 1995"
                            />
                        </View>

                        <View className="mb-4">
                            <Text className="text-gray-600 mb-1">Gender</Text>
                            <TextInput
                                className="border border-gray-300 p-3 rounded-md bg-gray-100"
                                value="Male"
                            />
                        </View>

                        {/* Niche */}
                        <Text className="text-textDarkColor text-base font-[600] mt-4 mb-2">Niche</Text>
                        <View className="mb-4 border-b border-gray-200 pb-4">
                            <View className="flex-row flex-wrap">
                                <Badge>Lifestyle</Badge>
                                <Badge>Sport</Badge>
                                <Badge>Fashion</Badge>
                            </View>
                            <TouchableOpacity className="mt-2">
                                <Text className="text-indigo-500">Add more niche</Text>
                            </TouchableOpacity>
                        </View>

                        {/* Contact */}
                        <Text className="text-textDarkColor text-base font-[600] mt-4 mb-2">Contact</Text>
                        <View className="mb-4 border-b border-gray-200 pb-4">
                            <View className="mb-4">
                                <Text className="text-gray-500 mb-1">Email Address</Text>
                                <TextInput
                                    className="border border-gray-300 p-3 rounded-md"
                                    value={email}
                                    onChangeText={setEmail}
                                />
                            </View>
                            <View>
                                <Text className="text-gray-500 mb-1">Phone Number</Text>
                                <TextInput
                                    className="border border-gray-300 p-3 rounded-md"
                                    value={phone}
                                    onChangeText={setPhone}
                                />
                            </View>
                        </View>

                        {/* Location */}
                        <View className="mb-4">
                            <Text className="text-black mb-4 font-[600]">Location</Text>
                            <View className="mb-4">
                                <Text className="text-gray-500 mb-1">Country</Text>
                                <TextInput
                                    className="border border-gray-300 p-3 rounded-md bg-gray-100"
                                    value="Kuwait"
                                    editable={false}
                                />
                            </View>
                            <View>
                                <Text className="text-gray-500 mb-1">City</Text>
                                <TextInput
                                    className="border border-gray-300 p-3 rounded-md"
                                    value={location}
                                    onChangeText={setLocation}
                                />
                            </View>
                        </View>

                        {/* Save Button */}
                        <View className="flex-row justify-between">
                            <TouchableOpacity

                                className="bg-primary flex-1 p-3 rounded-lg mx-2"
                            >
                                <Text className="text-white text-center">Save</Text>
                            </TouchableOpacity>
                            <TouchableOpacity

                                className="flex-1 p-3 rounded-lg mx-2 border-red-500 border text-red-500 bg-white"
                            >
                                <Text className="text-red-500 text-center">Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

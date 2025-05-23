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

const Badge = ({ children, isActive, onPress, className }) => (
    <TouchableOpacity onPress={onPress} className={`px-3 py-1 rounded-full mr-2 mb-2 ${isActive ? 'bg-indigo-500' : 'bg-gray-200'}`}>
        <Text className={`${isActive ? 'text-white' : 'text-gray-700'}`}>{children}</Text>
    </TouchableOpacity>
);

export default function RateCardModal({ visible, onClose }) {
    const [selectedPlatform, setSelectedPlatform] = useState('Instagram');
    const [rates, setRates] = useState({
        Instagram: {
            "Reels Video Post": "$100",
            "Story Photo Post": "$100",
            "Story Video Post": "$100",
            "Live": "$100",
        },
        Tiktok: {
            "Video Post": "$100",
            "Story Post": "$100",
            "Live": "$100",
        },
        Youtube: {
            "Video Post": "$100",
            "Story Post": "$100",
            "Live": "$100",
        },
    });

    const icon = {
        Instagram: {
            name: 'logo-instagram',
            color: 'red',
        },
        Tiktok: {
            name: 'logo-tiktok',
            color: 'black',
        },
        Youtube: {
            name: 'logo-youtube',
            color: 'red',
        },

    };
    const [activePlatform, setActivePlatform] = useState(Object.keys(rates)[0]);

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
                        <Text className="text-lg font-semibold text-center">Rate Card</Text>
                    </View>
                    <TouchableOpacity
                        onPress={onClose}
                        className="absolute top-5 right-5 p-1 rounded-full bg-white border border-gray-300"
                    >
                        <Ionicons name="close" size={20} color="black" />
                    </TouchableOpacity>

                    {/* Platforms */}

                    <View className="mb-4">
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {Object.keys(rates).map((platform, index) => {
                                const isActive = platform === activePlatform;

                                return (
                                    <TouchableOpacity
                                        key={platform}
                                        onPress={() => setActivePlatform(platform)}
                                        className={`flex-row items-center p-1 pr-4 mr-4 rounded-full border 
                    ${isActive ? "bg-primary border-primary" : "bg-white border-gray-300"}`}
                                    >
                                        <View className="p-2 rounded-full flex items-center justify-center mr-2 border border-gray-300 bg-white">
                                            <Ionicons name={icon[platform].name} size={24} color={icon[platform].color} />
                                        </View>
                                        <Text className={isActive ? "text-white" : "text-gray-700"}>
                                            {platform}
                                        </Text>
                                    </TouchableOpacity>
                                );
                            })}
                        </ScrollView>
                    </View>


                    {/* Rate Inputs */}
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {Object.entries(rates[selectedPlatform] || {}).map(([label, value]) => (
                            <View key={label} className="mb-4">
                                <View
                                    className="flex-row items-center mb-2"
                                >
                                    <View className="w-10 h-10 rounded-full flex items-center justify-center mr-2 border border-gray-300">
                                        <Ionicons name={icon[selectedPlatform].name} size={24} color={
                                            icon[selectedPlatform].color
                                        } />
                                    </View>
                                    <Text className="text-textDarkColor font-[600]">

                                        {selectedPlatform} - {label}</Text>
                                </View>
                                <TextInput
                                    className="border border-gray-300 p-3 rounded-md"
                                    value={value}
                                    onChangeText={(text) => {
                                        setRates((prev) => ({
                                            ...prev,
                                            [selectedPlatform]: {
                                                ...prev[selectedPlatform],
                                                [label]: text,
                                            },
                                        }));
                                    }}
                                />
                            </View>
                        ))}
                    </ScrollView>

                    {/* Save and Cancel Buttons */}
                    <View className="flex-row justify-between mt-[auto] border-t border-gray-200 pt-4">
                        <TouchableOpacity className="bg-indigo-500 flex-1 p-3 rounded-md items-center mr-2">
                            <Text className="text-white font-semibold">Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onClose} className="border border-red-500 flex-1 p-3 rounded-md items-center ml-2">
                            <Text className="text-red-500 font-semibold">Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
}

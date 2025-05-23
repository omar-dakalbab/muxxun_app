import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react'
import LoadingImage from '../assets/loading.png';

export default function Loading() {
    return (
        <View className="flex items-center justify-center">
            <Image
                source={LoadingImage}
                className="mt-20 mb-4"
            />
            <Text className="text-center text-gray-500">
                You don’t have awaiting{"\n"}

                to acceptance campaign
            </Text>

            <TouchableOpacity className="border border-primary bg-primary rounded-[8px] px-3 py-2 mx-2 mt-5">
                <Text className="text-white font-semibold text-center text-white">
                    Optimize Your Profile
                </Text>
            </TouchableOpacity>
        </View>
    )
}
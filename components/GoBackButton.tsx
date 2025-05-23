import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { ChevronLeft } from 'lucide-react-native'

export default function GoBackButton({
    onPress
}) {
    return (
        <TouchableOpacity className="w-8 h-8 rounded-full overflow-hidden"
            onPress={onPress}
        >
            <LinearGradient
                colors={[
                    "rgba(204, 201, 242, 0.03)",
                    "rgba(225, 224, 247, 0.5)",
                    "rgba(180, 175, 236, 0.05)",
                    "rgba(204, 201, 242, 0.3)",
                    "rgba(255, 255, 255, 0.3)",
                    "rgba(204, 201, 242, 0.58)",
                ]}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="w-full h-full flex items-center justify-center"
            >
                <View className="w-full h-full items-center justify-center rounded-full border border-gray-200 flex items-center justify-center">
                    <ChevronLeft color="#717273" />
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}
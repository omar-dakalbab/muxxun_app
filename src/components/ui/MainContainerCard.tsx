import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { ChevronRight, UserPlus } from 'lucide-react-native'

export default function MainContainerCard({
    title,
    description,
    icon = <UserPlus size={20} color="#1F2937" />,
    onPress,
}: {
    title?: string,
    description?: string,
    icon?: React.ReactNode,
    onPress?: () => void,
}) {
    const handlePress = () => {
        if (onPress) {
            onPress()
        }
    }

    return (
        <Pressable
            onPress={handlePress}
            className="flex-row justify-between items-center bg-gray-100 border border-gray-100 rounded-xl px-4 py-4 mb-3"
        >
            <View className="flex-row items-start space-x-3">
                {icon}
                <View>
                    <Text className="text-h5 font-semibold text-black">
                        {title}
                    </Text>
                    {description && <Text className="text-footnote text-gray600 mt-2">
                        {description}
                    </Text>}
                </View>
            </View>
            <View className="flex-row items-center space-x-2 bg-white rounded-lg px-2 py-2 border border-gray300">
                <ChevronRight size={20} color="#000" />
            </View>
        </Pressable>
    )
}

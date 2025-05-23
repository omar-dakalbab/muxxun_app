import { View, Text } from 'react-native'
import React from 'react'

export default function Badge({
    children
}) {
    return (
        <View className="bg-borderColor px-3 py-1 rounded-full mr-2">
            <Text className="text-gray-700 text-xs font-semibold">{children}</Text>
        </View>
    )
}
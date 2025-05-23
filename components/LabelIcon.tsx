import { View, Text } from 'react-native'
import React from 'react'
import CircularIcon from './CircularIcon'

export default function LabelIcon({
    Icon, label, size
}) {
    return (
        <View className="flex-row items-center mb-3">
            <CircularIcon Icon={Icon} size={size} />
            <Text className={
                `text-gray-600 ${size === "small" ? "font-normal" : "font-bold"}`
            }>
                {label}
            </Text>
        </View>
    )
}
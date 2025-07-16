import React, { useState, useRef } from 'react'
import { View, Text, Pressable, Animated } from 'react-native'
import { Eye, EyeClosed } from 'lucide-react-native'

export default function TotalBalance() {
    const amount = 1234.56
    const currency = '£'
    const decimals = 2

    const [visible, setVisible] = useState(true)
    const fadeAnim = useRef(new Animated.Value(1)).current

    const formattedAmount = visible
        ? amount.toFixed(decimals)
        : '*'.repeat(amount.toFixed(decimals).length)

    const handleToggle = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start(() => {
            setVisible(v => !v)
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 200,
                useNativeDriver: true,
            }).start()
        })
    }

    return (
        <View className="px-8 py-4">
            <Text className="text-footnote text-gray700">Total Balance</Text>

            <View className="flex-row items-center pt-2">
                <Animated.Text
                    className="text-4xl font-extrabold text-[#C4C4C4] mr-2"
                    style={{ opacity: fadeAnim }}
                >
                    {currency}
                </Animated.Text>

                <Animated.Text
                    className="text-4xl font-extrabold text-black"
                    style={{ opacity: fadeAnim }}
                >
                    {formattedAmount}
                </Animated.Text>

                <Pressable onPress={handleToggle} className="ml-2">
                    {visible ? (
                        <Eye size={24} color="#000" />
                    ) : (
                        <EyeClosed size={24} color="#000" />
                    )}
                </Pressable>
            </View>
        </View>
    )
}

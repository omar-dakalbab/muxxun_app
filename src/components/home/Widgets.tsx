import { PlusCircleIcon } from "lucide-react-native"
import React, { useEffect, useRef, useState } from "react"
import {
    View,
    Text,
    Image,
    ImageBackground,
    Animated,
    Easing,
    useWindowDimensions,
    TouchableOpacity,
} from "react-native"

type Props = {
    scrollY: Animated.Value
}

export default function Widgets({ scrollY }: Props) {
    const [widgetTop, setWidgetTop] = useState<number | null>(null)
    const [hasAnimated, setHasAnimated] = useState(false)
    const fadeAnim = useRef(new Animated.Value(0)).current
    const countAnim = useRef(new Animated.Value(0)).current
    const [count, setCount] = useState(0)
    const { height: windowHeight } = useWindowDimensions()
    useEffect(() => {
        if (hasAnimated || widgetTop === null) return
        const id = scrollY.addListener(({ value }) => {
            if (value + windowHeight >= widgetTop + 50) {
                setHasAnimated(true)
            }
        })
        return () => scrollY.removeListener(id)
    }, [scrollY, widgetTop, windowHeight, hasAnimated])
    useEffect(() => {
        if (!hasAnimated) return

        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            easing: Easing.out(Easing.ease),
            useNativeDriver: true,
        }).start()
        Animated.timing(countAnim, {
            toValue: 1211,
            duration: 1000,
            easing: Easing.out(Easing.quad),
            useNativeDriver: false,
        }).start()
        const listener = countAnim.addListener(({ value }) => {
            setCount(Math.floor(value))
        })
        return () => countAnim.removeListener(listener)
    }, [hasAnimated])


    return (
        <Animated.View
            onLayout={e => {
                setWidgetTop(e.nativeEvent.layout.y)
            }}
            style={{
                opacity: fadeAnim,
                transform: [{
                    translateY: fadeAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [20, 0],
                    })
                }]
            }}
            className="px-4 py-2"
        >
            <View className="flex flex-row justify-between items-center mb-2 px-2">
                <Text className="text-lg font-semibold mb-4">Widgets</Text>
                {/* <Text className="text-lg font-semibold mb-4 px-2">
                    <PlusCircleIcon className="text-gray-500" />
                </Text> */}
            </View>
            <View className="flex flex-row flex-wrap justify-between">
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        transform: [
                            {
                                translateY: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 0],
                                }),
                            },
                        ],
                    }}
                    className="w-[48%] mb-4"
                >
                    <View
                        style={{ aspectRatio: 1 }}
                        className="bg-white p-4 rounded-2xl border border-gray-200 flex flex-col justify-between"
                    >
                        <Text className="text-h4 font-semibold text-gray-800">
                            Expenses in Jul
                        </Text>
                        <View>
                            <View className="items-start mb-4">
                                <Text className="text-2xl font-bold text-black">
                                    <Text className="text-[#CCCCCC]">£ </Text>
                                    {count.toLocaleString()}
                                </Text>
                                <Text className="text-sm font-bold text-[#1EB835] mt-1">
                                    -£145 (12%) ▼
                                </Text>
                            </View>
                            <View className="flex-row items-center space-x-1">
                                <View className="h-2 bg-[#F75C31] rounded-tl-2xl rounded-bl-2xl flex-1" />
                                <View className="h-2 bg-[#1EB835] flex-[0.75]" />
                                <View className="h-2 bg-primary flex-[0.5]" />
                                <View className="h-2 bg-[#E02BB9] rounded-tr-2xl rounded-br-2xl flex-[0.25]" />
                            </View>
                        </View>
                    </View>
                </Animated.View>
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        transform: [
                            {
                                translateY: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 0],
                                }),
                            },
                        ],
                    }}
                    className="w-[48%] mb-4"
                >
                    <ImageBackground
                        source={require('@/assets/widget-bg.png')}
                        resizeMode="cover"
                        style={{ aspectRatio: 1 }}
                        className="rounded-2xl overflow-hidden p-4"
                        imageStyle={{ borderRadius: 16 }}
                    >
                        <Text className="text-xl font-bold text-white">
                            My cards
                        </Text>
                    </ImageBackground>
                </Animated.View>
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        transform: [
                            {
                                translateY: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 0],
                                }),
                            },
                        ],
                    }}
                    className="w-[48%] mb-4"
                >
                    <View
                        style={{ aspectRatio: 1 }}
                        className="bg-gray100 rounded-2xl p-4 flex flex-col justify-between"
                    >
                        <View className="flex-row items-start justify-between">
                            <Text className="text-lg font-bold text-gray-800">
                                Invite{'\n'}and earn!
                            </Text>
                            <Image
                                source={require('@/assets/flash-icon.png')}
                                className="w-28 h-28 absolute top-[-27px] right-[-20px]"
                                resizeMode="contain"
                            />
                        </View>
                        <Text className="text-lg font-normal text-gray700">
                            Refer MUXXUS to your friends and earn rewards
                        </Text>
                    </View>
                </Animated.View>
                <Animated.View
                    style={{
                        opacity: fadeAnim,
                        transform: [
                            {
                                translateY: fadeAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [20, 0],
                                }),
                            },
                        ],
                    }}
                    className="w-[48%] mb-4"
                >
                    <View
                        style={{ aspectRatio: 1 }}
                        className="bg-white p-4 rounded-2xl border border-gray-200 flex flex-col justify-between"
                    >
                        <Text className="text-base font-medium text-gray-800">
                            You have{' '}
                            <Text className="text-gray-500 font-semibold">$0.00</Text> in
                            scheduled deposits every month
                        </Text>
                        <Text className="text-sm text-gray-500">0 paychecks</Text>
                        <TouchableOpacity className="bg-white border border-gray-300 px-6 py-2 rounded-full self-start">
                            <Text className="text-md font-semibold text-gray-800">
                                Manage
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            </View>
        </Animated.View>
    )
}

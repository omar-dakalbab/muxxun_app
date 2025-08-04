import BottomBar from '@/components/BottomBar'
import HeaderNavigation from '@/components/HeaderNavigations'
import AccountCard from '@/components/ui/AccountCard'
import { router } from 'expo-router'
import { Copy } from 'lucide-react-native'
import React, { Component } from 'react'
import { Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native'

const applicantData = [
    { label: "Card owner", value: "Salomon" },
    { label: "Card number", value: "******************" },
    { label: "Accout number", value: "832498713948" },
    { label: "BIC", value: "ISSUED IN UNITED KINGDOM" },

];

const renderCard = (data) => (
    <View className="bg-gray100 p-4 rounded-2xl my-6 mx-4">
        {data.map((item, index) => (
            <View
                key={index}
                className="flex-row items-center justify-between"
                style={{ marginBottom: index === data.length - 1 ? 0 : 16 }}
            >
                <View>
                    <Text className="text-gray500 text-footnote">{item.label}</Text>
                    <Text className="text-black font-semibold text-h5">
                        {item.value}
                    </Text>
                </View>
                <Pressable className="p-3 border border-gray400 bg-white rounded-lg items-center justify-center shadow-sm">
                    <Copy className="text-gray-500 rotate-90" size={18} />
                </Pressable>
            </View>
        ))}
    </View>
);
export class CardDetails extends Component {
    render() {
        return (
            <View className='flex-1 bg-white'>
                <HeaderNavigation title='Card details' />
                <ScrollView>
                    <View className="items-center justify-center mt-8">
                        <ImageBackground
                            source={require('@/assets/cardgradient.png')}
                            className="w-full h-64 justify-center items-center blur-lg overflow-hidden"
                            resizeMode="cover"
                        >
                            <Pressable onPress={() => { router.push("/CardDetails") }}>
                                <Image
                                    source={require('@/assets/card.png')} // Your foreground card image
                                    className="w-96 resize-contain"
                                />
                            </Pressable>
                        </ImageBackground>
                    </View>

                    <View className='mt-5 mx-6'>
                        <Text className='font-bold text-h4 mb-2'>Security notice</Text>
                        <View className='flex-row justify-between'>
                            <Text className='font-bold text-captionL text-gray400 mb-2'>Your card details are sensitive infomations. Never share{'\n'}and other and be careful when using them online.</Text>
                            <Text className='font-bold text-h5 mb-2'>Plus</Text>
                        </View>
                    </View>

                    <View className='mt-5'>
                        <Pressable className='flex-row p-3 justify-center items-center border border-gray200 rounded-3xl mx-5 '>
                            <Image source={require("@/assets/blind.png")} className='mr-1' />
                            <Text className='text-h5 font-semibold'>Show sensitive data</Text>
                        </Pressable>
                    </View>

                    {renderCard(applicantData)}
                </ScrollView>
            </View>

        )
    }
}

export default CardDetails

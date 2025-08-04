import ColorPicker from '@/components/ColorPicker'
import HeaderNavigation from '@/components/HeaderNavigations'
import { Button } from '@/components/ui/Button'
import { router } from 'expo-router'
import React, { Component } from 'react'
import {  Image, Text, View } from 'react-native'

export class Virtual extends Component {
    render() {
        return (
            <View className='bg-white flex-1 justify-between'>
                <HeaderNavigation />
                <View>
                <View className='flex items-center justify-center'>
                    <Image source={require("@/assets/cardBig.png")} />
                </View>
                <View className='text-center items-center'>
                    <Text className='font-semibold text-h3-bold mb-4'>Virtual credit card</Text>
                    <Text className='text-center text-gray500 text-h4-semibold'>Create your own virtual card to manage your{'\n'}online payments and never worry about losing it.</Text>
                </View>
                <View className='mt-12 mx-3'>
                    <ColorPicker />
                </View>
                </View>

                <View className='mx-5 pb-16'>
                    <Button label='Continue' onPress={() => {
                        router.push("/NameCard")
                    }} />
                </View>
            </View>
        )
    }
}

export default Virtual

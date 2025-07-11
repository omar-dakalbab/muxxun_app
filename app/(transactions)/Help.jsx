import { Image, Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import HeaderNavigation from '@/components/HeaderNavigations';

export class Help extends Component {
    render() {
        return (
            <View className='h-full bg-white'>
                <HeaderNavigation title='Help' />
                <View className='flex justify-between mx-6 items-center mt-6'>
                    <Image className='h-12 w-12 mb-4 object-cover rounded-full' source={require("@/assets/photo.png")} />
                    <Text className='text-h1 mb-3 font-bold'>-$250</Text>
                    <Text className='text-footnote text-gray600'>Transfer to Martin Franci</Text>
                </View>

                <View className='mx-5 mt-8'>
                    <Text className='text-gray500 text-footnote font-semibold'>Select an issue</Text>

                </View>

                <View className='bg-gray100 p-6 rounded-2xl mx-4 mt-5'>
                    <Pressable>
                        <View className='flex-row justify-between mb-8'>
                            <Text className='text-h5 font-bold'>Making changes to this transfer</Text>
                            <Image source={require("@/assets/arrow.png")} />
                        </View>
                    </Pressable>
                    <Pressable>
                        <View className='flex-row justify-between mb-8'>
                            <Text className='text-h5 font-bold'>Status of this transfer</Text>
                            <Image source={require("@/assets/arrow.png")} />
                        </View>
                    </Pressable>
                    <Pressable>
                        <View className='flex-row justify-between mb-8'>
                            <Text className='text-h5 font-bold'>Canellations and refunds</Text>
                            <Image source={require("@/assets/arrow.png")} />
                        </View>
                    </Pressable>
                    <Pressable>
                        <View className='flex-row justify-between '>
                            <Text className='text-h5 font-bold'>Understanding fees & rates</Text>
                            <Image source={require("@/assets/arrow.png")} />
                        </View>
                    </Pressable>

                </View>
            </View>
        )
    }
}

export default Help;
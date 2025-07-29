import { Image, Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import HeaderNavigation from '@/components/HeaderNavigations'
import ToggleInput from '@/components/ToggleInput'
import { router, useLocalSearchParams } from 'expo-router'


export class transcationInfo extends Component {
    render() {
        const { isTransaction } = useLocalSearchParams();
        return (
            <View className='h-full bg-white'>
                <HeaderNavigation
                    onLeftIconPress={() => { isTransaction ? router.push("/(app)") : router.back() }}
                    title='To Martin Franci'
                    rightIcon={<Image source={require("@/assets/Questio Circle.png")} />}
                    onRightIconPress={() => { router.push("(transactions)/Help") }}
                />
                <View className='flex-row justify-between mx-6 items-center mt-6'>
                    <View className='flex'>
                        <Text className='text-h1 font-bold'>-$250</Text>
                        <Text className='text-footnote text-gray600'>Transfer to Martin Franci</Text>
                    </View>
                    <View>
                        <Image className='h-12 w-12 object-cover rounded-full' source={require("@/assets/photo.png")} />
                    </View>
                </View>
                <View className='bg-gray100 p-6 rounded-2xl mx-4 mt-7'>
                    <View className='flex-row justify-between mb-8'>
                        <Text className='text-gray700'>Status</Text>
                        <Text className='text-h5 font-bold'>Completed</Text>
                    </View>
                    <View className='flex-row justify-between mb-8'>
                        <Text className='text-gray700'>Statement</Text>
                        <Pressable><Text className='text-h5 font-bold text-primary'>Download</Text></Pressable>
                    </View>
                    <View className='flex-row justify-between '>
                        <Text className='text-gray700'>Card</Text>
                        <Text className='text-h5 font-bold'>** 4405</Text>
                    </View>
                </View>
                <View className='bg-gray100 p-6 rounded-2xl mx-4 mt-4'>
                    <View className='flex-row justify-between '>
                        <Text className='text-gray700'>Note</Text>
                        <Pressable><Text className='text-h5 font-bold text-primary'>Add</Text></Pressable>
                    </View>
                </View>
                <View className='flex-row p-5 mt-4 border-gray100 border mx-4 rounded-xl'>
                    <Pressable>
                        <View className='mr-2'>
                            <Image source={require("@/assets/document icon.png")} />
                        </View>
                        <View className='flex'>
                            <Text className='mb-1 text-primary font-bold text-footnote'>Add receipt</Text>
                            <Text className='text-gray600'>PDF, JPEG, or PNG less than 10MB</Text>
                        </View>
                    </Pressable>
                </View>
                <View className='bg-gray100 p-6 rounded-2xl mx-4 mt-5'>
                    <View className='flex-row justify-between mb-8'>
                        <Text className='text-gray700'>Money received</Text>
                        <Text className='text-h5 font-bold'>$250,00</Text>
                    </View>

                    <View className='flex-row justify-between '>
                        <Text className='text-gray700'>Our fee</Text>
                        <Text className='text-h5 font-bold'>$0,50</Text>
                    </View>
                </View>

                <View className='mx-4 mt-5'>
                    <ToggleInput title='Hide from Insights' />
                </View>

            </View>
        )
    }
}

export default transcationInfo
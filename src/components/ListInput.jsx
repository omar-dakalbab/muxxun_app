import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ListInput({
    imageSource = require('../assets/master.png'),
    title,
    desc = 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    navigation,
    NavigateTo,
}) {

    return (
        <View className='h-24 flex-row  items-start bg-[#F5F5F5]  mx-4 p-6 rounded-2xl mt-4'>

            <View>
                <Image className='h-4 w-4 mt-1 mr-3' source={imageSource} />
            </View>

            <View className='mr-28'>
                <Text className='text-xl font-inter-bold font-semibold mb-2'>{title}</Text>
                <Text className='text-lg font-inter leading-[24px] max-w-58 text-gy'>xxxxxxxxxxxxxxxxxxxxxxxxxxx</Text>
            </View>

            <View>
                <Pressable onPress={() => navigation.navigate(NavigateTo)} className='h-12 w-12 bg-white rounded-lg items-center justify-center'>
                    <Image source={require('../assets/arrow.png')} />
                </Pressable>
            </View>

        </View>
    )
}
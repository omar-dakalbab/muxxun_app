import React, { useState } from 'react';
import { View, Text, Pressable, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Input({
    title,
    mainClassName = 'h-24 bg-[#F5F5F5]  mx-4 p-5 rounded-2xl mt-4',
    image = require('../assets/master.png'),
    inputClassName = 'flex-row mt-2 items-center justify-between',
    showImage = true,
}) {
    return (
        <View className={mainClassName}>
            <Text className='text-gy'>{title}</Text>
            <View className={inputClassName}>
                <TextInput className='flex-1 h-fit text-xl  text-black font-bold' />
                {showImage && (
                    <Image source={image} className='' />
                )}
            </View>
        </View>
    )
}
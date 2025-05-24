import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function TaskInput({
    MainClass =' h-20 bg-[#F5F5F5] flex flex-row justify-between items-center mx-4 p-6 rounded-2xl mt-4',
    TextClass = 'text-2xl font-inter-bold font-semibold',
    ButtonClass = 'h-10 w-10 bg-white rounded-lg items-center justify-center',
    Title,

    ImageSource = require('../assets/master.png'),
}) {

    return (
        <View className={MainClass}>
            <Text className={TextClass}>{Title}</Text>
            <View>
                <Pressable className={ButtonClass}>
                    <Image source={ImageSource} />
                </Pressable>
            </View>
        </View>
    )
}
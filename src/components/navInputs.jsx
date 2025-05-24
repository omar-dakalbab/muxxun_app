import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function Navinputs({
    navigation,
    navigateTo = '',
    title = 'Company Type',
    titleclass = 'mr-28',
    textClassName = 'text-xl font-inter-bold font-semibold mb-2',
    textDescriptionClassName = 'text-lg font-inter leading-[24px] max-w-58 text-gy',
    description = 'xxxxxxxxxxxxxxxxxxxxxxxxxxx',
    imageSource = require('../assets/car.png'),
    imageClassName = 'h-4 w-4 mt-1 mr-3',
    arrowImage = require('../assets/arrow.png'),
    arrowImageButton = 'h-10 w-10 bg-white rounded-lg items-center justify-center',

}) {
    return (
        <View className='h-24 flex-row  items-start bg-[#F5F5F5]  mx-4 p-6 rounded-2xl mt-4'>

            <View>
                <Image className={imageClassName} source={imageSource} />
            </View>

            <View className={titleclass}>
                <Text className={textClassName}>{title}</Text>
                <Text className={textDescriptionClassName}>{description}</Text>
            </View>

            <View>
                <Pressable className={arrowImageButton} onPress={() => navigation.navigate({navigateTo})}>
                    <Image source={arrowImage} />
                </Pressable>
            </View>

        </View>
    )
}
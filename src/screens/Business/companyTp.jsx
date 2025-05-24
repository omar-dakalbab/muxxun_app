import React from 'react';
import { View, Text, Pressable, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContButton from '@/components/ContButton';

export function CompanyTp({ navigation }) {
    return (
        <View className='bg-white flex-1 '>
            <View className='mt-5 mx-5 mb-3'>
                <Text className="text-pb font-inter-bold mb-3 text-4xl font-bold w-3/4">Company type</Text>
                <Text className='text-gy text-xl w-4/5 font-inter'>xxxxxxxxxx xxxxxx xxxxxxxx xxxxxxxx xxxxxxx xxxxxxxxx xx xxxxxxxxxx</Text>
            </View>
            <View className="flex justify-between flex-1">
                <View className='h-20 bg-[#F5F5F5] flex flex-row justify-between items-center mx-4 p-6 rounded-2xl mt-12'>
                    <View>
                        <Text className='text-gy'>Company type</Text>
                        <Text className='text-2xl font-inter-bold font-semibold '>Regulated financial institution</Text>
                    </View>
                    <View className='justify-betwee'>
                        <Pressable className='h-10 w-10 bg-white rounded-lg items-center justify-center'>
                            <Image source={require('../../assets/master.png')} />
                        </Pressable>
                    </View>
                </View>



                <View>
                    <ContButton />
                </View>
            </View>
        </View>

    )
}
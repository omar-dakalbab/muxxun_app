import React from 'react';
import { View, Text, Pressable, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContButton from '@/components/ContButton';
import Input from '@/components/input';

export default function CountryAndnm({ navigation }) {
    return (
        <View className='bg-white flex-1 '>
            <View className='mt-5 mx-5 mb-3'>
                <Text className="text-pb font-inter-bold mb-3 text-4xl font-bold w-3/4">Country and Name</Text>
                <Text className='text-gy text-xl w-4/5 font-inter'>xxxxxxxxxx xxxxxx xxxxxxxx xxxxxxxx xxxxxxx xxxxxxxxx xx xxxxxxxxxx x xxxxxxx</Text>
            </View>
            <View className="flex justify-between flex-1">
                <View>
                    <Input 
                    title={'Company name'}
                    image={require('../../assets/x.png')}
                    />

                    <View className='h-20 bg-[#F5F5F5] flex flex-row justify-between items-center mx-4 p-6 rounded-2xl mt-6'>

                    </View>
                </View>

                <View>
                    <ContButton />
                </View>
            </View>
        </View>
    );
}
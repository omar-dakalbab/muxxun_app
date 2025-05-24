import React from 'react';
import { View, Text, Pressable, Image, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContButton from '@/components/ContButton';
import Input from '@/components/input';


export default function Address({ navigation }) {
    return (
        <View className='bg-white flex-1 '>
            <View className='mt-5 mx-5 mb-3'>
                <Text className="text-pb font-inter-bold mb-3 text-4xl font-bold w-3/4">Company address</Text>
                <Text className='text-gy text-xl w-4/5 font-inter'>Registered address</Text>
            </View>
            <View className='flex justify-between flex-1'>
                <View>
                    <View className='h-20 bg-[#F5F5F5] flex flex-row justify-between items-center mx-4 p-6 rounded-2xl mt-4'>
                        <View>
                            <Text className='text-gy'>Country</Text>
                        </View>
                        <View className='justify-betwee'>
                            <Pressable className='h-10 w-10 bg-white rounded-lg items-center justify-center'>
                                <Image source={require('../../assets/master.png')} />
                            </Pressable>
                        </View>
                    </View>

                    <Input title={'City'} showImage={false} />
                    <Input title={'Postal code'} showImage={false} />
                    <Input title={'Address line 1'} showImage={false} />
                    <Input title={'Address line 2'} showImage={false} />

                </View>

                <View>
                    <ContButton

                    />
                </View>
            </View>

        </View>
    )
}
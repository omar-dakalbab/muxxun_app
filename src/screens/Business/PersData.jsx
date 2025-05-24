import React from 'react';
import { View, Text, Pressable, Image, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Input from '@/components/input';
import ContButton from '@/components/ContButton';
import ToggleInput from '@/components/toggleInput';



export default function PersData({ navigation }) {
    return (
        <View className='bg-white flex-1 '>
            <View className='flex justify-between flex-1'>
                <ScrollView>
                    <View>
                        <View className='mt-5 mx-5 mb-3'>
                            <Text className="text-black font-inter-bold mb-3 text-4xl font-bold w-3/4">Personal Data</Text>
                            <Text>Personal Data of the Main Representative</Text>
                        </View>

                        <Input title={'First Name'} showImage={false} />

                        <Input title={'Last Name'} />

                        <Input title={'E-mail'} showImage={false} />

                        <Input title={'Date of birth (DD/MM/YYYY)'} showImage={false} />

                        <Input title={'Nationality'} />

                        <View>
                            <Text>Your position in the company</Text>
                            <Input title={'Position'} showImage={false} />
                            <ToggleInput title={'I own shares of the company'}
                                className={'h-20 bg-gl shadow-sm shadow-gray-300 flex flex-row justify-between items-center mx-4 px-6  rounded-2xl mt-4'}
                            />
                        </View>
                    </View>
                </ScrollView>
                <View className=''>
                    <ContButton />
                </View>
            </View>
        </View>
    )
}
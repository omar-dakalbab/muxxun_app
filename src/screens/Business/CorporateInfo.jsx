import React from 'react';
import { View, Text, Pressable, Image, TextInput, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ContButton from '@/components/ContButton';
import Input from '@/components/input';
import ListInput from '@/components/ListInput';

export default function CorporateInfo({ navigation }) {
    return (
        <View className='bg-white flex-1 '>
            <View className='mt-5 mx-5 mb-3'>
                <Text className="text-pb font-inter-bold mb-3 text-4xl font-bold w-3/4">Company address</Text>
                <Text className='text-gy text-xl w-4/5 font-inter'>xxxxxxxxxx xxxxx xx xxxxxxx xxxxx x.</Text>
            </View>
            <View className='flex justify-between flex-1'>
                <ScrollView className='mb-14'>
                    <View>
                        <Input title={'Date'} />
                        <Input title={'Company Number'} showImage={false} />
                        <ListInput title={'SIC code'} />
                        <ListInput title={'country'} />
                        <Input title={'Address line 2'} showImage={false} />
                        <View className='mx-4 mt-4'>
                            <Text className='text-black'>Add one more SIC</Text>
                        </View>
                        <Input title={'Business license (optional)'} showImage={false} />
                        <Input title={'Link to the website'} showImage={false} />
                        <Input title={'Remittance destination countries'} showImage={false} />
                        <View className='mx-4 mt-4'>
                            <Text className='text-black'>Add one more</Text>
                        </View>
                        <Input title={'Business description'} showImage={false} />
                    </View>
                </ScrollView>

                <View>
                    <ContButton />
                </View>
            </View>

        </View>
    );
}
import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import ListInput from '@/components/ListInput';


export default function Business1({ navigation }) {
    return (

        <View className='bg-white flex-1 '>
            <StatusBar hidden={false} />
            <View className='mt-5 mx-5 mb-3'>
                <Text className="text-black font-inter-bold mb-3 text-4xl font-bold w-3/4">Create new business account</Text>
                <Text className='text-gy text-xl w-3/4 font-inter'>Complete step by step</Text>
            </View>

            <View className='mx-5 mt-5 mb-6'>
                <Text className='font-inter-bold text-xl font-semibold'>Method of verification</Text>
            </View>
            <ScrollView>
                <ListInput
                    title={'Company type'}
                    navigation={navigation}
                    NavigateTo={'companyTp'}

                />
                <ListInput
                    title={'Country and Name'}
                    navigation={navigation}
                    NavigateTo={'CountryAndnm'}
                />
                <ListInput
                    title={'Personal Data'}
                    navigation={navigation}
                    NavigateTo={'PersData'}
                />
                <ListInput
                    title={'Identity Verification'}
                    navigation={navigation}
                    NavigateTo={'IdentityVerification'}
                    imageSource={require('../../assets/car.png')}
                />
                <ListInput
                    title={'User T&C'}
                    navigation={navigation}
                    NavigateTo={''}
                    imageSource={require('../../assets/car.png')}


                />
                <ListInput
                    title={'Address'}
                    navigation={navigation}
                    NavigateTo={'Address'}
                    imageSource={require('../../assets/car.png')}
                />
                <ListInput
                    title={'Corporate information'}
                    navigation={navigation}
                    NavigateTo={'CorporateInfo'}
                    imageSource={require('../../assets/car.png')}
                />
                <ListInput
                    title={'Operations activity'}
                    navigation={navigation}
                    NavigateTo={''}
                    imageSource={require('../../assets/car.png')}
                />
                <ListInput
                    title={'Services'}
                    navigation={navigation}
                    NavigateTo={''}
                    imageSource={require('../../assets/car.png')}
                />
                <ListInput
                    title={'COF'}
                    navigation={navigation}
                    NavigateTo={''}
                    imageSource={require('../../assets/car.png')}
                />
                <ListInput
                    title={'Add documents'}
                    navigation={navigation}
                    NavigateTo={''}
                    imageSource={require('../../assets/car.png')}
                />
                <ListInput
                    title={'Sign'}
                    navigation={navigation}
                    NavigateTo={''}
                    imageSource={require('../../assets/car.png')}
                />














            </ScrollView>
            <View className='w-full px-6 pt-12'>
                <Pressable className='bg-white w-full h-20 rounded-full items-center justify-center'>
                    <Text className='text-black font-semibold text-xl font-inter-bold'>Skip for now</Text>
                </Pressable>
            </View>




        </View>

    )
}
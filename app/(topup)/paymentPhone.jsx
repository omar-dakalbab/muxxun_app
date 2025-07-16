import {
    Pressable, Text, View, Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native'
import React, { Component } from 'react'
import HeaderNavigation from '@/components/HeaderNavigations'
import { Button } from '@/components/ui/Button'
import { router } from 'expo-router'
import Input from '@/components/ui/input'

export class paymentPhone extends Component {
    render() {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            >
                <View className='bg-white flex justify-between h-full'>
                    <HeaderNavigation />
                    <View className='mx-6 mt-6'>
                        <View>
                            <Text className='text-h1 font-bold mb-3'>What phone number {"\n"}would you like to use?</Text>
                            <Text className='mb-6 text-gray700 text-body-medium'>We will send you a verification code to {"\n"}this number.</Text>
                        </View>
                        <View>
                            <Input value='125215 12512' type='phone' label='Mobile number' />
                        </View>
                    </View>
                    <View className='pb-6 mx-3'>

                        <Button label='continue' onPress={() => {
                            router.push({ pathname: "/(app)" });
                        }} />
                    </View>

                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default paymentPhone;
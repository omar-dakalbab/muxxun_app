import {
    KeyboardAvoidingView, Text, View, Keyboard,
    Platform,
    ScrollView,
    TouchableWithoutFeedback,
} from 'react-native'
import React, { Component } from 'react'
import HeaderNavigation from '@/components/HeaderNavigations'
import { router } from 'expo-router'
import AccountCard from '@/components/ui/AccountCard'
import Input from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

export class credit extends Component {
    render() {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                keyboardVerticalOffset={Platform.OS === "ios" ? 100 : 0}
            >
                <View className='bg-white h-full justify-between'>
                    <HeaderNavigation />
                    <View>
                        <View>
                            <Text className='text-h1 mx-6 font-bold mb-3'>Card in your name</Text>
                            <Text className=' mx-7 mb-6 text-gray700 text-body'> Processed securely by PCI DSS</Text>
                        </View>
                        <View className='mx-5'>
                            <View>
                                <Input label='Card number' type='text' value='0000 0000 0000 0000' />
                            </View>
                            <View className='justify-between flex-row '>
                                <View className="flex-1 mr-2">
                                    <Input label='Expiry date' type='date' value='2' />
                                </View>
                                <View className="flex-1">
                                    <Input label='CVV' type='text' value='' />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View className='pb-8 mx-4' >
                        <Button onPress={() => {
                            router.push({
                                pathname: "/(topup)/SuccessPage/",
                                params: {
                                    title: "Success top up",
                                    description: "You paid 15.29 GBP to have 10 GBP",
                                },
                            });
                        }} label='Continue' />
                    </View>
                </View>
            </KeyboardAvoidingView>
        )
    }
}

export default credit
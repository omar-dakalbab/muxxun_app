import HeaderNavigation from '@/components/HeaderNavigations'
import { Button } from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { router } from 'expo-router'
import React, { Component } from 'react'
import {
    Text,
    View,
    KeyboardAvoidingView,
    ScrollView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard
} from 'react-native'

export class NameCard extends Component {
    render() {
        return (
            <KeyboardAvoidingView
                className='flex-1 bg-white'
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 0}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <ScrollView
                        contentContainerStyle={{ flexGrow: 1 }}
                        keyboardShouldPersistTaps='handled'
                    >
                        <View className='flex-1 justify-between'>
                            <HeaderNavigation />
                            <View>
                                <Text className='mt-8 mx-5 text-h1 font-bold'>Name your card</Text>
                                <View className='mx-4 mt-5'>
                                    <Input
                                        label='Your card name'
                                        value='as'
                                        limitedCancel={true}
                                        maxLength={20}
                                        type="text"
                                    />
                                </View>
                            </View>
                            <View className='pb-8 mx-3'>
                                <Button
                                    label='Create your card'
                                    onPress={() => {
                                        router.push('/CardSuccess')
                                    }}
                                />
                            </View>
                        </View>
                    </ScrollView>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        )
    }
}

export default NameCard

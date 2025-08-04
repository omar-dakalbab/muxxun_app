import HeaderNavigation from '@/components/HeaderNavigations'
import { Button } from '@/components/ui/Button'
import React, { Component } from 'react'
import {
    KeyboardAvoidingView,
    Platform,
    Text,
    TextInput,
    View,
    ScrollView
} from 'react-native'

export class ChatUs extends Component {
    render() {
        return (
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: 'white' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0} // Adjust as needed for header
            >
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View>
                        <HeaderNavigation />

                        <Text className='text-h1 font-bold mx-6 mt-5'>Let's take care of this</Text>

                        <Text className="mx-6 mt-3 text-h4 text-gray500">
                            Tell us as much as you can about the {'\n'}problem, and we’ll make sure to get you {'\n'}to the right person.
                        </Text>

                        <TextInput
                            className="h-52 bg-gray100 rounded-2xl mx-6 my-8 p-4 text-base"
                            placeholder="Message"
                            placeholderTextColor="#9ca3af"
                            multiline
                            textAlignVertical="top"
                        />
                    </View>

                    <View className='mx-4 pb-8'>
                        <Button label='Start chat' />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        )
    }
}

export default ChatUs

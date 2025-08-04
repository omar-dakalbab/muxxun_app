import HeaderNavigation from '@/components/HeaderNavigations'
import { Button } from '@/components/ui/Button'
import { router } from 'expo-router'
import React, { Component } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

export class CreatePage extends Component {
    render() {
        return (
            <View className='bg-white justify-between flex-1'>
                <HeaderNavigation />
                <View >
                <ImageBackground source={require("@/assets/vpbg.png")}
                    className="w-full h-96 justify-center items-center  mt-10 overflow-hidden"
                    resizeMode="cover" />
                <View>
                    <Text className='text-4xl mt-8 text-center font-bold'>Create your own virtual {'\n'}or physical MUXXUS {'\n'}card</Text>
                    <Text className='text-h4-semibold text-gray400 mt-6 text-center font-semibold'>Customizable design, no hidden {'\n'}fees,instant discount debit or credit card.</Text>
                </View>
                </View>

                <View className='mx-5 pb-12'>
                    <Button label='Continue' onPress={() => {
                        router.push("/OrderCard")
                    }}/>
                </View>
            </View>
        )
    }
}

export default CreatePage

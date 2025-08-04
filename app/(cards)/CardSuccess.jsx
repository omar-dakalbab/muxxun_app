import HeaderNavigation from '@/components/HeaderNavigations'
import { Button } from '@/components/ui/Button'
import { router } from 'expo-router'
import React, { Component } from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'

export class CardSuccess extends Component {
    render() {
        return (
            <View className='bg-white justify-between flex-1'>
                <HeaderNavigation />

                {/* ImageBackground wraps image + text */}
                <ImageBackground
                    source={require("@/assets/Vector 414.png")}
                    className="w-full mt-5  justify-center items-center overflow-hidden"
                    resizeMode="cover"
                >
                    <Image
                        source={require("@/assets/cardBig.png")}
                        className=""
                        resizeMode="contain"
                    />

                    <View className="px-6">
                        <Text className='text-4xl text-center font-bold'>
                            Your virtual credit {'\n'}card is ready!
                        </Text>
                        <Text className='text-h4-semibold text-gray400 mt-6 text-center font-semibold'>
                            Start spending safely. Add your virtual {'\n'}card to Apple Pay for easy shopping.
                        </Text>
                    </View>
                </ImageBackground>

                <View className='mx-5 pb-10 mt-10'>
                    <Button className='' label='Add to Apple Wallet'
                        leftIcon={<Image className='object-contain' source={(require("@/assets/IOS_WALLET.png"))} />}
                    onPress={() => {
                        router.push("/OrderCard")
                    }} />
                    <Button variant='secondary' label='Continue' onPress={() => {
                        router.push("/OrderCard")
                    }} />
                </View>
            </View>
        )
    }
}

export default CardSuccess

import { Image, Pressable, Text, View } from 'react-native'
import React, { Component } from 'react'
import HeaderNavigation from '@/components/HeaderNavigations'
import CurrencyInput from '@/components/CurrencyInput'
import { Button } from '@/components/ui/Button'
import { router } from 'expo-router'

export class index extends Component {
    render() {
        return (
            <View className='bg-white h-full justify-between'>
                <HeaderNavigation />
                <View>
                    <View className='mt-4 mx-6'>
                        <Text className='text-h1  font-bold mb-3'>How much do you want to convert?</Text>
                    </View>
                    <View className="relative my-4 mx-4">
                        {/* Top currency input */}
                        <CurrencyInput caption="You have 500 GBP available" />

                        {/* Swap button (centered between) */}
                        <View className="absolute left-[70%] -translate-x-1/2 top-[70px] z-10">
                            <Pressable className="p-3 rounded-xl bg-white shadow items-center justify-center">
                                <Image source={require("@/assets/updown.png")} className="w-6 h-6" />
                            </Pressable>
                        </View>

                        {/* Bottom currency input */}
                        <CurrencyInput
                            highlighted={true}
                            caption="Amount after conversion"
                            onCurrencyChange={(currency) => console.log("Selected:", currency)}

                        />
                    </View>
                    <View className='mt-4 flex flex-row justify-between items-center mx-8'>
                        <Text className='text-gray700 text-footnote font-semibold'>Convert fee</Text>
                        <Text className='text-black text-h5 font-semibold'>0.0 GBP</Text>
                    </View>
                    <View className='mt-6 flex flex-row justify-between items-center mx-8'>
                        <Text className='text-gray700 text-footnote font-semibold'>Our fee</Text>
                        <Text className='text-primary text-h5 font-semibold'>0.0 GBP</Text>
                    </View>
                    <View className='mt-6 flex flex-row justify-between items-center mx-8'>
                        <Text className='text-gray700 text-footnote font-semibold'>Guaranteed rate</Text>
                        <View className='flex-row justify-between'>
                            <Image source={require("@/assets/chart histogram.png")} />
                            <Text className='text-primary text-h5 ml-3 font-semibold'>0.0 GBP</Text>
                        </View>
                    </View>
                </View>
                <View className='pb-10 mx-5'>
                    <Button label='Sell GBP' onPress={() => {
                        router.push({ pathname: "/exchangeDetail" });
                    }} />
                </View>
            </View>
        )
    }
}

export default index
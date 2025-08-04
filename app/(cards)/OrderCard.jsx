import HeaderNavigation from '@/components/HeaderNavigations'
import AccountCard from '@/components/ui/AccountCard'
import { router } from 'expo-router'
import React, { Component } from 'react'
import { Image, ImageBackground, Pressable, Text, View } from 'react-native'

export class OrderCard extends Component {
    render() {
        return (
            <View className='flex-1 bg-white'>
                <HeaderNavigation />
                <Text className='font-bold text-4xl mt-5 mx-5'>
                    Order a card
                </Text>

                <View className='flex-row items-center text-center mx-5 mt-6'>
                    <Pressable className='p-3 bg-gray100 w-32 rounded-3xl text-center items-center'><Text className='font-semibold text-h5'>Debit card</Text></Pressable>
                    <Pressable className='p-3  w-32 rounded-3xl text-center items-center'><Text className='font-bold text-gray500 text-h5'>Credit card</Text></Pressable>
                </View>


                <View className='mx-5 mt-4'>
                    <AccountCard title='Physical debit card' description='Spend globally, with no exchange rates' icon={require("@/assets/leftcarphy.png")} onClick={() => { router.push("/PhysicalCard") }} fullHeightIcon={true} />
                    <AccountCard title='Virtual debit card' description={'Spend online right away, no \nwait, no hassle'} icon={require("@/assets/leftcarvir.png")} onClick={() => { router.push("/Virtual") }} fullHeightIcon={true} />
                </View>



                <View className='mx-5 mt-8'>
                    <ImageBackground source={require("@/assets/gradientcard.png")}
                        className="w-full  rounded-xl  overflow-hidden"
                        resizeMode="cover"

                    >
                        <View className='mt-5 rounded-lg'>
                            <View className='flex-col p-6'>
                                <Text className='text-h1 mb-5 text-gray100 font-bold'>New {'\n'}Exchange {'\n'}cards!</Text>
                                <Pressable className='bg-white items-center rounded-3xl p-4 w-32' ><Text className='text-h5'>Order Now</Text></Pressable>
                            </View>
                        </View>
                    </ImageBackground>
                </View>

            </View>
        )
    }
}

export default OrderCard

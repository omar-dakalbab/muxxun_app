import BottomBar from '@/components/BottomBar'
import HeaderNavigation from '@/components/HeaderNavigations'
import AccountCard from '@/components/ui/AccountCard'
import { router } from 'expo-router'
import { Copy } from 'lucide-react-native'
import React, { Component } from 'react'
import { Image, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native'

export class ManageCard extends Component {
    render() {
        return (
            <View className='flex-1 bg-white'>
                <HeaderNavigation title='Card details' />
                <ScrollView>
                    <View className="items-center justify-center mt-6">
                        <ImageBackground
                            source={require('@/assets/cardgradient.png')} 
                            className="w-full h-64 justify-center items-center blur-lg overflow-hidden"
                            resizeMode="cover"
                        >
                            <Pressable onPress={() => { router.push("/CardDetails") }}>
                                <Image
                                    source={require('@/assets/card.png')} // Your foreground card image
                                    className="w-96 resize-contain"
                                />
                            </Pressable>
                        </ImageBackground>

                    </View>
                    <View className='mx-6 mt-2 pb-16'>
                        <Text className='mt-5 mb-3 text-gray500'>Card settings</Text>
                        <AccountCard title='Freez card' whiteBg={true} alignTopIcon={true} onClick={() => { router.push("/ManageCard") }} description='Temporaly block your card' icon={require("@/assets/document icon.png")} />
                        <AccountCard title='Card pin' onClick={() => { router.push("/ManageCard") }} description='Update your card pin' icon={require("@/assets/credit card.png")} alignTopIcon={true} />
                        <AccountCard title='Order replacement' onClick={() => { router.push("/ManageCard") }} description='Request a new physical' icon={require("@/assets/church.png")} alignTopIcon={true} hideAction={true} />
                        <Text className='mt-6 mb-3 text-gray500'>Payment settings</Text>
                        <AccountCard title='Payment limite' onClick={() => { router.push("/ManageCard") }} description='You can request help now' icon={require("@/assets/chatt.png")} alignTopIcon={true} hideAction={true} />
                        <AccountCard title='Payment online' onClick={() => { router.push("/ManageCard") }} description='You can freeze your card' icon={require("@/assets/freeze.png")} alignTopIcon={true} hideAction={true} />
                        <AccountCard title='Card details' onClick={() => { router.push("/ManageCard") }} description='You can freeze your card' icon={require("@/assets/freeze.png")} alignTopIcon={true} hideAction={true} />
                        <Text className='mt-6 mb-3 text-gray500'>Security</Text>
                        <AccountCard title='Transactions notification'  onClick={() => { router.push("/ManageCard") }} description='Get alert for card activities' icon={require("@/assets/freeze.png")} alignTopIcon={true} hideAction={true} />
                        <AccountCard title='Location-based security' onClick={() => { router.push("/ManageCard") }} description='Only allow transactions in your area' icon={require("@/assets/freeze.png")} alignTopIcon={true} hideAction={true} />
                    </View>
                </ScrollView>
            </View>

        )
    }
}

export default ManageCard

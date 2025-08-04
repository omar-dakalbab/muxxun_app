import HeaderNavigation from '@/components/HeaderNavigations'
import AccountCard from '@/components/ui/AccountCard'
import { router } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class CallUs extends Component {
    render() {
        return (
            <View className='flex-1 bg-white'>
                <HeaderNavigation />
                <Text className='text-h1 font-bold mx-6 mt-5'>Call us</Text>

                <Text className="mx-6 mt-10  text-h5 text-gray500">
                    Personal accounts
                </Text>

                <View className='mx-4'>
                    <AccountCard title='+44 612 4613 500' description='Mon-Fri, 08:00-16:00,  GMT' icon={require("@/assets/Flag.png")} fullHeightIcon={true}  onClick={() => {
                        router.push("/ChatUs")
                    }} />
                </View>


                <Text className="mx-6 mt-5  text-h5 text-gray500">
                    Business accounts
                </Text>

                <View className='mx-4'>
                    <AccountCard title='+44 612 4612 700' description='Mon-Fri, 08:00-16:00,  GMT' icon={require("@/assets/Flag.png")} fullHeightIcon={true} onClick={() => {
                        router.push("/ChatUs")
                    }} />
                </View>


            </View>
        )
    }
}

export default CallUs

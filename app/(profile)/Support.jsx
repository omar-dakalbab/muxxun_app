import HeaderNavigation from '@/components/HeaderNavigations'
import AccountCard from '@/components/ui/AccountCard'
import { router } from 'expo-router'
import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class Support extends Component {
    render() {
        return (
            <View className='flex-1 bg-white'>
                <HeaderNavigation />
                <Text className='text-h1 font-bold mx-6 mt-5'>Talk to our team</Text>

                <Text className="mx-5 mt-10  text-h5 text-gray500">
                    Recommended
                </Text>

                <View className='mx-5'>
                    <AccountCard onClick={() => {
                        router.push("/ChatUs")
                    }} title='Chat with is' description='We Will reply in 2-5 mins' icon={require("@/assets/chatt.png")} alignTopIcon='true' />
                </View>


                <Text className="mx-5 mt-5 mb-1  text-h5 text-gray500">
                    Other options
                </Text>

                <View className='mx-5'>
                    <AccountCard onClick={() => {
                        router.push("/EmailUs")
                    }} title='Email us' description='We Will reply in 1 Working day' icon={require("@/assets/email.png")} alignTopIcon='true' />
                </View>
                <View className='mx-5'>
                    <AccountCard onClick={() => {
                        router.push("/CallUs")
                    }} title='Call us' description='Available Mon-Fri' icon={require("@/assets/calll.png")} alignTopIcon='true' />
                </View>
            </View>
        )
    }
}

export default Support

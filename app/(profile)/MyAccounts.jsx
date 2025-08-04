import HeaderNavigation from '@/components/HeaderNavigations'
import MyAccountsCard from '@/components/MyAccountCard'
import { router } from 'expo-router';
import { Copy } from 'lucide-react-native';
import React, { Component } from 'react'
import { Image, Pressable, ScrollView, Share, Text, View } from 'react-native'


export class MyAccounts extends Component {


    render() {
        return (
            <View className='flex-1 bg-white'>
                <HeaderNavigation />

                <View  >
                    <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
                    <Text className='text-3xl font-bold mx-6 my-4'>My Accounts</Text>

                    <MyAccountsCard image={require("@/assets/Flag.png")} amount='500,00' currency='$' accountName='Salomons Account - GBP' accountNumber='12124235212' routerD='/AccountDetails' />
                    <MyAccountsCard image={require("@/assets/Flag.png")} amount='2300,00' currency='$' accountName='Salomons Account - GBP' accountNumber='12124235212' />
                    </ScrollView>

                </View>
            </View>
        )
    }
}

export default MyAccounts

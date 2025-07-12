import { Text, View } from 'react-native'
import React, { Component } from 'react'
import AccountCard from '@/components/ui/AccountCard'
import HeaderNavigation from '@/components/HeaderNavigations'
import { router } from 'expo-router'

export class paymentOption extends Component {
    render() {
        return (
            <View className=' bg-white h-full'>
                <HeaderNavigation />
                <View>
                    <Text className='text-h1 mx-5 font-bold mb-3'>How would you like to pay ?</Text>
                    <Text className=' mx-5 mb-4 text-gray700 text-body'>Choose your preferred method</Text>
                </View>
                <View className='mx-5'>
                <AccountCard description='' title='Debit or credit card' onClick={() =>
                    router.push({
                        pathname: '/(topup)/credit',
                    })
                } icon={require("@/assets/credit card.png")} />
                <AccountCard description='' title='Mobile Payment' onClick={() =>
                    router.push({
                        pathname: '/(topup)/mobilePayment',
                    })
                } icon={require("@/assets/mobile payment.png")} />
                <Text className='text-gray700 text-body-medium mb-3 mt-4 mx-3'>Or transfer manually</Text>
                <AccountCard description='' title='Get account details' onClick={() =>
                    router.push({
                        pathname: '/(topup)/bankTransfer',
                    })
                } icon={require("@/assets/document icon.png")} />
                
            </View>
            </View>
        )
    }
}
export default paymentOption
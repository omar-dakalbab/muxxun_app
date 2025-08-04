import HeaderNavigation from '@/components/HeaderNavigations'
import CardGroup from '@/components/NavCardItem'
import AccountCard from '@/components/ui/AccountCard'
import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'

const group1 = [
  {
    title: 'Call support',
    description: 'Available 24/7',
    image: require('@/assets/Call.png'),
    bigImage: true,
    rightTopImage: require('@/assets/arrow.png'), 
  },
  {
    title: 'Chat with us',
    description: 'Typical reply in 5 minutes',
    image: require('@/assets/Chat.png'),
    route: '/ProfileDetails',
    bigImage: true,
    
    rightTopImage: require('@/assets/arrow.png'),
  },
];

export class CardHelp extends Component {
    render() {
        return (
            <View className='bg-white flex-1'>
                <HeaderNavigation />
                <ScrollView>
                <Text className='font-bold text-4xl mt-5 mx-5'>
                    Card helps
                </Text>
                <View>
                    <CardGroup data={group1} bgWhite />
                </View>
                <View className='mx-5 pb-16'>
                    <AccountCard title='Card decliend' onClick={() => { router.push("/ManageCard") }} description='what to do if your card get declined' icon={require("@/assets/credit card.png")} alignTopIcon={true}  />
                    <AccountCard title='Lost or stolen card' onClick={() => { router.push("/ManageCard") }} description='How to report and replace a lost..' icon={require("@/assets/credit card.png")} alignTopIcon={true}  />
                    <AccountCard title='Disputed transaction' onClick={() => { router.push("/ManageCard") }} description='How to dispute a charge on your..' icon={require("@/assets/credit card.png")} alignTopIcon={true}  />
                    <AccountCard title='Activate new card' onClick={() => { router.push("/ManageCard") }} description='How to activate your replaceent...' icon={require("@/assets/credit card.png")} alignTopIcon={true}  />
                    <AccountCard title='Card limits' onClick={() => { router.push("/ManageCard") }} description='Understanding your card spending' icon={require("@/assets/credit card.png")} alignTopIcon={true}  />
                </View>
                </ScrollView>
            </View>
        )
    }
}

export default CardHelp

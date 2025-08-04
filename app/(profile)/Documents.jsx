import HeaderNavigation from '@/components/HeaderNavigations'
import CardGroup from '@/components/NavCardItem'
import React, { Component } from 'react'
import { Text, View } from 'react-native'


const group1 = [
    { title: 'Card confirmation', image: require('@/assets/tick.png'),hideAction: true,smallerImage: true },
    { title: 'Account confirmation', image: require('@/assets/church.png'),hideAction: true,smallerImage: true },
    { title: 'Statment of fees 2024', image: require('@/assets/document icon.png'),hideAction: true,smallerImage: true },
    { title: 'Statment of fees 2023', image: require('@/assets/document icon.png'),hideAction: true,smallerImage: true},
];


export class Documents extends Component {
  render() {
    return (
      <View className='flex-1 bg-white'>
        <HeaderNavigation title='Documents'/>

        <View className=''  >
            <CardGroup data={group1} />
        </View>
      </View>
    )
  }
}

export default Documents

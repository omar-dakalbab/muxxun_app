import HeaderNavigation from '@/components/HeaderNavigations'
import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'

export class index extends Component {
  render() {
    return (
      <View className='flex-1 bg-white'>
        <HeaderNavigation />
        <Text className='text-h1 font-bold mx-6 mt-3'>Messages</Text>


        <View className='flex-1 justify-center items-center'>
            <Image className='object-contain' source={require("@/assets/bell.png")}/>
            <Text className='text-h1 font-bold mt-5'>Nothing to see yet</Text>
            <Text className='text-h4 text-gray400 mt-3'>Your notifications will show up here.</Text>
        </View>
      </View>
    )
  }
}

export default index;

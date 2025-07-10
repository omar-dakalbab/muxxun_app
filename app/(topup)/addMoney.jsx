import { Image, Pressable, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import Input from '@/components/ui/Input'
import SelectModal from '@/components/ui/SelectModal'
import HeaderNavigation from '@/components/HeaderNavigations'
import { Button } from '@/components/ui/Button'
import { Route } from 'expo-router/build/Route'
import { router } from 'expo-router'
import CurrencyInput from '@/components/CurrencyInput'
import CurrencyInputSec from '@/components/ui/CurrencyInputSec'

export class addMoney extends Component {
  render() {
    return (
      <View className='bg-white h-full flex justify-between'>
        <HeaderNavigation />
        <View>
          <View className='mt-4 mx-6'>
            <Text className='text-h1  font-bold mb-3'>Add money</Text>
            <Text className='text-body text-gray500 mb-6'>Your money is protected by licensed{"\n"} banks</Text>
          </View>
          <View className='mx-5'>

            
            <CurrencyInput caption='you add' />

            <View className="bg-gray100 p-5 rounded-xl flex items-center flex-row justify-between mb-4 w-full">
              <View className='flex-row items-center'>
                <Pressable>
                  <Image source={require("@/assets/Union.png")} />
                </Pressable>
                <Text className='text-h5 text-black font-bold ml-3'>
                  Payment method
                </Text>
              </View>
              <Pressable
                className="p-3 bg-white rounded-2xl w-20  items-center justify-center shadow-sm"
                onPress={() => {
                  router.push("/(topup)/paymentOption/")
                }}
              >
                <Text className='text-footnote font-semibold'>Choose</Text>
              </Pressable>
            </View>

            <CurrencyInputSec />

          </View>

          <View className='mt-6 flex flex-row justify-between items-center mx-8'>
            <Text className='text-gray700 text-footnote font-semibold'>Debit card fee</Text>
            <Text className='text-black text-h5 font-semibold'>5.29 GBP</Text>
          </View>
          <View className='mt-4 flex flex-row justify-between items-center mx-8'>
            <Text className='text-gray700 text-footnote font-semibold'>Our fee</Text>
            <Text className='text-primary text-h5 font-semibold'>0 GBP</Text>
          </View>
          <View className='mt-4 flex flex-row justify-between items-center mx-8'>
            <Text className='text-gray700 text-footnote font-semibold'>Total included fees (5.02%)</Text>
            <Text className='text-primary text-h5 font-semibold'>5.29 GBP</Text>
          </View>
          <View className='mt-4 flex flex-row justify-between items-center mx-8'>
            <Text className='text-gray700 text-footnote font-semibold'>Total you’ll pay</Text>
            <Text className='text-primary text-h5 font-semibold'>15.29 GBP</Text>
          </View>
        </View>
        <View className='pb-10 mx-5'>
          <Button label='Continue' onPress={() => {
            router.push({ pathname: "/" });
          }} />
        </View>
      </View>
    )
  }
}

export default addMoney
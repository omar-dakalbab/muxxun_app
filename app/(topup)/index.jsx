import { Image, ImageBackground, SafeAreaView, Text, View } from 'react-native';
import React, { Component } from 'react';
import { Button } from '@/components/ui/Button';
import { router } from 'expo-router';
import HeaderNavigation from '@/components/HeaderNavigations';
import { X } from 'lucide-react-native';


export class topup extends Component {
  render() {
    return (
      <View className='bg-white h-full justify-between'>
          <HeaderNavigation icon={<X size={24} color="black" />}
          onLeftIconPress={() => router.push("/(app)")}
          />


          {/* Content */}
          <View className='justify-center items-center  '>
            <View className='mt-20 mb-12'>
              <Image className='h-8 w-8' source={require('@/assets/master icon.png')} />
            </View>
            <View className='mb-4'>
              <Text className='text-h1 font-bold'>Top up your account</Text>
            </View>
            <View>
              <Text className='text-body text-gray400 text-center mx-16'>
                Start using your MUXXUS account today. You can spend, send, withdraw, and convert your currency whenever you want.
              </Text>
            </View>
          </View>
           <View className='relative h-1/2'>
          <ImageBackground
            source={require("@/assets/topBack.png")}
            className='h-full w-full object-fill absolute bottom-0 left-0 right-0'
            resizeMode='cover'
          />
          <View className='px-4 pb-6 absolute bottom-5 left-3 right-3'>
            <Button
              label="Continue"
              size="lg"
              onPress={() => {
                router.push({ pathname: "/(topup)/addMoney/" });
              }}
            />
          </View>
        </View>
          </View>
      


    );
  }
}

export default topup;
import { router } from 'expo-router';
import React from 'react';
import { Image, Pressable, Text, View, ImageSourcePropType } from 'react-native';

interface MyAccountsCardProps {
  image?: ImageSourcePropType;
  button2image?: ImageSourcePropType;
  button1image?: ImageSourcePropType;
  amount: string;
  currency: string;
  routerD: string;
  accountName?: string;
  accountNumber?: string;
  button1Label?: string;
  button2Label?: string;
  onButton1Press?: () => void;
  onButton2Press?: () => void;
}

const MyAccountsCard: React.FC<MyAccountsCardProps> = ({
  image,
  amount,
  accountName = "Salomon's Account - GBP",
  accountNumber = '123456789876',
  button1image,
  button2image,
  button1Label,
  button2Label,
  currency,
  onButton1Press,
  onButton2Press,
  routerD,
}) => {
  const showButtons = button1Label && button2Label;

  return (
    <View className='mx-6 px-5 py-6 bg-gray100 rounded-2xl flex-col mt-3'>
      <Pressable onPress={() => {
        if (routerD) {
          router.push(routerD);
        }
      }}>
        <Image className='mb-2' source={image} />
        <View className='flex-row'>
          <Text className='text-4xl text-gray400 font-bold my-2'>{currency} </Text>
          <Text className='text-4xl  font-bold my-2'>{amount}</Text>
        </View>

        {showButtons ? (
          <View className='flex-row mt-2'>
            <Pressable
              onPress={onButton1Press}
              className='bg-white border w-6/12 -ml-1 mr-2 flex-row justify-center items-center border-gray100 rounded-3xl py-1'
            >
              <Image className='w-5 h-5 object-contain mr-1' source={button1image} />
              <Text className='text-h5 font-semibold'>{button1Label}</Text>
            </Pressable>
            <Pressable
              onPress={onButton2Press}
              className='bg-white border w-6/12 flex-row justify-center items-center border-gray100 rounded-3xl py-3'
            >
              <Image className='w-5 h-5 object-contain mr-1' source={button2image} />
              <Text className='text-h5 font-semibold'>{button2Label}</Text>
            </Pressable>
          </View>
        ) : (
          <>
            <Text className='text-h4-semibold mb-1 font-bold'>{accountName}</Text>
            <Text className='text-h5-semibold font-bold text-gray500'>
              {accountNumber}
            </Text>
          </>
        )}
      </Pressable>
    </View>
  );
};

export default MyAccountsCard;
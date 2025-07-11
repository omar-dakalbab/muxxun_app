import { Image, Pressable, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import HeaderNavigation from '@/components/HeaderNavigations'
import { Icon, Search } from 'lucide-react-native'
import { router } from 'expo-router'

const transactionsData = [
  {
    id: 1,
    title: 'Mortgage payment',
    time: '2:36 PM',
    amount: 3500,
    type: 'income',
    image: require('@/assets/Avatars.png'),
    date: 'Today',
  },
  {
    id: 2,
    title: 'To Martin Franci',
    time: '2:36 PM',
    amount: -250,
    type: 'expense',
    image: require('@/assets/photo.png'),
    date: '16 Apr 2024',
  },
  {
    id: 3,
    title: 'To Martin Franci',
    time: '2:36 PM',
    amount: -250,
    type: 'expense',
    image: require('@/assets/photo.png'),
    date: '16 Apr 2024',
  },
]

const Index = () => {
  const [searchVisible, setSearchVisible] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTransactions = transactionsData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <View className='h-full bg-white'>
      <HeaderNavigation
        title='Transactions'
        rightIcon={<Search />}
        onRightIconPress={() => setSearchVisible(!searchVisible)}
      />

      {/* Search Input */}
      {searchVisible && (
        <View className='mx-5 mt-2 mb-2 bg-gray100 p-2 rounded-lg'>
          <TextInput
            placeholder='Search transactions...'
            className='text-base text-black'
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      )}

      {/* Account Selector */}
      <View className='flex-row justify-between p-3 rounded-3xl px-5 mx-5 mt-2 bg-white shadow-sm'>
        <Text className='font-semibold text-footnote-medium'>All Accounts</Text>
        <Image className='rotate-90' source={require('@/assets/arrow.png')} />
      </View>

      {/* Grouped by Date */}
      {['Today', '16 Apr 2024'].map((date) => {
        const items = filteredTransactions.filter((item) => item.date === date)
        if (!items.length) return null

        const total = items.reduce((sum, i) => sum + i.amount, 0)

        return (
          <View key={date}>
            <View className='flex-row justify-between mx-5 mt-8 mb-4'>
              <Text className='text-gray500 text-footnote font-semibold'>{date}</Text>
              <Text className='text-gray500 text-footnote font-semibold'>
                {total >= 0 ? `+$${total}` : `-$${Math.abs(total)}`}
              </Text>
            </View>

            {items.map((item) => (
              <Pressable
                key={item.id}
                onPress={() => {
                  router.push('(transactions)/transcationInfo')
                }}
              >
                <View className='flex-row p-5 bg-gray100 justify-between mx-4 rounded-xl mb-2'>
                  <View className='flex-row'>
                    <Image className='mr-5 rounded-full' source={item.image} />
                    <View>
                      <Text className='mb-1 font-bold text-footnote'>{item.title}</Text>
                      <Text className='text-gray600'>{item.time}</Text>
                    </View>
                  </View>
                  <Text className='font-bold'>
                    {item.amount >= 0 ? `+$${item.amount}` : `-$${Math.abs(item.amount)}`}
                  </Text>
                </View>
              </Pressable>
            ))}
          </View>
        )
      })}

      {/* Floating Sort Button */}
      <View className='absolute bottom-14 right-6'>
        <Pressable className='bg-black rounded-full w-16 h-16 items-center justify-center'>
          <Image className='w-7 h-7' source={require('@/assets/Sort.png')} />
        </Pressable>
      </View>
    </View>
  )
}

export default Index;

import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'
import HeaderNavigation from '@/components/HeaderNavigations'
import { Button } from '@/components/ui/Button'
import { router } from 'expo-router'
import { Search } from 'lucide-react-native'

const mobilePayments = [
  { id: 1, name: "Orange Money", logo: require('@/assets/orange-money-logo copie 1 (1).png') },
  { id: 2, name: "MTN Mobile Money", logo: require('@/assets/orange-money-logo copie 1 (1).png') },
  { id: 3, name: "Moov Money", logo: require('@/assets/orange-money-logo copie 1 (1).png') },
  { id: 4, name: "Wave", logo: require('@/assets/orange-money-logo copie 1 (1).png') },
]

export class mobilePayment extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: '',
    }
  }

  handleSearch = (text) => {
    this.setState({ searchQuery: text })
  }

  getFilteredPayments = () => {
    const { searchQuery } = this.state
    if (!searchQuery.trim()) return mobilePayments
    const query = searchQuery.toLowerCase()
    return mobilePayments.filter(payment =>
      payment.name.toLowerCase().includes(query)
    )
  }

  renderPayment = ({ item }) => (
    <Pressable
      onPress={() => router.push("/(topup)/paymentPhone")}
      className="mx-6 mt-6 border-b border-gray200"
    >
      <View className="flex-row items-center mb-5">
        <Image source={item.logo} />
        <Text className="text-h4 font-bold ml-5">{item.name}</Text>
      </View>
    </Pressable>
  )

  render() {
    const filteredPayments = this.getFilteredPayments()

    return (
      <View className="bg-white h-full">
        <HeaderNavigation />

        <View className="mt-6">
          <Text className="text-h1 mx-6 font-bold mb-3">
            Choose the mobile {"\n"}payment solution to {"\n"}deposit your money
          </Text>
          <Text className="mx-6 mb-4 text-gray700 text-body">
            You will enter your phone number to {"\n"}continue the process
          </Text>
        </View>

        <View className="flex-row items-center bg-gray-100 rounded-xl h-14 mx-5 mt-6 px-4 py-3">
          <Search size={20} color="#9ca3af" />
          <TextInput
            className="ml-3 flex-1 text-xl text-black"
            placeholder="Search mobile payment solution"
            placeholderTextColor="#9ca3af"
            value={this.state.searchQuery}
            onChangeText={this.handleSearch}
          />
        </View>

        <FlatList
          data={filteredPayments}
          renderItem={this.renderPayment}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          style={{ marginTop: 20 }}
        />
      </View>
    )
  }
}

export default mobilePayment

import { FlatList, Image, Text, TextInput, View, ScrollView, Pressable } from 'react-native'
import React, { Component } from 'react'
import HeaderNavigation from '@/components/HeaderNavigations'
import { Button } from '@/components/ui/Button'
import { router } from 'expo-router'
import { Search } from 'lucide-react-native'

const bankList = [
  { id: 1, name: "Bank of Scotland", logo: require('@/assets/orange-money-logo copie 1 (1).png') },
  { id: 2, name: "Barclays", logo: require('@/assets/orange-money-logo copie 1 (1).png') },
  { id: 3, name: "HSBC", logo: require('@/assets/orange-money-logo copie 1 (1).png') },
  { id: 4, name: "test", logo: require('@/assets/orange-money-logo copie 1 (1).png') },
  { id: 5, name: "HSBC", logo: require('@/assets/orange-money-logo copie 1 (1).png') },
]

export class bankTransfer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
    }
  }


  handleSearch = (text) => {
    this.setState({ searchQuery: text });
  }


  getFilteredBanks = () => {
    const { searchQuery } = this.state;
    if (!searchQuery.trim()) return bankList;
    const query = searchQuery.toLowerCase();
    return bankList.filter(bank =>
      bank.name.toLowerCase().includes(query)
    );
  }

  renderBank = ({ item }) => (
    <Pressable
      onPress={() => router.push("/(topup)/BankInformation/")}
      className='mx-6 mt-6 border-b border-gray200'
    >
      <View className='flex-row items-center mb-5'>
        <Image source={item.logo} />
        <Text className='text-h4 font-bold ml-5'>{item.name}</Text>
      </View>
    </Pressable>
  )

  render() {
    const filteredBanks = this.getFilteredBanks();

    return (
      <View className='bg-white h-full'>
        <HeaderNavigation />
        
          <View className='mt-6'>
            <Text className='text-h1 mx-6 font-bold mb-3'>
              Choose the bank to{"\n"}deposit your money{"\n"}from
            </Text>
            <Text className='mx-6 mb-1 text-gray700 text-body'>
              We will open your bank’s application to {"\n"}confirm this action. You will return to this {"\n"}page after your transaction is confirmed.
            </Text>
          </View>

          <View className="flex-row items-center bg-gray-100 rounded-xl h-14 mx-5 mt-6 px-4 py-3">
            <Search size={20} color="#9ca3af" />
            <TextInput
              className="ml-3 flex-1 text-base text-black"
              placeholder="Search bank"
              placeholderTextColor="#9ca3af"
              value={this.state.searchQuery}
              onChangeText={this.handleSearch}
            />
          </View>

          
          <FlatList
            data={filteredBanks}
            renderItem={this.renderBank}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            style={{ marginTop: 20 }}
          />

        
      </View>
    )
  }
}

export default bankTransfer

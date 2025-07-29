import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    Image,
    TextInput,
    FlatList,
    ImageSourcePropType,
} from 'react-native';
import { useRouter } from 'expo-router';
import {
    Plus,
    Search,
    UserPlus,
    ChevronRight,
} from 'lucide-react-native';

import HeaderNavigation from '@/components/HeaderNavigations';

type Contact = {
    id: string;
    name: string;
    phone: string;
    avatar: ImageSourcePropType;
};

const recentContacts: Contact[] = [
    {
        id: '1',
        name: 'Maria Sevchenko',
        phone: '(316) 555-0116',
        avatar: require('@/assets/maria.png'),
    },
    {
        id: '2',
        name: 'Andrade Alexander Bade',
        phone: '(201) 555-0124',
        avatar: require('@/assets/andrade.png'),
    },
    {
        id: '3',
        name: 'Michelle Princess',
        phone: '(209) 555-0104',
        avatar: require('@/assets/michelle.png'),
    },
];

const SearchUser: React.FC = () => {
    const router = useRouter();

    // Search state
    const [searchText, setSearchText] = useState<string>('');
    const filteredContacts = recentContacts.filter(
        (c) =>
            c.name.toLowerCase().includes(searchText.toLowerCase()) ||
            c.phone.includes(searchText)
    );

    return (
        <SafeAreaView className="flex-1 bg-white">
            <HeaderNavigation />

            <View className="px-6 mt-4 flex-1">
                <Text className="text-h1 font-bold mb-4">
                    Search user
                </Text>
                <View className="flex-row items-center bg-gray100 px-4 py-2 rounded-full mb-6">
                    <Search size={16} color="#9CA3AF" />
                    <TextInput
                        value={searchText}
                        onChangeText={setSearchText}
                        placeholder="Name, username, phone, email"
                        placeholderTextColor="#9CA3AF"
                        className="ml-2 flex-1 text-gray-700 text-sm"
                    />
                </View>
                <Text className="text-gray700 text-footnote mb-4">
                    Existing receptiants
                </Text>
                <View className="bg-gray100 p-4 rounded-2xl">
                    <FlatList
                        data={filteredContacts}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item, index }) => {
                            return (
                                <Pressable
                                    onPress={() => {
                                        router.push({
                                            pathname: '/(transactions)/howMuchSending',
                                            params: {
                                                recipientId: item.id,
                                                recipientName: item.name,
                                                recipientPhone: item.phone,
                                            },
                                        });
                                    }}
                                    className="flex-row items-center justify-between py-3"
                                >
                                    <View className="flex-row items-center">
                                        <Image
                                            source={item.avatar}
                                            className="w-10 h-10 rounded-full"
                                        />
                                        <View className="ml-4">
                                            <Text className="text-base font-medium text-gray-900">
                                                {item.name}
                                            </Text>
                                            <Text className="text-sm text-gray-500">
                                                {item.phone}
                                            </Text>
                                        </View>
                                    </View>
                                </Pressable>
                            );
                        }}
                        scrollEnabled={false}
                        ListEmptyComponent={
                            <View className="items-center py-4">
                                <Text className="text-base text-gray400">No Data</Text>
                            </View>
                        }
                    />
                </View>
            </View >
        </SafeAreaView >
    );
};

export default SearchUser;

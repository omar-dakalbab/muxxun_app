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
import CurrencyInput from '@/components/CurrencyInput';

// Type definition for a contact
type Contact = {
    id: string;
    name: string;
    phone: string;
    avatar: ImageSourcePropType;
};

// Sample data
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

const HowMuchSending: React.FC = () => {
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
                    How much are you sending?
                </Text>
                <Text className="text-gray-700 text-footnote mb-4">
                    You send
                </Text>
                <CurrencyInput caption='Balance: 500 GBP' />
                <CurrencyInput caption='User user gets' />
            </View>

            <Pressable
                onPress={() => router.push('/(transactions)/searchUser')}
                className="bg-black rounded-lg mx-4 h-16 items-center justify-center"
            >
                <Text className="text-base font-semibold text-white">Sell GBP</Text>
            </Pressable>

        </SafeAreaView >
    );
};

export default HowMuchSending;

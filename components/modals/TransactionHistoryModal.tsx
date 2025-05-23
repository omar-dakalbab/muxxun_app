import {
    View,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function TransactionHistoryModal({ visible, onClose }) {
    const transactionHistoryData = [
        {
            id: 1,
            image: require('../../assets/visa.png'),
            brand: 'Nike',
            description: 'Nike Air Max 270',
            date: '30 July 2024',
            time: '12:00 PM',
            price: '$150',
            status: "Paid"
        },
        {
            id: 2,
            image: require('../../assets/visa.png'),
            brand: 'Adidas',
            description: 'Adidas Yeezy Boost 350',
            date: '12 December 2021',
            time: '12:30 PM',
            price: '$220',
            status: "Paid"
        },
        {
            id: 3,
            image: require('../../assets/visa.png'),
            brand: 'Puma',
            description: 'Puma RS-X',
            date: '1 January 2022',
            time: '03:30 PM',
            price: '$130',
            status: "Paid"
        },
        {
            id: 4,
            image: require('../../assets/visa.png'),
            brand: 'Reebok',
            description: 'Reebok Classic Leather',
            date: '12 December 2021',
            time: '09:45 AM',
            price: '$100',
            status: "Paid"
        },
        {
            id: 5,
            image: require('../../assets/visa.png'),
            brand: 'Converse',
            description: 'Converse Chuck Taylor All Star',
            date: '1 January 2022',
            time: '05:15 PM',
            price: '$80',
            status: "Paid"
        },

        {
            id: 6,
            image: require('../../assets/visa.png'),
            brand: 'Nike',
            description: 'Nike Air Max 270',
            date: '30 July 2024',
            time: '12:00 PM',
            price: '$150',
            status: "Paid"
        },
        {
            id: 7,
            image: require('../../assets/visa.png'),
            brand: 'Adidas',
            description: 'Adidas Yeezy Boost 350',
            date: '12 December 2021',
            time: '12:30 PM',
            price: '$220',
            status: "Paid"
        },
        {
            id: 8,
            image: require('../../assets/visa.png'),
            brand: 'Puma',
            description: 'Puma RS-X',
            date: '1 January 2022',
            time: '03:30 PM',
            price: '$130',
            status: "Paid"
        },
        {
            id: 9,
            image: require('../../assets/visa.png'),
            brand: 'Reebok',
            description: 'Reebok Classic Leather',
            date: '12 December 2021',
            time: '09:45 AM',
            price: '$100',
            status: "Paid"
        },
        {
            id: 10,
            image: require('../../assets/visa.png'),
            brand: 'Converse',
            description: 'Converse Chuck Taylor All Star',
            date: '1 January 2022',
            time: '05:15 PM',
            price: '$80',
            status: "Paid"
        }
    ];

    const groupedTransactions = transactionHistoryData.reduce((acc, item) => {
        if (!acc[item.date]) acc[item.date] = [];
        acc[item.date].push(item);
        return acc;
    }, {});

    const [name, setName] = useState('All Transaction');

    return (
        <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={onClose}>
            <View className="flex-1 justify-end items-center bg-black/50">
                <View className="bg-white w-full h-[90%] p-5 rounded-t-lg shadow-lg">
                    <View className="flex-row justify-center items-center pb-4 mb-3 border-b border-gray-200">
                        <Text className="text-lg font-semibold text-center">Transaction History</Text>
                    </View>
                    <TouchableOpacity onPress={onClose} className="absolute top-5 right-5 p-1 rounded-full bg-white border border-gray-300">
                        <Ionicons name="close" size={20} color="black" />
                    </TouchableOpacity>
                    <View className="flex-column items-center justify-center mb-4 mt-3">
                        <Text className="text-gray-500 mb-2">Balance</Text>
                        <Text className="text-2xl font-semibold">$100</Text>
                    </View>
                    <View className="mb-4">
                        <Text className="text-gray-600 mb-1">Statement Period Range</Text>
                        <TextInput className="border border-gray-300 p-3 rounded-md bg-gray-100" value="10 / 10 / 1995" editable={false} />
                    </View>
                    <View className="mb-4">
                        <Text className="text-gray-600 mb-1">Transaction</Text>
                        <TextInput className="border border-gray-300 p-3 rounded-md" value={name} onChangeText={setName} />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {Object.keys(groupedTransactions).map((date) => (
                            <View key={date} className="mb-4">
                                <Text className="text-gray-700 font-semibold mb-2">{date}</Text>
                                {groupedTransactions[date].map((item) => (
                                    <View key={item.id} className="flex-row items-center mb-3">
                                        <View className="items-center justify-center border border-gray-200 rounded-full w-12 h-12 mr-3">
                                            <Image source={item.image} />
                                        </View>
                                        <View className="flex-1">
                                            <Text className="font-[600] text-black">{item.brand}</Text>
                                            <Text className="font-[500] text-textDarkColor">{item.description}</Text>
                                            <Text className="text-gray-400 text-xs">{item.time}</Text>
                                        </View>
                                        <View className="items-end">
                                            <Text className="font-bold">{item.price}</Text>
                                            <View className={`mt-1 py-1 rounded-full text-xs`}>
                                                <Text className="text-xs font-semibold rounded-full text-accountActiveColor bg-greenLightColor px-2 py-1 border border-accountActiveColor">{item.status}</Text>
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        </Modal>
    );
}

import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { useAccountDataStore } from "@/store/useAccountDataStore";
import TransferChart from "./TransferChart";

interface Transaction {
    id: string;
    title: string;
    subtitle?: string;
    amount: string;
    date: string;
    avatar?: string;
    currency?: string;
    positive?: boolean;
}

export default function TransactionsList() {
    // replace with actual store selector
    const transactions: Transaction[] = [
        {
            id: "1",
            title: "To Martin Franci",
            subtitle: "From John Doe",
            amount: "50",
            date: "2023-10-01",
            avatar: "https://gravatar.com/avatar/f7b2ab039fb34e9256e8e2be4a25733b?s=400&d=robohash&r=x",
            currency: "$",
            positive: true,
        },
        {
            id: "2",
            title: "Payment Received",
            subtitle: "To Jane Smith",
            amount: "20",
            date: "2023-10-02",
            avatar: "https://gravatar.com/avatar/f7b2ab039fb34e9256e8e2be4a25733b?s=400&d=robohash&r=x",
            currency: "$",
            positive: false,
        },
        {
            id: "3",
            title: "Refund Issued",
            subtitle: "For Order #12345",
            amount: "15",
            date: "2023-10-03",
            avatar: "https://gravatar.com/avatar/f7b2ab039fb34e9256e8e2be4a25733b?s=400&d=robohash&r=x",
            currency: "€",
            positive: true,
        },
        {
            id: "4",
            title: "Subscription Fee",
            subtitle: "Monthly Subscription",
            amount: "10",
            date: "2023-10-04",
            avatar: "https://gravatar.com/avatar/f7b2ab039fb34e9256e8e2be4a25733b?s=400&d=robohash&r=x",
            currency: "£",
            positive: false,
        },
        {
            id: "5",
            title: "Salary Deposit",
            subtitle: "Monthly Salary",
            amount: "2000",
            date: "2023-10-05",
            avatar: "https://gravatar.com/avatar/f7b2ab039fb34e9256e8e2be4a25733b?s=400&d=robohash&r=x",
            currency: "$",
            positive: true,
        },
    ];

    const renderItem = ({ item }: { item: Transaction }) => (
        <View className="flex-row items-center py-3">
            {item.avatar ? (
                <Image
                    source={{ uri: item.avatar }}
                    className="w-10 h-10 rounded-full mr-3"
                />
            ) : (
                <View className="w-10 h-10 rounded-full bg-gray-300 mr-3" />
            )}
            <View className="flex-1">
                <Text className="text-sm font-medium">{item.title}</Text>
                {item.subtitle && (
                    <Text className="text-xs text-gray-500 mt-1">
                        {item.subtitle}
                    </Text>
                )}
            </View>
            <Text
                className={
                    `text-sm font-semibold ` +
                    (item.positive ? "text-green-500" : "text-red-500")
                }
            >
                {item.positive ? `+${item.currency}${item.amount}` : `-${item.currency}${item.amount}`}
            </Text>
        </View>
    );

    return (
        <View className="px-6 pt-4">
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-footnote">Transactions</Text>
                <Text className="text-footnote text-gray700">
                    Plus
                </Text>
            </View>
            <View className="px-2">
                <FlatList
                    data={transactions}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    ItemSeparatorComponent={() => <View className="bg-gray-200" />}
                    contentContainerStyle={{ paddingVertical: 8 }}
                />
            </View>
        </View>
    );
}

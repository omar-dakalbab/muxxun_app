import React, { useState } from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Bell, ChevronLeft } from "lucide-react-native";
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from "react-native-gesture-handler";
let notifications = [
    { id: 1, type: "Joined Campaign", title: "Congratulations, you have joined the 'Adidas' Campaign", time: "13:14", icon: "adidas", day: "Today", read: false },
    { id: 2, type: "Campaign Paid", title: "'Flower' campaign paid", time: "08:09", icon: "campaign", day: "Today", read: false },
    { id: 3, type: "Campaign Paid", title: "'Winter Reebok' campaign paid", time: "10:31", icon: "campaign", day: "Yesterday", read: true },
    { id: 4, type: "Campaign Paid", title: "'Flower' campaign paid", time: "14:45", icon: "campaign", day: "Yesterday", read: true },
    { id: 5, type: "Joined Campaign", title: "Congratulations, you have joined the 'Adidas' Campaign", time: "13:14", icon: "adidas", day: "Yesterday", read: true },
    { id: 6, type: "Campaign Paid", title: "'Winter Reebok' campaign paid", time: "07:06", icon: "campaign", day: "Yesterday", read: true },
    { id: 7, type: "Campaign Paid", title: "'Flower' campaign paid", time: "14:45", icon: "campaign", day: "Yesterday", read: true },
    { id: 8, type: "Joined Campaign", title: "Congratulations, you have joined the 'Adidas' Campaign", time: "13:14", icon: "adidas", day: "Yesterday", read: true },
];

notifications = [];

const groupedTransactions = notifications.reduce((acc, item) => {
    if (!acc[item.day]) acc[item.day] = [];
    acc[item.day].push(item);
    return acc;
}, {});



const NotificationScreen = () => {
    const [activeTab, setActiveTab] = useState("Read");
    const navigation = useNavigation();



    return (
        <SafeAreaView className="flex-1 bg-white px-4 py-2">
            <View className="flex-row items-center justify-between pb-4">
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="p-2 rounded-full"
                >
                    <ChevronLeft size={24} color="black" />
                </TouchableOpacity>
                <Text className="text-xl font-semibold">Notifications</Text>
                <View className="w-6" />
            </View>

            {notifications.length > 0 && <View className="flex-row justify-center border-b border-gray-200 mb-5">
                {["Read", "Unread"].map((tab) => (
                    <TouchableOpacity key={tab} className={`mr-5 items-center py-2 ${activeTab === tab ? "border-b-4 rounded-t-lg border-primary" : ""}`} onPress={() => setActiveTab(tab)}>
                        <Text className={activeTab === tab ? "text-primary font-medium" : "text-gray-500"}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>}



            {notifications.length === 0 ? <View className="flex-1 justify-start items-center mt-40">
                <Bell size={20} className="text-billAddressColor" />
                <Text className="text-gray-500 mt-3 mb-2">No notification yet</Text>
                <Text className="text-gray-400 text-center">
                    When you have notifications, they will show up {`\n`} here.
                </Text>
            </View> :
                <ScrollView showsVerticalScrollIndicator={false}>
                    {Object.keys(groupedTransactions).map((date) => (
                        <View key={date} className="mb-4">
                            {
                                groupedTransactions[date].filter((
                                    it
                                ) => activeTab === "Read" ? it.read : !it.read).length > 0 && <Text className="text-gray-700 font-semibold mb-2">{date}</Text>
                            }
                            {groupedTransactions[date].filter((it) =>
                                activeTab === "Read" ? it.read : !it.read
                            ).map((item) => (
                                <View className="flex-row items-center p-3 border-gray-200">
                                    <Image
                                        source={
                                            item.icon === "adidas"
                                                ? require("../assets/nike.png")
                                                : require("../assets/nike.png")
                                        }
                                        className="w-10 h-10 rounded-full"
                                    />
                                    <View className="ml-3 flex-1">
                                        <Text className="text-sm font-semibold">{item.type}</Text>
                                        <Text className="text-gray-600 text-sm">{item.title}</Text>
                                    </View>
                                    <View className="items-end">
                                        <Text className="text-gray-400 text-xs">{item.time}</Text>
                                        {item.read && (
                                            <View className="w-2 h-2 bg-indigo-600 rounded-full mt-2" />
                                        )}
                                    </View>
                                </View>
                            ))}
                        </View>
                    ))}
                </ScrollView>
            }

        </SafeAreaView >
    );
};

export default NotificationScreen;

import { View, Text, Image, SectionList, TouchableOpacity } from 'react-native';
import { Badge, CheckCheck } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';
import AvatarIcon from '../assets/Avatar.png';
import { useNavigation } from '@react-navigation/native';

const messages = [
    { id: '1', name: 'Harvey Specter', message: "Hello John, I've sent you the paym...", time: '10:30', unread: 6, pinned: true },
    { id: '2', name: 'David Kevin', message: "Hello John, I've sent you the paym...", time: '10:30', unread: 6, pinned: false },
    { id: '3', name: 'David Kevin', message: 'Here is the NDA', time: '10:30', unread: 0, pinned: true },
    { id: '4', name: 'David Kevin', message: "Okay, I received", time: '10:30', unread: 0, pinned: false },
    { id: '5', name: 'David Kevin', message: "How about this picture?", time: '10:30', unread: 0, pinned: false },
    { id: '6', name: 'David Kevin', message: "Hello John, I've sent you the paym...", time: '10:30', unread: 6, pinned: true },
    { id: '7', name: 'David Kevin', message: "Hello John, I've sent you the paym...", time: '10:30', unread: 88, pinned: false },
    { id: '8', name: 'David Kevin', message: 'Here is the NDA', time: '10:30', unread: 0, pinned: true },
    { id: '9', name: 'David Kevin', message: "Okay, I received", time: '10:30', unread: 0, pinned: false },
    { id: '10', name: 'David Kevin', message: "How about this picture?", time: '10:30', unread: 0, pinned: false },
    { id: '11', name: 'David Kevin', message: "Hello John, I've sent you the paym...", time: '10:30', unread: 7, pinned: true },
    { id: '12', name: 'David Kevin', message: "Hello John, I've sent you the paym...", time: '10:30', unread: 6, pinned: false },
    { id: '13', name: 'David Kevin', message: 'Here is the NDA', time: '10:30', unread: 0, pinned: true },
    { id: '14', name: 'David Kevin', message: "Okay, I received", time: '10:30', unread: 0, pinned: false },
    { id: '15', name: 'David Kevin', message: "How about this picture?", time: '10:30', unread: 0, pinned: false },
    { id: '16', name: 'David Kevin', message: "Hello John, I've sent you the paym...", time: '10:30', unread: 1, pinned: true },
    { id: '17', name: 'David Kevin', message: "Hello John, I've sent you the paym...", time: '10:30', unread: 3, pinned: false },
    { id: '18', name: 'David Kevin', message: 'Here is the NDA', time: '10:30', unread: 0, pinned: true },
];

export default function MessageScreen() {
    const [search, setSearch] = useState('');

    // Group messages into pinned and unpinned
    const groupedMessages = [
        {
            title: 'Pinned Messages',
            data: messages.filter((message) => message.pinned)
        },
        {
            title: 'Unpinned Messages',
            data: messages.filter((message) => !message.pinned)
        }
    ];
    const navigation = useNavigation();
    const [activeTab, setActiveTab] = useState("All");
    return (
        <SafeAreaView className="bg-white px-4 py-4 flex-1">
            <View className="flex-row items-center justify-between mb-4">
                <Text className="text-2xl font-bold text-gray-900">Messages</Text>
                <View className="bg-primary rounded-full px-2 py-1">
                    <Text className="text-white text-xs">{messages.length}</Text>
                </View>
            </View>

            <SearchBar />
            <View className="flex-row border-b border-gray-200">
                {["All", "Unread", "Groups"].map((tab) => (
                    <TouchableOpacity key={tab} className={`mr-3 items-center py-2 ${activeTab === tab ? "border-b-4 rounded-t-lg border-primary" : ""}`} onPress={() => setActiveTab(tab)}>
                        <Text className={activeTab === tab ? "text-primary font-medium" : "text-gray-500"}>{tab}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <SectionList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                sections={groupedMessages}
                keyExtractor={(item) => item.id}
                renderSectionHeader={({ section }) => (
                    <View className="bg-white">
                        <Text className="text-lg font-[400] text-billAddressColor mt-6 mb-2">{section.title}</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('MessageDetails', { name: item.name })}
                    >
                        <View className="flex-row items-center py-4 border-b border-gray-200">
                            <Image
                                source={AvatarIcon}
                                className="w-14 h-14 rounded-full mr-4"
                            />
                            <View className="flex-1">
                                <Text className="font-semibold text-gray-900">{item.name}</Text>
                                <Text className="text-gray-600 text-sm">{item.message}</Text>
                            </View>
                            <View className="items-end">
                                <Text className="text-textDarkColor text-xs mb-1">{item.time}</Text>
                                {item.unread > 0 ? (
                                    <View className="bg-primary rounded-full px-2 py-1">
                                        <Text className="text-white text-xs">{item.unread}</Text>
                                    </View>
                                ) : <CheckCheck size={17} color={"#5449C3"} />}
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
}

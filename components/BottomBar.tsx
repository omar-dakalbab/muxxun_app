import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  // Import useNavigation hook for navigation

import Home from '../assets/home.png';
import Campaign from '../assets/campaign.png';
import Message from '../assets/message.png';
import Profile from '../assets/profile.png';

import Home_ from '../assets/home_.png';
import Campaign_ from '../assets/campaign_.png';
import Message_ from '../assets/message_.png';
import Profile_ from '../assets/profile_.png';
import { SafeAreaView } from 'react-native-safe-area-context';

const footer = [
    {
        id: 1,
        icon: Home,
        disabledIcon: Home_,
        text: 'Home',
        link: 'Home',
    },
    {
        id: 2,
        icon: Campaign,
        disabledIcon: Campaign_,
        text: 'My Campaign',
        link: 'Campaign',
    },
    {
        id: 3,
        icon: Message,
        disabledIcon: Message_,
        text: 'Message',
        link: 'Message',
    },
    {
        id: 4,
        icon: Profile,
        disabledIcon: Profile_,
        text: 'Profile',
        link: 'Profile',
    },
];

export default function BottomBar({
    screenName
}) {
    const navigation = useNavigation();
    return (

        <View className="flex-row justify-between items-center bg-white border-gray-200 px-9 p-8">
            {
                footer.map((item, key) => {
                    const isActive = screenName === item.link;
                    const color = isActive ? '#5449C3' : '#717273';
                    const icon = isActive ? item.icon : item.disabledIcon;
                    return (
                        <TouchableOpacity
                            key={key}
                            onPress={() => navigation.navigate(item.link)}
                        >
                            <View className="flex flex-col items-center">
                                <Image
                                    source={icon}
                                />
                                <Text className={`text-[${color}] mt-2`}>
                                    {item.text}
                                </Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>

    );
}

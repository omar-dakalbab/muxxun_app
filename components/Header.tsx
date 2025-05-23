import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Bell } from 'lucide-react-native'
import { useNavigation } from '@react-navigation/native';

export default function Header() {
    const navigation = useNavigation();
    return (
        <View className="flex-row justify-between items-center mt-4 mb-4">
            <Text className="text-3xl font-bold text-primary">inflxr</Text>

            <TouchableOpacity
                onPress={() => { 
                    navigation.navigate('Notification')
                }}
                className="bg-defaultBackground p-2 rounded-full"
            >
                <Bell size={24} color="black" />
            </TouchableOpacity>
        </View>
    )
}
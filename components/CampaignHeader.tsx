import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import GoBackButton from './GoBackButton';


export default function CampaignHeader({ title, onGoBack }) {
    return (
        <View className="flex-row justify-center items-center relative">
            <GoBackButton onPress={onGoBack} />
            <Text className="text-lg font-bold text-center flex-1">{title}</Text>
        </View>
    )
}
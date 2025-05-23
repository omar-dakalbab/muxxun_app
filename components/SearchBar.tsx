import { View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import { Search, Sliders } from 'lucide-react-native'; // Import icons

export default function SearchBar() {
    return (
        <View className="flex-row items-center justify-between mb-2">
            {/* Search Bar */}
            <View className="flex-row border border-gray-200 items-center rounded-full px-4 py-2 flex-1">
                <Search size={20} color="gray" />
                <TextInput
                    placeholder="Search or type any command"
                    placeholderTextColor="gray"
                    className="ml-2 flex-1 text-gray-600"
                />
            </View>

            {/* Filter Button */}
            <TouchableOpacity className="border border-gray-200 ml-3  p-2 rounded-full">
                <Sliders size={20} color="gray" />
            </TouchableOpacity>
        </View>
    );
}

import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function CampaignStatusBar({
    items,
    isActiveCampaign,
    showQuantity,
    onChange,
}) {
    const [activeItem, setActiveItem] = useState(1); // Default selected item ID



    if (!items || !items?.length) return <View>
        <Text
            className="py-4 text-center text-gray-400"
        >No items found</Text>
    </View>;

    return (
        <View className="py-4 border-gray-200">
            {/* Horizontal ScrollView */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
            >
                {items.map((item) => (
                    <TouchableOpacity
                        key={item.id}
                        onPress={() => {
                            setActiveItem(item.id);
                            onChange(item.id);
                        }}
                        className={`px-4 py-2 mr-3 rounded-full border ${activeItem === item.id
                            ? ''
                            : 'border-gray-400'
                            }`}
                        style={{
                            backgroundColor: activeItem === item.id ? '#5449C3' : '',
                            borderColor: activeItem === item.id ? '#5449C3' : '#717273',
                        }}
                    >
                        {!showQuantity ? <Text
                            className="text-sm font-semibold"
                            style={{
                                color: activeItem === item.id ? 'white' : '#717273',
                            }}
                        >
                            {item.text}
                        </Text> :
                            <View className="flex-row items-center justify-center">
                                <Text
                                    className="text-sm font-semibold"
                                    style={{
                                        color: activeItem === item.id ? 'white' : '#717273',
                                    }}
                                >
                                    {item.text}
                                </Text>
                                <View className="flex items-center justify-center ml-2">
                                    {showQuantity && (
                                        <Text
                                            className="text-xs text-primary bg-gray-100 px-2 py-1 border rounded-full"
                                            style={{
                                                borderColor: activeItem === item.id ? '#5449C3' : '#C8C8C9',
                                            }}
                                        >{item.quantity}</Text>
                                    )}
                                </View>
                            </View>
                        }
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}

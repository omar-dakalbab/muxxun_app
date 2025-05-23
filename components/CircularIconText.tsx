import { View } from 'react-native';
import React from 'react';

export function CircularIconText({ Icon, size }) {
    const backgroundColor = size === "small" ? "#5449C3" : "#EFEEFB";
    const borderColor = "#B4AFEC"; // Same color for both sizes

    return (
        <View
            style={{
                width: 32,
                height: 32,
                backgroundColor,
                borderRadius: 16,
                alignItems: 'center',
                justifyContent: 'center',
                borderWidth: 1,
                borderColor,
            }}
        >
            {Icon}
        </View>
    );
}

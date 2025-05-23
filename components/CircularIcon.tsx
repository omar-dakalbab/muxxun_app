import { View } from 'react-native';
import React from 'react';

export default function CircularIcon({
    Icon, size, bgColor, brdColor, icColor, noMargin
}) {
    const backgroundColor = bgColor ? bgColor : size === "small" ? "#5449C3" : "#EFEEFB";
    const borderColor = brdColor ? brdColor : size === "small" ? "#B4AFEC" : "#B4AFEC";
    const iconSize = size === "small" ? 15 : 18;
    const iconColor = icColor ? icColor : size === "small" ? "#FFF" : "#2B2B2C";

    return (
        <View
            className={`w-8 h-8 rounded-full flex items-center justify-center ${!noMargin && "mr-2"} border-[1px]`}
            style={{ backgroundColor, borderColor }} // Dynamic styles here
        >
            <Icon size={iconSize} color={iconColor} />
        </View>
    );
}
import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';

type ToggleInputProps = {
    title: string;
    description?: string;
    onPress?: () => void;
    image?: any;
    onPressImage?: () => void;
    onPressText?: () => void;
    onPressText2?: () => void;
    className?: string;
    textClassName?: string;
};

export default function ToggleInput({
    title,
    description = '',
    onPress,
    className = 'bg-gray100 flex-row justify-between items-center p-5 rounded-2xl mt-4 border-gray100 border',
    textClassName = 'text-primary text-h5 font-semibold',
}: ToggleInputProps) {
    const [isToggled, setIsToggled] = useState(false);

    const handleToggle = () => {
        setIsToggled(!isToggled);
        onPress?.();
    };

    return (
        <View className={className}>
            <View className="flex-1 pr-4">
                <Text className={textClassName}>{title}</Text>
                {!!description && (
                    <Text className="text-gray700 text-footnote mt-1">{description}</Text>
                )}
            </View>
            <Pressable onPress={handleToggle}>
                <Image
                    source={
                        isToggled
                            ? require('@/assets/on.png')
                            : require('@/assets/off.png')
                    }
                    className="w-12 h-7"
                    resizeMode="contain"
                />
            </Pressable>
        </View>
    );
}

// RectangleIcon.tsx
import React from 'react';
import { View, Text } from 'react-native';

type Props = {
    children: React.ReactNode;
    size?: number;
    label?: string;
};

const RectangleIcon: React.FC<Props> = ({ children, size = 40, label }) => (
    <View className="flex-row items-center">
        <View
            className="bg-white border border-gray300 rounded-xl shadow-sm items-center justify-center"
            style={{ width: size, height: size }}
        >
            {children}
        </View>
        {label && (
            <Text className="ml-4 text-h5 font-semibold text-gray-800">
                {label}
            </Text>
        )}
    </View>
);

export default RectangleIcon;

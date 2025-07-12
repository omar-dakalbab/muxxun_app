import React from 'react';
import {
    View,
    Text,
    Pressable,
    Image,
    StyleProp,
    ViewStyle,
} from 'react-native';
import { useRouter } from 'expo-router';

export interface ChooseContainerCardProps {
    icon?: React.ReactNode;
    title?: string;
    buttonText?: string;
    onPress?: () => void;
    route?: string;
    style?: StyleProp<ViewStyle>;
    iconPressHandler?: () => void;
    description?: string;
}

export const ChooseContainerCard: React.FC<ChooseContainerCardProps> = ({
    icon,
    title,
    buttonText,
    onPress,
    route = '',
    style,
    iconPressHandler,
    description,
}) => {
    const router = useRouter();

    const handlePress = () => {
        if (onPress) {
            onPress();
        } else {
            router.push(route);
        }
    };

    return (
        <View
            className="bg-gray-100 p-5 rounded-xl flex-row items-center justify-between mb-4 w-full"
            style={style}
        >
            <View className="flex-row items-start space-x-3">
                {icon}
                <View>
                    <Text className="text-h5 font-semibold text-black">
                        {title}
                    </Text>
                    {description && <Text className="text-footnote text-gray600 mt-2">
                        {description}
                    </Text>}
                </View>
            </View>

            <Pressable
                className="p-3 bg-white rounded-2xl w-20 items-center justify-center shadow-sm"
                onPress={handlePress}
            >
                <Text className="text-footnote font-semibold">
                    {buttonText}
                </Text>
            </Pressable>
        </View>
    );
};

export default ChooseContainerCard;

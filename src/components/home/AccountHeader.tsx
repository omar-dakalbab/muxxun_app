import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    TouchableWithoutFeedback,
    SafeAreaView,
} from "react-native";
import RenderIcon from "../RenderIcon";
import RectangleIcon from "../ui/RectangleIcon";
import { router } from "expo-router";
type MenuItem = { icon: string; label: string; onPress: () => void };

export default function AccountHeader() {

    const [menuVisible, setMenuVisible] = useState(false);

    const menuItems: MenuItem[] = [
        { icon: "exchange", label: "Exchange", onPress: () => { } },
        { icon: "file-text", label: "Get statements", onPress: () => { } },
        { icon: "bank", label: "Account details", onPress: () => { } },
        { icon: "eye-off", label: "Hide", onPress: () => { } },
        { icon: "user-plus", label: "Add new account", onPress: () => { } },
    ];

    return (
        <>
            <View className="rounded-2xl bg-gray-100">
                {/* header row */}
                <View className="p-6 flex-row items-center justify-between border-b border-gray-300 pb-4">
                    <RectangleIcon size={40} label="Salomon's Account">
                        <RenderIcon icon="user" size={18} />
                    </RectangleIcon>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        className="w-10 h-10 items-center justify-center"
                        onPress={() => setMenuVisible(true)}
                    >
                        <RenderIcon icon="dots" size={20} />
                    </TouchableOpacity>
                </View>

                {/* balance */}
                <View className="p-6 pb-0">
                    <Text className="text-lg font-medium text-gray700">
                        Available Balance
                    </Text>
                    <View className="flex-row items-center pt-2">
                        <Text className="text-h1-bold font-bold text-[#C4C4C4] mr-2">£</Text>
                        <Text className="text-h1-bold font-bold text-black">0.00</Text>
                    </View>
                </View>

                {/* action buttons */}
                <View className="flex-row items-center p-6 w-full">
                    <ActionButton icon="topup" label="Top Up" onPress={() => {
                        router.push({
                            pathname: "/(topup)",
                        });
                    }} />
                    <ActionButton icon="transfer" label="Transfer" onPress={() => {
                        router.push({
                            pathname: "/(transactions)/sendTransaction",
                        });
                    }} />
                    <ActionButton
                        icon="exchange"
                        label="Exchange"
                        onPress={() => {
                            router.push({
                                pathname: "/(exchange)",
                            });
                        }}
                        isLastItem
                    />
                </View>
            </View>

            {/* bottom menu */}
            <Modal
                visible={menuVisible}
                animationType="slide"
                transparent
                onRequestClose={() => setMenuVisible(false)}
            >
                <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
                    <View className="flex-1 bg-black/30" />
                </TouchableWithoutFeedback>

                <SafeAreaView className="bg-white rounded-t-2xl p-4">
                    {menuItems.map((item, i) => (
                        <TouchableOpacity
                            key={i}
                            className="flex-row items-center py-3"
                            activeOpacity={0.7}
                            onPress={() => {
                                setMenuVisible(false);
                                item.onPress();
                            }}
                        >
                            <RenderIcon icon={item.icon} size={20} />
                            <Text className="ml-4 text-base text-gray-800">{item.label}</Text>
                        </TouchableOpacity>
                    ))}
                </SafeAreaView>
            </Modal>
        </>
    );
}

function ActionButton({
    icon,
    label,
    onPress,
    isLastItem,
}: {
    icon: string;
    label: string;
    onPress: () => void;
    isLastItem?: boolean;
}) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            className={`flex-1 ${!isLastItem ? "mr-2" : ""}`}
        >
            <View className="border border-gray-300 flex-row items-center justify-center space-x-2 bg-white py-3 px-3 rounded-full shadow-sm">
                <RenderIcon icon={icon} size={18} />
                <Text className="text-sm font-semibold text-gray-800">{label}</Text>
            </View>
        </TouchableOpacity>
    );
}

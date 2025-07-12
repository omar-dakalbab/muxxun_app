import React, { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    Pressable,
} from "react-native";
import RenderIcon from "../RenderIcon";
import RectangleIcon from "../ui/RectangleIcon";
import { router } from "expo-router";
import CurrencyChooser from "../currencyChooser/currencyChooser";

type MenuItem = { icon: React.ReactNode; label: string; onPress: () => void };

export default function AccountHeader() {

    const [menuVisible, setMenuVisible] = useState(false);

    const menuItems: MenuItem[] = [
        {
            icon: <RenderIcon icon="banknote" size={18} />, label: "Exchange", onPress: () => {
                router.push({
                    pathname: "/(exchange)",
                });
            }
        },
        { icon: <RenderIcon icon="file" size={18} />, label: "Get statements", onPress: () => { } },
        { icon: <RenderIcon icon="bank" size={18} />, label: "Account details", onPress: () => { } },
        { icon: <RenderIcon icon="hide" size={18} />, label: "Hide", onPress: () => { } },
        {
            icon: <RenderIcon icon="addaccount" size={18} />, label: "Add new account", onPress: () => {
                setCurrencyModal(true);
            }
        },
    ];

    const [currencyModal, setCurrencyModal] = useState(false);

    return (
        <>
            <View className="rounded-2xl bg-gray-100">
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
                <View className="p-6 pb-0">
                    <Text className="text-lg font-medium text-gray700">
                        Available Balance
                    </Text>
                    <View className="flex-row items-center pt-2">
                        <Text className="text-h1-bold font-bold text-[#C4C4C4] mr-2">£</Text>
                        <Text className="text-h1-bold font-bold text-black">0.00</Text>
                    </View>
                </View>
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
            <Modal
                animationType="fade"
                transparent={true}
                visible={menuVisible}
                onRequestClose={() => setMenuVisible(false)}
            >
                <Pressable
                    onPress={() => setMenuVisible(false)}
                    className="flex-1 justify-end items-center"
                    style={{
                        backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    }}>
                    <View className="bg-white rounded-3xl p-6 w-full">
                        {menuItems.map((item, i) => (
                            <TouchableOpacity
                                key={i}
                                className="flex-row items-center py-2"
                                activeOpacity={0.7}
                                onPress={() => {
                                    setMenuVisible(false);
                                    item.onPress();
                                }}
                            >
                                <View className="w-12 h-12 items-center justify-center bg-gray100 rounded-full">
                                    {item.icon}
                                </View>
                                <Text className="ml-4 text-base text-gray-800">{item.label}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </Pressable>
            </Modal>

            <Modal
                animationType="fade"
                transparent={true}
                visible={currencyModal}
                onRequestClose={() => setCurrencyModal(false)}
            >
                <CurrencyChooser
                    // goTo="/(transactions)/searchUser"
                    onClose={() => setCurrencyModal(false)}
                />
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

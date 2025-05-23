import {
    View,
    Text,
    Modal,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Visa from '../../assets/visa.png';
export default function BalanceModal({
    visible,
    onClose
}) {
    const [name, setName] = useState('$100');
    const [email, setEmail] = useState('Credit Card - **** **** **** 1234');


    const [confirmWithdrawModal, setConfirmWithdrawModal] = useState(false);
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >

            <Modal
                animationType="fade"
                transparent={true}
                visible={confirmWithdrawModal}
                onRequestClose={() => setConfirmWithdrawModal(false)}
            >
                <View className="flex-1 justify-end items-center bg-black/50">
                    <View className="bg-white w-full h-[30%] p-5 rounded-t-lg shadow-lg items-center">
                        {/* Header */}

                        <TouchableOpacity
                            onPress={() => setConfirmWithdrawModal(false)}
                            className="absolute top-5 right-5 p-1 rounded-full bg-white border border-gray-300"
                        >
                            <Ionicons name="close" size={20} color="black" />
                        </TouchableOpacity>

                        {/* Platforms */}
                        <View className="flex-column items-center justify-center mb-4 mt-3 bg-borderColor w-[70%] p-4 rounded-[12px]">
                            <Text className="text-gray-500">
                                Withdraw Balance
                            </Text>
                            <Text className="text-[28px] font-[600] my-3">
                                $100
                            </Text>
                            <View className="flex-row items-center mt-1">
                                <Image
                                    source={Visa}
                                    className="mr-2"
                                />
                                <Text className="text-gray-500">Credit Card - **** **** **** 1234</Text>
                            </View>
                        </View>

                        <Text>
                            Are you sure want to withdraw that balance?
                        </Text>

                        {/* Save and Cancel Buttons */}
                        <View className="flex-row justify-between mt-[auto] mb-2 border-gray-200 pt-4">
                            <TouchableOpacity className="bg-primary flex-1 p-3 rounded-[8px] items-center mr-2">
                                <Text className="text-white font-semibold">Withdraw Balance</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setConfirmWithdrawModal(false)} className="border border-red-500 flex-1 p-3 rounded-[8px] items-center ml-2">
                                <Text className="text-red-500 font-semibold">Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View className="flex-1 justify-end items-center bg-black/50">

                <View className="bg-white w-full h-[90%] p-5 rounded-t-lg shadow-lg">
                    {/* Header */}
                    <View className="flex-row justify-center items-center pb-4 mb-3 border-b border-gray-200">
                        <Text className="text-lg font-semibold text-center">Withdraw Balance</Text>
                    </View>
                    <TouchableOpacity
                        onPress={onClose}
                        className="absolute top-5 right-5 p-1 rounded-full bg-white border border-gray-300"
                    >
                        <Ionicons name="close" size={20} color="black" />
                    </TouchableOpacity>

                    {/* Platforms */}
                    <View className="flex-column items-center justify-center mb-4 mt-3">
                        <Text className="text-gray-500 mb-2">
                            Balance
                        </Text>
                        <Text className="text-[28px] font-[600]">
                            $100
                        </Text>
                    </View>

                    <View className="mb-4">
                        <Text className="text-gray-600 mb-1">Withdraw Amount</Text>
                        <TextInput
                            className="border border-gray-300 p-3 rounded-md"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>

                    {/* Date of Birth */}
                    <View className="mb-4">
                        <Text className="text-gray-600 mb-1">Withdraw Method</Text>
                        <TextInput
                            className="border border-gray-300 p-3 rounded-md"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>



                    {/* Save and Cancel Buttons */}
                    <View className="flex-row justify-between mt-[auto] mb-2 border-gray-200 pt-4">
                        <TouchableOpacity
                            onPress={() => setConfirmWithdrawModal(true)}
                        className="bg-primary flex-1 p-3 rounded-[8px] items-center mr-2">
                            <Text className="text-white font-semibold">Withdraw Balance</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setConfirmWithdrawModal(false)} className="border border-red-500 flex-1 p-3 rounded-[8px] items-center ml-2">
                            <Text className="text-red-500 font-semibold">Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
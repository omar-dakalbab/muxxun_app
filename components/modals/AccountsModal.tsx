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
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import Visa from '../../assets/visa.png';
export default function AccountsModal({
    visible,
    onClose
}) {
    const [selectedMethod, setSelectedMethod] = useState("credit");

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
        >


            <View className="flex-1 justify-end items-center bg-black/50">
                <View className="bg-white w-full h-[90%] p-5 rounded-t-lg shadow-lg">
                    {/* Header */}
                    <View className="flex-row justify-center items-center pb-4 mb-3 border-b border-gray-200">
                        <Text className="text-lg font-semibold text-center">Accounts</Text>
                    </View>
                    <TouchableOpacity
                        onPress={onClose}
                        className="absolute top-5 right-5 p-1 rounded-full bg-white border border-gray-300"
                    >
                        <Ionicons name="close" size={20} color="black" />
                    </TouchableOpacity>

                    {/* Payment Methods */}
                    <Text className="text-sm text-gray-600 mb-2">Add payment method</Text>
                    <View className="flex-row gap-2 mb-4">
                        <TouchableOpacity
                            className={`flex-row items-center px-4 py-2 rounded-full text-sm font-medium ${selectedMethod === "credit"
                                ? "bg-primary text-white"
                                : "border border-gray-300"
                                }`}
                            onPress={() => setSelectedMethod("credit")}
                        >
                            <FontAwesome name="credit-card" size={16} color={selectedMethod === "credit" ? "white" : "black"} />
                            <Text className={`ml-2 ${selectedMethod === "credit" ? "text-white" : "text-black"}`}>Credit Card</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className={`flex-row items-center px-4 py-2 rounded-full text-sm font-medium ${selectedMethod === "paypal"
                                ? "bg-primary text-white"
                                : "border border-gray-300"
                                }`}
                            onPress={() => setSelectedMethod("paypal")}
                        >
                            <FontAwesome name="paypal" size={16} color={selectedMethod === "paypal" ? "white" : "black"} />
                            <Text className={`ml-2 ${selectedMethod === "paypal" ? "text-white" : "text-black"}`}>Paypal</Text>
                        </TouchableOpacity>
                    </View>

                    {/* Form */}
                    <View className="space-y-3">
                        <View>
                            <Text className="text-sm text-gray-600">First Name</Text>
                            <TextInput
                                placeholder="Harvey Specter"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1"
                            />
                        </View>
                        <View>
                            <Text className="text-sm text-gray-600">Last Name</Text>
                            <TextInput
                                placeholder="Harvey Specter"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1"
                            />
                        </View>
                        <View>
                            <Text className="text-sm text-gray-600">Card Number</Text>
                            <TextInput
                                placeholder="123 *** *** ***"
                                keyboardType="numeric"
                                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1"
                            />
                        </View>
                        <View className="flex-row gap-3">
                            <View className="flex-1">
                                <Text className="text-sm text-gray-600">Expiry Date</Text>
                                <TextInput
                                    placeholder="MM/YY"
                                    keyboardType="numeric"
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1"
                                />
                            </View>
                            <View className="flex-1">
                                <Text className="text-sm text-gray-600">CVV</Text>
                                <TextInput
                                    placeholder="***"
                                    keyboardType="numeric"
                                    secureTextEntry
                                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm mt-1"
                                />
                            </View>
                        </View>
                    </View>

                    {/* Buttons */}
                    <View className="flex-row justify-between mt-6 mt-[auto] mb-3 px-4">
                        <TouchableOpacity className="flex-1 bg-primary text-white py-3 rounded-lg items-center mr-2">
                            <Text className="text-white font-medium text-sm">Add Payment</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 border border-red-500 text-red-500 py-3 rounded-lg items-center ml-2">
                            <Text className="text-red-500 font-medium text-sm">Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}
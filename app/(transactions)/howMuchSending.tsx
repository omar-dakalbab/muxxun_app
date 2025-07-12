import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    Modal,
} from 'react-native';
import { useRouter } from 'expo-router';
import HeaderNavigation from '@/components/HeaderNavigations';
import CurrencyInput from '@/components/CurrencyInput';
import ChooseContainerCard from '@/components/ui/ChooseContainerCard';
import { Banknote, Blinds, Clock } from 'lucide-react-native';

const HowMuchSending: React.FC = () => {
    const router = useRouter();
    const [modalVisible, setModalVisible] = useState(false);
    const transferFee = '0.058 GBP';
    const ourFee = '10 GBP';
    const ItemInformation = ({
        title,
        description,
        icon,
        button,
    }: {
        title: string;
        description?: string;
        icon?: React.ReactNode;
        button?: string;
    }) => (
        <View className="flex-row justify-between items-center mb-4 px-2">
            <View className="flex-row items-start space-x-3">
                {icon}
                <View>
                    <Text className="text-footnote text-gray600">{title}</Text>
                    {description && (
                        <Text className="text-h5 font-semibold text-black mt-2">
                            {description}
                        </Text>
                    )}
                </View>
            </View>
            {button && (
                <View className="flex-row items-center space-x-2 bg-white rounded-full px-4 py-3 border border-black">
                    <Text className="text-footnote text-black font-semibold">
                        {button}
                    </Text>
                </View>
            )}
        </View>
    );

    return (
        <>
            <SafeAreaView className="flex-1 bg-white">
                <HeaderNavigation />
                <View className="px-6 mt-4 flex-1">
                    <Text className="text-h2 font-bold mb-4">
                        How much are you sending?
                    </Text>
                    <Text className="text-gray-700 text-footnote mb-4">
                        The 100$ will arrive in Christian M.’s account in seconds
                    </Text>

                    <CurrencyInput caption="Balance: 500 GBP" />
                    <Text className="text-gray-700 text-footnote mb-4 mt-1">
                        We will convert 199.28 GBP after fees
                    </Text>
                    <CurrencyInput caption="User gets" />

                    <Text className="text-black text-h5 font-semibold mb-4 mt-3">
                        Paying with
                    </Text>
                    <ChooseContainerCard
                        icon={<Banknote className="text-black" />}
                        title="MXXUS GBP Balance"
                        description="You have 500 GBP"
                        buttonText="Change"
                        onPress={() => router.push('/(topup)/paymentOption')}
                    />

                    <ItemInformation
                        title="Arrives"
                        description="In seconds"
                        icon={<Clock className="text-black" />}
                    />
                    <ItemInformation
                        title="Total fees"
                        description="Included in EUR amount"
                        icon={<Blinds className="text-black" />}
                        button="11.07 GBP"
                    />
                </View>

                <Pressable
                    onPress={() => setModalVisible(true)}
                    className="bg-black rounded-lg mx-4 h-16 items-center justify-center"
                >
                    <Text className="text-base font-semibold text-white">
                        Sell GBP
                    </Text>
                </Pressable>
            </SafeAreaView>

            <Modal
                visible={modalVisible}
                transparent
                animationType='fade'
                onRequestClose={() => setModalVisible(false)}
            >
                {/* dark overlay + align sheet to bottom */}
                <View className="flex-1 justify-end" style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                }}>
                    {/* bottom sheet container */}
                    <View className="bg-white rounded-3xl p-6 m-4">
                        <Text className="text-h4 font-bold mb-4">Total fees</Text>

                        {/* white card holding the rows */}
                        <View className="bg-gray-100 rounded-xl p-4 mb-6">
                            {/* transfer fee row */}
                            <View className="flex-row justify-between mb-8">
                                <Text className="text-base text-gray700">Transfer fee</Text>
                                <Text className="text-base font-semibold text-black">
                                    {transferFee}
                                </Text>
                            </View>
                            {/* our fee row */}
                            <View className="flex-row justify-between">
                                <Text className="text-base text-gray700">Our fee</Text>
                                <Text className="text-base font-semibold text-black">
                                    {ourFee}
                                </Text>
                            </View>
                        </View>

                        {/* Close or Confirm */}
                        <Pressable
                            onPress={() => {
                                setModalVisible(false);
                                router.push('/(transactions)/reviewTransactionDetails');
                            }}
                            className="bg-black py-3 rounded-lg"
                        >
                            <Text className="text-center text-white font-semibold">
                                Sell GBP
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default HowMuchSending;

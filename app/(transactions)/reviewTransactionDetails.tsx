import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    Modal,
} from 'react-native';
import HeaderNavigation from '@/components/HeaderNavigations';
import ChooseContainerCard from '@/components/ui/ChooseContainerCard';
import { Banknote } from 'lucide-react-native';
import MainContainerCard from '@/components/ui/MainContainerCard';
import { useRouter } from 'expo-router';

const ReviewTransactionDetails: React.FC = () => {
    const applicantData = [
        { label: "Beneficiary", value: "Dominique Angoa" },
        { label: "Beneficiary’s account number", value: "23521244325" },
        { label: "You’re sending", value: "£250" },
        { label: "Salomon UI/UX will receive exactly", value: "£250" },
        { label: "Our fee", value: "£2.95" },
    ];

    const renderCard = (data: any) => (
        <View className="bg-gray100 p-4 rounded-2xl my-4">
            {data.map((item: any, index: any) => (
                <View
                    key={index}
                    className="flex-row items-center justify-between"
                    style={{ marginBottom: index === data.length - 1 ? 0 : 16 }}
                >
                    <View>
                        <Text className="text-gray500 text-footnote">{item.label}</Text>
                        <Text className="text-black font-semibold text-h5">
                            {item.value}
                        </Text>
                    </View>
                </View>
            ))}
        </View>
    );

    const [modalVisible, setModalVisible] = useState(false);
    const router = useRouter();
    return (
        <>
            <SafeAreaView className="flex-1 bg-white">
                <HeaderNavigation />
                <View className="px-6 mt-4 flex-1">
                    <Text className="text-h2 font-bold mb-4">
                        Review details
                    </Text>
                    <Text className="text-gray-700 text-footnote mb-4">
                        The £250 will arrive in Salomon's UIUX account in a matter of seconds.
                    </Text>

                    <View>
                        <Text className="text-black font-semibold mb-2 text-h5">
                            Transfer from
                        </Text>
                        <ChooseContainerCard
                            icon={<Banknote size={24} />}
                            title="Salomon's UIUX account"
                            description='This is the account'
                            buttonText="Change"
                        />
                    </View>

                    <Text className="text-black font-semibold mb-1 text-h5">
                        Transfer to
                    </Text>
                    {renderCard(applicantData)}
                </View>
                <Pressable
                    className="bg-black rounded-lg mx-4 h-16 items-center justify-center"
                    onPress={() => setModalVisible(true)}
                >
                    <Text className="text-base font-semibold text-white">
                        Continue
                    </Text>
                </Pressable>

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <Pressable
                        onPress={() => setModalVisible(false)}
                        className="flex-1 justify-end items-center"
                        style={{
                            backgroundColor: 'rgba(0, 0, 0, 0.5)',
                        }}>
                        <View className="bg-white rounded-3xl p-6 w-full">
                            <Text className="text-h3 font-semibold mb-4">
                                Change your balance
                            </Text>
                            <Text className="text-gray-700 text-footnote mb-4">
                                Personal balance</Text>
                            <MainContainerCard
                                title="+44 612 4613 500"
                                description="9 000 GBP available"
                                icon={<Text>🇬🇧</Text>}
                                onPress={() => {
                                    router.push('/(transactions)/confirmPasscode');
                                }}
                            />
                            <Text className="text-gray-700 text-footnote mb-4">
                                Personal balance</Text>
                            <MainContainerCard
                                title="+44 612 4613 500"
                                description="9 000 GBP available"
                                icon={<Text>🇬🇧</Text>}
                                onPress={() => {
                                    router.push('/(transactions)/confirmPasscode');
                                }}
                            />
                        </View>
                    </Pressable>
                </Modal>
            </SafeAreaView>
        </>
    );
};

export default ReviewTransactionDetails;

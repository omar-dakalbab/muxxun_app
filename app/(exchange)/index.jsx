import React from 'react';
import { Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TouchableWithoutFeedback, View } from 'react-native';
import { useRouter } from 'expo-router';

import HeaderNavigation from '@/components/HeaderNavigations';
import CurrencyConvertInput from '@/components/home/CurrencyConvertInput';
import { Button } from '@/components/ui/Button';

const ExchangeScreen = () => {
    const router = useRouter();

    const handleSell = () => {
        router.push({ pathname: '/exchangeDetail' });
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <KeyboardAvoidingView
                className="flex-1 bg-white"
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
            >
                <View className="flex-1 justify-between">
                    <HeaderNavigation />

                    <View className="mt-4 mx-6">
                        <Text className="text-h1 font-bold mb-3">
                            How much do you want to convert?
                        </Text>

                        <CurrencyConvertInput />

                        <View className="mt-4 flex flex-row justify-between items-center mx-2">
                            <Text className="text-gray700 text-footnote font-semibold">
                                Convert fee
                            </Text>
                            <Text className="text-black text-h5 font-semibold">0.0 GBP</Text>
                        </View>

                        <View className="mt-6 flex flex-row justify-between items-center mx-2">
                            <Text className="text-gray700 text-footnote font-semibold">
                                Our fee
                            </Text>
                            <Text className="text-primary text-h5 font-semibold">0.0 GBP</Text>
                        </View>

                        <View className="mt-6 flex flex-row justify-between items-center mx-2">
                            <Text className="text-gray700 text-footnote font-semibold">
                                Guaranteed rate
                            </Text>
                            <View className="flex-row items-center">
                                <Image
                                    source={require('@/assets/chart histogram.png')}
                                    className="w-6 h-6"
                                />
                                <Text className="text-primary text-h5 ml-3 font-semibold">
                                    0.0 GBP
                                </Text>
                            </View>
                        </View>
                    </View>

                    <View className="pb-10 mx-5">
                        <Button label="Sell GBP" onPress={handleSell} />
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    );
};

export default ExchangeScreen;

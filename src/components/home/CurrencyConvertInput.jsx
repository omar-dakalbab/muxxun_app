import React from 'react';
import { View, Pressable, Image } from 'react-native';
import CurrencyInput from '../CurrencyInput';

export default function CurrencyConvertInput() {
    const handleSwap = () => {
        // TODO: swap your “from” / “to” currencies here
    };

    return (
        <View className="relative my-4">
            <CurrencyInput caption="You have 500 GBP available" />
            <View className="absolute left-[70%] -translate-x-1/2 top-[70px] z-10">
                <Pressable className="p-3 rounded-xl bg-white shadow items-center justify-center border border-gray400">
                    <Image source={require("@/assets/updown.png")} className="w-6 h-6" />
                </Pressable>
            </View>
            <CurrencyInput
                highlighted={true}
                caption="Amount after conversion"
                onCurrencyChange={(currency) => console.log("Selected:", currency)}
            />
        </View>
    );
}

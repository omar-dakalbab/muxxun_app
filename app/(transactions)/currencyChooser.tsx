import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import CurrencyChooser from '@/components/currencyChooser/currencyChooser'

export default function currencyChooser() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <CurrencyChooser
                goTo='/(transactions)/searchUser'
                onClose={() => { }}
            />
        </SafeAreaView>
    )
}
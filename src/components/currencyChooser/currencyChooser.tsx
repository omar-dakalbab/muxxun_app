import React, { useState, useMemo } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    SectionList,
    TextInput,
    Pressable,
} from 'react-native';
import { ArrowLeft, Search, X } from 'lucide-react-native';
import { useRouter } from 'expo-router';

interface Currency {
    label: string;
    desc: string;
    flag: string;
}

interface Props {
    onClose?: () => void;
    goTo?: string;
    onSelectCurrency?: (currency: Currency) => void;
}

export default function CurrencyChooser({ onClose, goTo, onSelectCurrency }: Props) {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState('');
    const [recentCurrencies, setRecentCurrencies] = useState<Currency[]>([]);

    const ALL: Currency[] = [
        { label: 'USD', flag: '🇺🇸', desc: 'United States Dollar' },
        { label: 'GBP', flag: '🇬🇧', desc: 'British Pound' },
        { label: 'EUR', flag: '🇪🇺', desc: 'Euro' },
        { label: 'JPY', flag: '🇯🇵', desc: 'Japanese Yen' },
        { label: 'TRY', flag: '🇹🇷', desc: 'Turkish Lira' },
        { label: 'CAD', flag: '🇨🇦', desc: 'Canadian Dollar' },
        { label: 'AUD', flag: '🇦🇺', desc: 'Australian Dollar' },
        { label: 'CHF', flag: '🇨🇭', desc: 'Swiss Franc' },
        { label: 'CNY', flag: '🇨🇳', desc: 'Chinese Yuan' },
        { label: 'INR', flag: '🇮🇳', desc: 'Indian Rupee' },
    ];

    const filtered = useMemo(() => {
        const q = searchQuery.trim().toLowerCase();
        if (!q) return ALL;
        return ALL.filter(
            ({ label, desc }) =>
                label.toLowerCase().includes(q) ||
                desc.toLowerCase().includes(q)
        );
    }, [searchQuery]);

    const handleClose = () => {
        if (onClose) onClose!();
        if (goTo)
            router.push({
                pathname: goTo,
            });

        else router.back();
    };

    const selectCurrency = (c: Currency) => {
        setRecentCurrencies((prev) => {
            const deduped = prev.filter((x) => x.label !== c.label);
            return [c, ...deduped].slice(0, 5);
        });

        if (onSelectCurrency) {
            onSelectCurrency(c);
        }
    };

    const sections = [
        { title: 'Recent currencies', data: recentCurrencies },
        { title: 'Available currencies', data: filtered },
    ];

    const renderItem = ({ item }: { item: Currency }) => (
        <Pressable
            onPress={() => {
                selectCurrency(item);
                handleClose();
            }}
            className="mx-5 mb-3"
        >
            <View className="flex-row items-center bg-gray-100 rounded-xl h-24 px-5">
                <Text className="text-2xl mr-4">{item.flag}</Text>
                <View>
                    <Text className="text-base font-semibold text-black">
                        {item.label}
                    </Text>
                    <Text className="text-sm text-gray-500">{item.desc}</Text>
                </View>
            </View>
        </Pressable>
    );

    const renderSectionHeader = ({
        section: { title, data },
    }: {
        section: { title: string; data: Currency[] };
    }) =>
        data.length > 0 ? (
            <Text className="px-5 pt-4 pb-2 text-sm font-semibold text-gray-500 bg-white">
                {title}
            </Text>
        ) : null;

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-col px-5 py-5">
                <TouchableOpacity onPress={handleClose}>
                    <ArrowLeft size={24} color="#111827" />
                </TouchableOpacity>
                <Text className="text-h1 font-bold text-black mt-4 mb-6">
                    Choose currency
                </Text>
                <View style={{ width: 24 }} />
            </View>

            {/* Search Bar */}
            <View className="mx-5 mb-6">
                <View className="flex-row items-center bg-gray100 rounded-xl h-12 px-4">
                    <Search size={20} color="#9ca3af" />
                    <TextInput
                        className="ml-3 flex-1 text-base text-black"
                        placeholder="Search"
                        placeholderTextColor="#9ca3af"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                    />
                </View>
            </View>
            <SectionList
                sections={sections}
                keyExtractor={(item) => item.label}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
            {/* <Pressable
                onPress={handleClose}
                className="bg-black rounded-lg mx-4 h-16 items-center justify-center"
            >
                <Text className="text-base font-semibold text-white">Done</Text>
            </Pressable> */}
        </SafeAreaView>
    );
}

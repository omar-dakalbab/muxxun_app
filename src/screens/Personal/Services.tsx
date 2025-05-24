import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import ContButton from '@/components/ContButton';
import Layout from '@/components/layout';
import HeaderNavigation from '@/components/HeaderNavigations';
import ToggleInput from '@/components/toggleInput';

const serviceOptions = [
    { title: 'Experience', description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { title: 'Money transfer', description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { title: 'SWIFT payments', description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { title: 'SEPA Inst', description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { title: 'Target 2 payment', description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { title: 'Cards', description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx' },
    { title: 'Cash Over Counter', description: 'xxxxxxxxxxxxxxxxxxxxxxxxxxx' },
];

export default function Services({ navigation }) {
    return (
        <View className="flex-1 bg-white">
            <HeaderNavigation title="" />

            <Layout
                footer={
                    <ContButton
                        label="Continue"
                        onPress={() => navigation.navigate('persInfo')}
                        size="lg"
                    />
                }
            >
                {/* Header */}
                <View className="mb-4">
                    <Text className="text-primary font-bold text-h2 mb-2">
                        Services
                    </Text>
                    <Text className="text-gray700 text-body w-11/12">
                        What types of services do you plan to use?
                    </Text>
                </View>

                {/* Services List */}
                <ScrollView className="mb-10" showsVerticalScrollIndicator={false}>
                    {serviceOptions.map((service, index) => (
                        <ToggleInput
                            key={index}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </ScrollView>
            </Layout>
        </View>
    );
}

import { Text, View, Pressable, ImageSourcePropType } from 'react-native';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import AccountCard from '@/components/ui/AccountCard';
import { ScrollView } from 'react-native-gesture-handler';
import Layout from '@/components/layout';
import HeaderNavigation from '@/components/HeaderNavigations';
import ScreenHeader from '@/components/ui/ScreenHeader';

type Nav = {
    navigation: {
        navigate: (screen: string) => void;
    };
};

const verificationOptions = [
    { title: 'Personal information', screen: 'persInfo', icon: require('@/assets/car.png'), description: "XXXX XXXX XXXX XXXX" },
    { title: 'Activites', screen: 'Activites', icon: require('@/assets/car.png'), description: "XXXX XXXX XXXX XXXX" },
    { title: 'Operations activity', screen: 'OperationActivity', icon: require('@/assets/car.png'), description: "XXXX XXXX XXXX XXXX" },
    { title: 'Services', screen: 'Services', icon: require('@/assets/car.png'), description: "XXXX XXXX XXXX XXXX" },
    {
        title: 'Identity verification',
        screen: 'IdentityVerification',
        icon: require('@/assets/car.png'),
        description: "XXXX XXXX XXXX XXXX",
    },
];



const SectionTitle = ({ title }: { title: string }) => (
    <View className='mt-4'>
        <Text className="font-inter-bold text-h5 font-semibold">{title}</Text>
    </View>
);

const SkipButton = ({ navigation }) => (
    <View className="w-full px-6">
        <Pressable className="bg-white w-full h-20 rounded-full items-center justify-center" onPress={() => {
            navigation.navigate('SignApplications'); // Navigate to Home or any other screen
        }}>
            <Text className="text-black font-semibold text-xl font-inter-bold">Skip for now</Text>
        </Pressable>
    </View>
);

export default function VerifyIdentify({ navigation }: Nav) {
    return (
        <View className="bg-white flex-1">
            <HeaderNavigation />
            <Layout>
                <ScreenHeader
                    title="Verify your identity"
                    description="We need to check that you are who you say you are. Here's how you can do it."
                />
                <SectionTitle title="Method of verification" />

                <ScrollView
                    className="flex-1 mt-2"
                    showsVerticalScrollIndicator={false}
                >
                    {verificationOptions.map(({ title, screen, icon, description }, index) => (
                        <AccountCard
                            key={index}
                            title={title}
                            icon={icon}
                            onClick={() => {
                                navigation.navigate(screen)
                            }}
                            description={description}
                        />
                    ))}
                </ScrollView>

                <SkipButton navigation={navigation} />
            </Layout>
        </View>
    );
}

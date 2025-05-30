import { Text, View, Pressable } from 'react-native';
import React from 'react';
import AccountCard from '@/components/ui/AccountCard';
import { ScrollView } from 'react-native-gesture-handler';
import Layout from '@/components/layout';
import HeaderNavigation from '@/components/HeaderNavigations';
import ScreenHeader from '@/components/ui/ScreenHeader';
import { useSelectModal } from '@/store/useSelectModal';
import { router } from 'expo-router';


const verificationOptions = [
    { title: 'Personal information', screen: 'PersonelInformation', icon: require('@/assets/car.png'), description: "XXXX XXXX XXXX XXXX" },
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

const SkipButton = () => (
    <View className="w-full px-6">
        <Pressable className="bg-white w-full h-20 rounded-full items-center justify-center" onPress={() => {
            router.push({
                pathname: "/(account)/Personal/SignApplications",
            })
        }}>
            <Text className="text-black font-semibold text-xl font-inter-bold">Skip for now</Text>
        </Pressable>
    </View >
);

export default function VerifyIdentify() {
    const { selections, setSelection } = useSelectModal();
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
                                router.push({
                                    pathname: `/(account)/Personal/${screen}`,
                                });
                            }}
                            description={description}
                        // isCardActive={selections.includes(title)}
                        />
                    ))}
                </ScrollView>

                <SkipButton />
            </Layout>
        </View>
    );
}

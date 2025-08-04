import HeaderNavigation from '@/components/HeaderNavigations'
import MyAccountsCard from '@/components/MyAccountCard'
import { router } from 'expo-router';
import { Copy } from 'lucide-react-native';
import React, { Component } from 'react'
import { Image, Pressable, ScrollView, Share, Text, View } from 'react-native'



const applicantData = [
    { label: "Receiver", value: "Salomon UIIX" },
    { label: "Sort code", value: "3252 32 12" },
    { label: "Accout number", value: "832498713948" },
    { label: "BIC", value: "ISSUED IN UNITED KINGDOM" },

];

const onShare = async () => {
    try {
        const result = await Share.share({
            message: 'Check out this awesome content!',
            url: 'https://example.com', // optional
            title: 'Awesome Link',      // iOS only
        });

        if (result.action === Share.sharedAction) {
            if (result.activityType) {
                // shared with activity type of result.activityType
                console.log('Shared with activity type:', result.activityType);
            } else {
                // shared
                console.log('Shared successfully');
            }
        } else if (result.action === Share.dismissedAction) {
            // dismissed
            console.log('Share dismissed');
        }
    } catch (error) {
        console.error('Error sharing:', error.message);
    }
};
const renderCard = (data) => (
    <View className="bg-gray100 p-4 rounded-2xl my-4 mx-4">
        {data.map((item, index) => (
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
                <Pressable className="p-3 border border-gray400 bg-white rounded-lg items-center justify-center shadow-sm">
                    <Copy className="text-gray-500 rotate-90" size={18} />
                </Pressable>
            </View>
        ))}
    </View>
);

export class AccountDetails extends Component {
    render() {
        return (
            <View className='bg-white flex-1'>
                <HeaderNavigation title='Salomons Account - GBP' />
            <View className='mt-3 mb-3'>
                <MyAccountsCard
                    image={require("@/assets/Flag.png")}
                    amount="500.00"
                    currency='$'
                    button1Label="Exchange"
                    button2Label="Statement"
                    onButton1Press={() => router.push("/(exchange)/")}
                    onButton2Press={() => router.push("/Documents")}
                    button1image={require("@/assets/exchange.png")}
                    button2image={require("@/assets/documentgray.png")}
                

                />
                </View>
                {/* account details move it! */}

                {/* Applicant Section */}
                <View className="flex-row justify-between items-center mx-4 mt-8">
                    <Text className="text-h5 font-bold font-inter-bold">
                        International transfers only
                    </Text>
                    <Pressable
                        onPress={onShare}
                    >
                        <Text className="text-primary text-h4 font-semibold font-inter ">Share</Text>
                    </Pressable>
                </View>
                {renderCard(applicantData)}
            </View>
        )
    }
}

export default AccountDetails

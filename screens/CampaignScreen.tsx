import React from 'react';
import { FlatList, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MainCard from '../components/MainCard';
import SearchBar from '../components/SearchBar';
import CampaignStatusBar from '../components/CampaignStatusBar';
import Loading from '../components/Loading';
import Header from '../components/Header';

let campaigns = [
    {
        id: 1,
        brand: 'Nike',
        title: 'Summer Campaign With Nike',
        date: 'July 10, 2024 to August 10, 2024',
        budget: '$1.5K',
        posts: ['2 Photo Post', '1 Reels Video Post'],
        status: 'Waiting Acceptance',
        tasks: [
            {
                type: 'Photo Post',
                brief: "Influencer Do's & Don'ts: Summer Air Jordan Campaign",
                do: [
                    'Train in Heat: Showcase peak performance.',
                    '#RiseAboveTheHeat: Challenge yourself & inspire others.',
                    'Be You: Authentic training journey, high-quality content.',
                    'Engage & Promote: Respond, use hashtags, highlight Air Jordans for summer.',
                    'Align with Nike: Perseverance, athleticism, innovation.',
                ],
                dont: [
                    'Just Sell Shoes: Focus on training, not just placement.',
                    'Be Generic: Stand out with creative content.',
                    'Go Negative: Keep it positive and inspiring.',
                    'Overshare Hashtags: #TooMany #JustaFew.',
                    'Fake Engagement: Be authentic, disclose partnerships.',
                ],
                caption: "Summer's Here. Don't Just Survive It. Rise Above It. The new Air Jordan collection is built for peak performance in the heat.\n\nJoin us and defy limitations. Share your training journey with #RiseAboveTheHeat. Coming soon to Nike stores and online. #AirJordan #summerHeat #JustDoIt",
            },
        ],
    },
    {
        id: 2,
        brand: 'Nike',
        title: 'Summer Campaign With Nike',
        date: 'July 10, 2024 to August 10, 2024',
        budget: '$1.5K',
        status: 'Finished Campaign',
        posts: ['2 Photo Post', '1 Reels Video Post'],
        tasks: [
            {
                type: 'Photo Post',
                brief: "Influencer Do's & Don'ts: Summer Air Jordan Campaign",
                do: [
                    'Train in Heat: Showcase peak performance.',
                    '#RiseAboveTheHeat: Challenge yourself & inspire others.',
                    'Be You: Authentic training journey, high-quality content.',
                    'Engage & Promote: Respond, use hashtags, highlight Air Jordans for summer.',
                    'Align with Nike: Perseverance, athleticism, innovation.',
                ],
                dont: [
                    'Just Sell Shoes: Focus on training, not just placement.',
                    'Be Generic: Stand out with creative content.',
                    'Go Negative: Keep it positive and inspiring.',
                    'Overshare Hashtags: #TooMany #JustaFew.',
                    'Fake Engagement: Be authentic, disclose partnerships.',
                ],
                caption: "Summer's Here. Don't Just Survive It. Rise Above It. The new Air Jordan collection is built for peak performance in the heat.\n\nJoin us and defy limitations. Share your training journey with #RiseAboveTheHeat. Coming soon to Nike stores and online. #AirJordan #summerHeat #JustDoIt",
            },
        ],
    },
    {
        id: 3,
        brand: 'Nike',
        title: 'Summer Campaign With Nike',
        date: 'July 10, 2024 to August 10, 2024',
        budget: '$1.5K',
        status: 'Cancelled Campaign',
        posts: ['2 Photo Post', '1 Reels Video Post'],
        tasks: [
            {
                type: 'Photo Post',
                brief: "Influencer Do's & Don'ts: Summer Air Jordan Campaign",
                do: [
                    'Train in Heat: Showcase peak performance.',
                    '#RiseAboveTheHeat: Challenge yourself & inspire others.',
                    'Be You: Authentic training journey, high-quality content.',
                    'Engage & Promote: Respond, use hashtags, highlight Air Jordans for summer.',
                    'Align with Nike: Perseverance, athleticism, innovation.',
                ],
                dont: [
                    'Just Sell Shoes: Focus on training, not just placement.',
                    'Be Generic: Stand out with creative content.',
                    'Go Negative: Keep it positive and inspiring.',
                    'Overshare Hashtags: #TooMany #JustaFew.',
                    'Fake Engagement: Be authentic, disclose partnerships.',
                ],
                caption: "Summer's Here. Don't Just Survive It. Rise Above It. The new Air Jordan collection is built for peak performance in the heat.\n\nJoin us and defy limitations. Share your training journey with #RiseAboveTheHeat. Coming soon to Nike stores and online. #AirJordan #summerHeat #JustDoIt",
            },
        ],
    },
];

// campaigns = [];

export default function CampaignScreen() {

    const items = [
        { id: 1, text: "All" },
        { id: 2, text: "Waiting Acceptance" },
        { id: 3, text: "Active Campaign" },
        { id: 4, text: "Finished Campaign" },
        { id: 5, text: "Cancelled Campaign" },
        // { id: 6, text: "Draft Campaign" },
        // { id: 7, text: "Archived Campaign" },
    ];




    if (campaigns.length === 0) {
        return (
            <SafeAreaView className="bg-defaultBackground px-4 min-h-full">
                <Header />
                <SearchBar />
                <CampaignStatusBar items={items} />
                <Loading />
            </SafeAreaView>
        );
    }

    return (
        <SafeAreaView className="bg-defaultBackground px-4 flex-1">
            <Header />
            <SearchBar />
            <CampaignStatusBar items={items} />
            <View className="flex-1">
                <FlatList
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}
                    data={campaigns}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <MainCard item={item} isCampaign={true} />
                    )}
                />
            </View>
        </SafeAreaView>
    )
}
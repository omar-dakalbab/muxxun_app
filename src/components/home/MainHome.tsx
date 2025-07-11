import React, { useState, useRef } from "react";
import { View, FlatList, useWindowDimensions, Animated } from "react-native";
import Skeleton from "@/components/home/Skeleton";
import AccountHeader from "./AccountHeader";
import DotsIndicator from "./DotsIndicator";
import TransactionsList from "./TransactionList";
import TransferChart from "./TransferChart";
import Widgets from "./Widgets";

export default function MainHome({ loading }: { loading?: boolean }) {
    const { width } = useWindowDimensions();
    const cards = [<AccountHeader />, <AccountHeader />, <AccountHeader />];
    const [activeCard, setActiveCard] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const scrollY = useRef(new Animated.Value(0)).current

    if (loading) {
        return (
            <View className="flex-1 bg-white">
                <Skeleton />
            </View>
        );
    }
    return (
        <Animated.ScrollView className="flex-1 bg-white"
            scrollEventThrottle={16}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                { useNativeDriver: true }
            )}>
            <View style={{ height: 300 }}>
                <FlatList
                    ref={flatListRef}
                    data={cards}
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(_, index) => index.toString()}
                    onMomentumScrollEnd={e => {
                        const page = Math.round(e.nativeEvent.contentOffset.x / width);
                        setActiveCard(page);
                    }}
                    renderItem={({ item }) => (
                        <View style={{ width, paddingHorizontal: 16, marginBottom: 15 }}>{item}</View>
                    )}
                />
                <DotsIndicator count={cards.length} activeIndex={activeCard} />
            </View>
            <TransactionsList />
            <TransferChart />
            <Widgets scrollY={scrollY} />
        </Animated.ScrollView>
    );
}

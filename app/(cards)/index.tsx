import BottomBar from '@/components/BottomBar';
import HeaderNavigation from '@/components/HeaderNavigations';
import AccountHeader from '@/components/home/AccountHeader';
import DotsIndicator from '@/components/home/DotsIndicator';
import AccountCard from '@/components/ui/AccountCard';
import { router } from 'expo-router';
import React, { useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';


export default function Index() {
  const { width } = useWindowDimensions();
  const [activeCard, setActiveCard] = useState(0);
  const flatListRef = useRef<FlatList>(null);

  const cards = [
    require('@/assets/card.png'),
    require('@/assets/card.png'),
    require('@/assets/card.png'),
  ];

  return (
    <View className="flex-1 bg-white">
      <HeaderNavigation headerShown={false} />
      <ScrollView>
        <View className="flex-row justify-between items-center mx-6 mt-14">
          <Text className="text-h3 font-bold">Cards</Text>
          <Pressable onPress={() => router.push('/CreatePage')}>
            <Image className="h-6 w-6 object-contain" source={require('@/assets/add-circle.png')} />
          </Pressable>
        </View>

        <View className="flex-row items-center text-center mx-5 mt-6">
          <Pressable className="p-3 bg-gray100 w-32 rounded-3xl text-center items-center">
            <Text className="font-semibold text-h5">Physical cards</Text>
          </Pressable>
          <Pressable className="p-3 w-32 rounded-3xl text-center items-center">
            <Text className="font-bold text-gray500 text-h5">Virtual cards</Text>
          </Pressable>
        </View>

        <View style={{ height: 250, width: width }} className='mt-8'>
          <ImageBackground
            source={require('@/assets/cardgradient.png')}
            resizeMode="cover"
            style={{
              flex: 1,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FlatList
              ref={flatListRef}
              data={cards}
              horizontal
              pagingEnabled
              showsHorizontalScrollIndicator={false}
              keyExtractor={(_, index) => index.toString()}
              onMomentumScrollEnd={(e) => {
                const page = Math.round(e.nativeEvent.contentOffset.x / width);
                setActiveCard(page);
              }}
              renderItem={({ item }) => (
                <View style={{ width, justifyContent: 'center', alignItems: 'center' }}>
                  <Pressable onPress={() => router.push('/CardDetails')}>
                    <Image
                      source={item}
                      resizeMode="contain"
                    />
                  </Pressable>
                </View>
              )}
            />
          </ImageBackground>
          <DotsIndicator count={cards.length} activeIndex={activeCard} />
        </View>

        <View className="mx-6 mt-4">
          <AccountCard
            title="Transactions"
            onClick={() => router.push('/CardHelp')}
            description="You can view all transactions"
            icon={require('@/assets/document icon.png')}
            alignTopIcon={true}
            whiteBg={true}
          />
          <Text className="mt-5 mb-3 text-gray500">Quick actions</Text>
          <AccountCard
            title="Manage card"
            onClick={() => router.push('/ManageCard')}
            description="You can manage your card here"
            icon={require('@/assets/credit card.png')}
            alignTopIcon={true}
          />
          <AccountCard
            buttonLabel="Show"
            title="Show details"
            description="Reveal your card details"
            icon={require('@/assets/church.png')}
            alignTopIcon={true}
          />
        </View>
      </ScrollView>
    </View>
  );
}

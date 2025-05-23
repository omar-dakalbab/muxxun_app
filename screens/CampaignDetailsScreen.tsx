import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Animated } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Camera } from 'lucide-react-native';
import NikeIcon from '../assets/nike.png';
import TaskItem from '../components/TaskItem';
import CampaignHeader from '../components/CampaignHeader';

const CampaignDetailsScreen = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const { item, isVisitor } = route.params;

    // const item = campaigns.find(campaign => campaign.id === id);

    // Modal visibility state and animated position
    const [modalVisible, setModalVisible] = useState(isVisitor);
    const [modalPosition] = useState(new Animated.Value(300)); // Start off-screen

    const [confirmModal, setConfirmModal] = useState(false);
    const [rejectModal, setRejectModal] = useState(false);

    useEffect(() => {
        if (modalVisible) {
            Animated.spring(modalPosition, {
                toValue: 0, // Slide up to position 0
                useNativeDriver: true,
            }).start();
        } else {
            Animated.spring(modalPosition, {
                toValue: 300, // Slide down off-screen
                useNativeDriver: true,
            }).start();
        }
    }, [modalVisible]);

    const handleAccept = () => {
        setModalVisible(false);
        setConfirmModal(true);

        // Handle accept logic (e.g., navigate or show a success message)
    };

    const handleReject = () => {
        setModalVisible(false);
        setRejectModal(true);
        // Handle reject logic (e.g., navigate to a different screen)
    };

    const statusColors = {
        'Waiting Acceptance': '#E6A01F',
        'Active Campaign': '#00AA5B',
        'Finished Campaign': '#2B2B2C',
        'Cancelled Campaign': '#DA3E33',
        // 'Draft Campaign': '#FFB800',
        // 'Archived Campaign': '#FF3D71',
    }

    const screenHeight = 667; // Screen height for modal positioning

    return (
        <SafeAreaView className="p-4 flex-1">
            <CampaignHeader title={item?.brand} onGoBack={() => navigation.goBack()} />
            <View className="max-h-[calc(100%-80px)]">
                <ScrollView className="mt-4" showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
                    <View className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
                        {/* Title with Icon */}
                        <View className="flex-row items-center mb-4">
                            <Image source={NikeIcon} className="w-10 h-10 mr-4" />
                            <Text className="text-xl font-bold">{item?.title}</Text>
                        </View>

                        {/* Two-Column Layout for Info */}
                        <View className="flex-row flex-wrap">
                            {/* Timeline */}
                            <View className="w-full flex-row items-center mb-4">
                                <Text className="text-gray-500 w-[40%]">Timeline:</Text>
                                <Text className="text-gray-700 w-1/2">{item?.date}</Text>
                            </View>

                            {/* Earnings */}
                            <View className="w-full flex-row items-center mb-4">
                                <Text className="text-gray-500 w-[40%]">Earnings:</Text>
                                <Text className="text-gray-700 w-1/2">{item?.budget}</Text>
                            </View>

                            {/* Campaign Status */}
                            <View className="w-full flex-row items-center mb-4">
                                <Text className="text-gray-500 w-[40%]">Campaign Status:</Text>
                                <View
                                    className="border rounded-[8px] text-xs py-1 px-2 flex-row items-center"
                                    style={{ borderColor: statusColors[item?.status] }}
                                >
                                    <View
                                        className="w-2 h-2 rounded-full mr-2"
                                        style={{ backgroundColor: statusColors[item?.status] }}
                                    />
                                    <Text className="text-xs" style={{ color: statusColors[item?.status] }}>
                                        {item?.status || 'Not Found'}
                                    </Text>
                                </View>
                            </View>

                            {/* Campaign Platform */}
                            <View className="w-full flex-row items-center mb-4">
                                <Text className="text-gray-500 w-[40%]">Campaign Platform:</Text>
                                <Image source={require('../assets/instagram.png')} />
                            </View>
                        </View>

                        {/* Campaign Type - Full Width */}
                        <View className="mt-3 flex-row w-full">
                            <Text className="text-gray-500 mb-2 w-[40%]">Campaign Type:</Text>
                            <View className="flex-column">
                                {item?.posts.map((post, index) => (
                                    <View key={index} className="flex-row items-center mb-2">
                                        <View className="border rounded-full p-1 border-borderSecondayColor bg-borderColor">
                                            <Camera size={16} color="black" />
                                        </View>
                                        <Text className="text-gray-700 ml-2">{post}</Text>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </View>


                    {item?.tasks?.length && <Text className="text-lg font-medium mb-4">Tasks ({item?.tasks?.length})</Text>}

                    {item?.tasks?.length > 0 ? item?.tasks?.map((task, index) => (
                        <TaskItem key={index} task={task} length={index} />
                    )) :
                        <View className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
                            <Text className="text-lg font-semibold text-gray-800 mb-2">No tasks found</Text>
                        </View>
                    }
                </ScrollView>
            </View>




            {item?.tasks?.length && <Animated.View
                style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    transform: [{ translateY: modalPosition }],
                }}
                className="bg-white rounded-t-xl p-5 shadow-lg"
            >
                <View className="flex-row justify-between">
                    <TouchableOpacity
                        onPress={handleAccept}
                        className="bg-primary flex-1 p-3 rounded-lg mx-2"
                    >
                        <Text className="text-white text-center">Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={handleReject}
                        className="flex-1 p-3 rounded-lg mx-2 border-red-500 border text-red-500 bg-white"
                    >
                        <Text className="text-red-500 text-center">Reject</Text>
                    </TouchableOpacity>
                </View>
            </Animated.View>}

            {/* CONFIRMATION MODAL */}
            {confirmModal && (
                <Animated.View className="bg-white rounded-xl p-6 absolute bottom-10 left-4 right-4 shadow-lg">
                    <Text className="text-lg font-bold text-center mb-4">
                        Are you sure you want to accept this campaign?
                    </Text>

                    <View className="flex-row justify-between">
                        <TouchableOpacity
                            onPress={() => setConfirmModal(false)}
                            className="flex-1 p-3 rounded-lg mx-2 border border-gray-300 text-gray-500 text-center bg-white"
                        >
                            <Text className="text-gray-500 text-center">No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className="bg-primary flex-1 p-3 rounded-lg mx-2"
                        >
                            <Text className="text-white text-center">Confirm</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            )}

            {rejectModal && (
                <Animated.View className="bg-white rounded-xl p-6 absolute bottom-10 left-4 right-4 shadow-lg">
                    <Text className="text-lg font-bold text-center mb-4">
                        Are you sure you want to reject this campaign?
                    </Text>

                    <View className="flex-row justify-between">
                        <TouchableOpacity
                            onPress={() => setConfirmModal(false)}
                            className="flex-1 p-3 rounded-lg mx-2 border border-gray-300 text-gray-500 text-center bg-white"
                        >
                            <Text className="text-gray-500 text-center">No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className="bg-primary flex-1 p-3 rounded-lg mx-2"
                        >
                            <Text className="text-white text-center">Reject</Text>
                        </TouchableOpacity>
                    </View>
                </Animated.View>
            )}

        </SafeAreaView>
    );
};

export default CampaignDetailsScreen;

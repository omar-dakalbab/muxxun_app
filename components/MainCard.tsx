import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import NikeIcon from '../assets/nike.png';
import InstagramIcon from '../assets/inst.png';
import CameraIcon from '../assets/camera.png';
import { useNavigation } from '@react-navigation/native';
import { Camera, Instagram } from 'lucide-react-native';


export default function MainCard({ item, isCampaign }) {
    const statusColors = {
        'Waiting Acceptance': '#E6A01F',
        'Active Campaign': '#00AA5B',
        'Finished Campaign': '#2B2B2C',
        'Cancelled Campaign': '#DA3E33',
        // 'Draft Campaign': '#FFB800',
        // 'Archived Campaign': '#FF3D71',
    }

    const navigation = useNavigation();

    return (
        <TouchableOpacity onPress={
            () => !isCampaign ? navigation.push(
                "CampaignDetails",
                { item: item, isVisitor: !isCampaign }
            ) : navigation.push(
                "ActiveCampaign",
                { item: item, isVisitor: !isCampaign }
            )
        }
            className="bg-white border border-gray-200 rounded-xl p-4 mb-4 shadow-sm"
            key={item.id}
        >
            {/* Campaign Header */}
            <View className="flex-row items-center justify-between rounded-full border-1 border-gray-300">
                <View className="flex-row items-center">
                    <Image
                        source={NikeIcon}
                        className="w-10 h-10 mr-4"
                    />
                    <Text className="text-lg font-bold text-gray-800">{item.brand}</Text>
                </View>
                <View className="flex-row items-center rounded-full border border-gray-200 p-3">
                    <Instagram
                        color={'red'}
                    />
                </View>
            </View>

            {/* Campaign Details */}
            <Text className="text-base font-semibold text-gray-800 mb-2">{item.title}</Text>
            <Text className="text-sm text-gray-500 mb-4">{item.date}</Text>
            <View className="flex-row space-x-2 mb-2">

                {item.posts.map((post, index) => (
                    <View className="bg-borderColor text-gray-700 text-xs py-1 pr-2 rounded-full flex-row justify-between items-center" key={index}>
                        <View className="w-7 h-7 rounded-full border-2 border-gray-300 flex justify-center items-center mr-1">
                            <Camera
                                size={16}
                                className="text-primary"
                            />
                        </View>
                        <Text>
                            {post}
                        </Text>

                    </View>
                ))}
            </View>


            {isCampaign ?
                <View className="flex-row items-center mb-2 justify-between mt-2">
                    <View>
                        <Text className="text-base font-bold text-gray-800">{item.budget}</Text>
                        <Text className="text-sm text-gray-500">Total Budget</Text>
                    </View>
                    <View>
                        <TouchableOpacity
                            style={{
                                borderWidth: 1,
                                borderColor: statusColors[item.status] || "#000",
                                borderRadius: 8,
                                paddingHorizontal: 12,
                                paddingVertical: 8,
                                marginHorizontal: 8
                            }}
                        >
                            <Text
                                style={{
                                    color: statusColors[item.status] || "#000",
                                    fontWeight: "600",
                                    textAlign: "center"
                                }}
                            >
                                {item.status}
                            </Text>
                        </TouchableOpacity>


                    </View>
                </View>
                :
                <View>
                    <Text className="text-base font-bold text-gray-800">{item.budget}</Text>
                    <Text className="text-sm text-gray-500 mb-3">Total Budget</Text>
                    <View className="flex-row w-full justify-between">
                        <TouchableOpacity
                            onPress={() => navigation.push(
                                "CampaignDetails",
                                { item: item, isVisitor: !isCampaign }
                            )}
                            className="flex-1 border border-primary rounded-[8px] px-6 py-3 mx-2">
                            <Text className="text-white font-semibold text-center text-primary">View Details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 bg-primary border border-primary rounded-[8px] px-6 py-3 mx-2">
                            <Text className="text-white font-semibold text-center">Accept</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }


        </TouchableOpacity >
    )
}


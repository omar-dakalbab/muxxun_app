import React, { useState } from "react";
import { View, Text, ScrollView, TextInput, TouchableOpacity, Image, Dimensions } from "react-native";
import { Banknote, Box, Calendar, Camera, ChartColumn, ChevronLast, ChevronLeft, ClipboardCheck, Comment, Eye, Grid, Heart, Instagram, Link, MessageCircle, MessageSquareText, Monitor, Quote, Share, Share2, Type, Upload, Video } from "lucide-react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import NikeIcon from '../assets/nike.png';
import VisaIcon from '../assets/visa.png';
import CircularIcon from "../components/CircularIcon";
import LabelIcon from "../components/LabelIcon";
import CampaignStatusBar from "../components/CampaignStatusBar";
import GoBackButton from "../components/GoBackButton";
import { useNavigation, useRoute } from "@react-navigation/native";
import { CircularIconText } from "../components/CircularIconText";
const CampaignTaskScreen = () => {
    const [activeTab, setActiveTab] = useState("Campaign Task");
    const route = useRoute();
    const navigation = useNavigation();
    const { item, isVisitor } = route.params;
    console.log(item)

    const campaignIcons = [
        {
            "Icon": "Calendar",
            "text": "Timeline:",
            "value": "Jul 10, 2024 - Aug 10, 2024",
            "isBadge": true,
            "backgroundColor": "#FFB800",
            "color": "#FFB800"
        },
        {
            "Icon": "Banknote",
            "text": "Earning:",
            "value": "$1.5K",
            "isBadge": true,
            "backgroundColor": "#FFB800",
            "color": "#FFB800"
        },
        {
            "Icon": "Banknote",
            "text": "Payment:",
            "value": <View className="flex-row items-center justify-center bg-contactUsIconBg rounded-full p-[6px] border border-billAddressColor">
                <Text className="text-billAddressColor">
                    Payment not active
                </Text>
            </View>,
            "isBadge": true,
            "backgroundColor": "#FFB800",
            "color": "#FFB800"
        },
        {
            "Icon": "Box",
            "text": "Campaign:",
            "value": <View className="flex-row items-center justify-center bg-greenLightColor rounded-full p-[8px] border border-accountActiveColor">
                <Text className="text-accountActiveColor">
                    Active
                </Text>
            </View>,
            "isBadge": true,
            "backgroundColor": "#FFB800",
            "color": "#FFB800"
        },
        {
            "Icon": "Monitor",
            "text": "Platform:",
            "value": <View className="flex-row items-center justify-center bg-borderColor rounded-full w-8 h-8 border border-borderLightColor">
                <Instagram
                    className="text-primary"
                    size={16}
                    color={"red"}
                />
            </View>,
            "isBadge": true,
            "backgroundColor": "#FFB800",
            "color": "#FFB800"
        },
        {
            "Icon": "Type",
            "text": "Type:",
            "value": <View className="flex-column">
                <View className="bg-borderColor text-gray-700 text-xs py-1 pr-2 rounded-full flex-row items-center">
                    <View className="w-7 h-7 rounded-full border-2 border-gray-300 flex justify-center items-center mr-1">
                        <Camera
                            size={16}
                            className="text-primary"
                        />
                    </View>
                    <Text>
                        2 Photo Post
                    </Text>

                </View>
                <View className="mt-2 bg-borderColor text-gray-700 text-xs py-1 pr-2 rounded-full flex-row items-center">
                    <View className="w-7 h-7 rounded-full border-2 border-gray-300 flex justify-center items-center mr-1">
                        <Camera
                            size={16}
                            className="text-primary"
                        />
                    </View>
                    <Text>
                        1 Reels Video Post
                    </Text>

                </View>
            </View>,
            "isBadge": true,
            "backgroundColor": "#FFB800",
            "color": "#FFB800"
        },
        {
            "Icon": "ClipboardCheck",
            "text": "Task Status:",
            "value": "On Progress",
            "isBadge": false,
            "backgroundColor": "#FFB800",
            "color": "#FFB800"
        }
    ]

    const iconMap = {
        Calendar: Calendar,
        Banknote: Banknote,
        Box: Box,
        Monitor: Monitor,
        Type: Type,
        ClipboardCheck: ClipboardCheck
    };

    const screenHeight = Dimensions.get("window").height;
    return (
        <View>
            <LinearGradient
                colors={[
                    "rgba(204, 201, 242, 0.03)",
                    "rgba(225, 224, 247, 0.5)",
                    "rgba(180, 175, 236, 0.05)",
                    "rgba(204, 201, 242, 0.3)",
                    "rgba(255, 255, 255, 0.3)",
                    "rgba(204, 201, 242, 0.58)",
                ]}
                start={{ x: 0.1, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="h-[230px] w-full px-4 pt-4 rounded-b-[29px] border-[0.5px] border-borderLightColor"
            >
                <SafeAreaView>
                    <GoBackButton onPress={
                        () => {
                            navigation.goBack();
                        }
                    } />


                    <View className="flex flex-row items-center mt-4">
                        <View className="flex items-center justify-center w-[80px] h-[80px] border-[1px] border-borderLightColor rounded-[16px]">
                            <Image
                                source={NikeIcon}
                                className="w-[60%] h-[60%] rounded-[16px]"
                            />
                        </View>

                        <View style={{ marginLeft: 12 }}>
                            <Text className="font-medium text-lg">
                                Summer Campaign With Nike
                            </Text>
                            <Text className="text-gray-500 font-normal">
                                Nike</Text>
                            <TouchableOpacity
                                className="bg-primary px-3 py-2 rounded-full mt-2 max-w-[130px] flex-row items-center justify-center"
                            >
                                <MessageCircle
                                    className="transform rotate-[-90deg] text-white mr-2"
                                    size={14}
                                />
                                <Text className="text-white text-xs font-normal">Send Message</Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </SafeAreaView>
            </LinearGradient>



            <View className="px-4 pt-5">

                <View className="flex-row border-b border-gray-200">
                    {["Campaign Task", "Payment", "Campaign Details"].map((tab) => (
                        <TouchableOpacity key={tab} className={`flex-1 items-center py-2 ${activeTab === tab ? "border-b-4 rounded-t-lg border-primary" : ""}`} onPress={() => setActiveTab(tab)}>
                            <Text className={activeTab === tab ? "text-primary font-medium" : "text-gray-500"}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                {item.status === "Cancelled Campaign" ?
                    <View>

                        <View className="flex-column items-center justify-center mt-12">
                            <Image
                                source={require("../assets/cancel.png")}
                            />

                            <Text className="text-textDarkColor font-bold text-[16px] font-[600] mt-3 ml-2">
                                Campaign Cancelled</Text>
                        </View>

                    </View>
                    : item.status === "Finished Campaign" ? <View style={{ minHeight: screenHeight - 400 }} className="flex-1">
                        {activeTab === "Campaign Task" && (
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                keyboardShouldPersistTaps="handled"
                                scrollEnabled
                                contentContainerStyle={{ flexGrow: 1 }}
                                className="mt-4"
                            >
                                <CampaignStatusBar
                                    items={[
                                        { id: 1, text: "Draft Content", quantity: 2 },
                                        { id: 2, text: "Waiting Approval", quantity: 1 },
                                        { id: 3, text: "Request To Edit", quantity: 1 },
                                        { id: 4, text: "Ready To Publish", quantity: 1 },
                                        { id: 5, text: "Published Content", quantity: 0 },
                                    ]}
                                    isActiveCampaign={true}
                                    showQuantity={true}
                                    onChange={(id) => console.log(id)}

                                />
                                {[1, 2, 3].map((item) => (
                                    <View key={item} className="p-4 mb-4 border border-modalBackground rounded-lg bg-white shadow-sm relative">
                                        <View className="absolute top-4 right-4">
                                            <Text className="text-yellowLightColor font-[400] bg-yelloDarkColor p-2 rounded-full">
                                                Content Published
                                            </Text>
                                        </View>
                                        <View className="items-center flex-row justify-between">
                                            <View>
                                                <LabelIcon
                                                    Icon={Camera}
                                                    label="Photo Post"
                                                />
                                            </View>


                                        </View>
                                        <View className="flex-row items-center mb-3">
                                            <Text className="text-gray-400 text-sm">Task assign:
                                            </Text>
                                            <Text className="text-gray-500 font-bold ml-1">
                                                Sun, 05 Jul 2024
                                            </Text>
                                        </View>


                                        <LabelIcon
                                            Icon={Upload}
                                            label="Upload Picture"
                                            size="small"
                                        />

                                        <View className="min-h-[300px] border-2 border border-gray-300 p-2 flex items-center justify-center rounded-lg mb-3">
                                            <Image
                                                source={require("../assets/postImage.png")}
                                                className="w-[100%] h-[300px] rounded-lg"
                                            />
                                        </View>

                                        <View>
                                            {/* ICONS */}

                                            <View className="flex-row items-center justify-start flex-wrap w-[80%] mb-2">
                                                {[
                                                    {
                                                        icon: Eye,
                                                        text: "247K",
                                                    },
                                                    {
                                                        icon: Heart,
                                                        text: "250",
                                                    },
                                                    {
                                                        icon: MessageSquareText,
                                                        text: "400",
                                                    }, {
                                                        icon: ChartColumn,
                                                        text: "1.7%"
                                                    },
                                                    {
                                                        icon: Share2,
                                                        text: "150"
                                                    }
                                                ].map((item) => {
                                                    return (
                                                        <View className="flex-row items-center mr-4">
                                                            <LabelIcon
                                                                Icon={item.icon}
                                                                label={item.text}

                                                            />
                                                        </View>
                                                    )
                                                })
                                                }



                                            </View>
                                        </View>



                                        <LabelIcon
                                            Icon={Quote}
                                            label="Post Caption"
                                            size="small"
                                        />
                                        <View className="border border-modalBackground rounded-lg p-3 mb-3">
                                            <TextInput
                                                value={`Summer's Here. Don't Just Survive It. Rise Above It.\nThe new Air Jordan collection is built for peak performance in the heat.\n\nJoin us and defy limitations. Share your training journey with #RiseAboveTheHeat.\n\nComing soon to Nike stores and online. #AirJordan #SummerHeat #JustDoIt`}
                                                placeholder="Write the campaign post based on the brief here..."
                                                multiline
                                                className="h-40 text-textInputColor"
                                            />
                                        </View>

                                        <LabelIcon
                                            Icon={Link}
                                            label="Post Caption"
                                            size="small"
                                        />
                                        <View className="border border-modalBackground rounded-lg p-3 mb-3">
                                            <TextInput
                                                value={`View the content post here:`}
                                                placeholder="Write the campaign post based on the brief here..."
                                                multiline
                                                className="h-5 text-textInputColor"
                                            />
                                            <Text
                                                style={{ color: '#1E90FF', textDecorationLine: 'underline' }}
                                                onPress={() => Linking.openURL('https://www.instagram.com/')}
                                            >
                                                https://www.instagram.com/
                                            </Text>
                                        </View>




                                        <View className="flex-row justify-between max-w-screen mt-2">
                                            <TouchableOpacity disabled={true} className="bg-contactUsIconBg px-4 py-2 rounded-lg w-[49%]">
                                                <Text className="text-modalBackground text-center">Publish content</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity disabled={true} className="bg-contactUsIconBg px-4 py-2 rounded-lg w-[49%]">
                                                <Text className="text-modalBackground text-center">Submit to review</Text>
                                            </TouchableOpacity>
                                        </View>

                                    </View>
                                ))}
                            </ScrollView>
                        )}

                        {activeTab === "Payment" && (
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                keyboardShouldPersistTaps="handled"
                                scrollEnabled
                                contentContainerStyle={{ flexGrow: 1 }}
                                className="mt-4"
                            >
                                <View className="p-4 mb-5 rounded-lg bg-white shadow-sm b-1">
                                    <View className="flex-row items-center mb-2">
                                        <Text className="text-gray-600 font-bold">Campaign No</Text>
                                        <Text className="text-blue-600 ml-1">#1234ABCDEFAAAA</Text>
                                    </View>


                                    <Text className="text-yellowLightColor bg-contactUsIconBg px-3 py-1 rounded-lg mb-3 w-[160px] text-center">Payment not active</Text>

                                    <View
                                        className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor-100 mb-3"
                                    >
                                        <Text className="text-greyLightColor font-[400] mb-3">Bill From:</Text>
                                        <Text className="text-textDarkColor font-[700] mb-2">XYZ Agencies - Adidas Brand</Text>
                                        <Text className="text-billAddressColor font-[500] mb-3">St.1234 Kuwait City 11421, Kuwait</Text>
                                        <Text className="text-greyLightColor font-[400] mb-1">Issued On:</Text>
                                        <Text className="text-textDarkColor font-[700]">July 26, 2024</Text>
                                    </View>
                                    <View
                                        className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor mb-3"
                                    >
                                        <Text className="text-greyLightColor font-[400] mb-3">Bill To:</Text>
                                        <Text className="text-textDarkColor font-[700] mb-2">XYZ Agencies - Adidas Brand</Text>
                                        <Text className="text-billAddressColor font-[500] mb-3">St.1234 Kuwait City 11421, Kuwait</Text>
                                        <Text className="text-greyLightColor font-[400] mb-1">Issued On:</Text>
                                        <Text className="text-textDarkColor font-[700]">July 26, 2024</Text>
                                    </View>
                                </View>
                                <View className="p-4 mb-5 rounded-lg bg-white shadow-sm">
                                    <Text className="text-gray-600 font-bold mb-3">Invoice Details:</Text>
                                    <View
                                        className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor mb-3"
                                    >
                                        <View className="flex-row items-center justify-between">
                                            <View className="flex-row items-center">
                                                <CircularIcon Icon={Camera} />
                                                <View>
                                                    <Text className="mb-2 font-[600]">Instagram - Photo Post</Text>
                                                    <View className="flex-row items-center">
                                                        <Text className="font-bold">x2</Text>
                                                        <Text className="font-[400] ml-2 text-billAddressColor">$450 per post</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <Text className="text-textDarkColor font-[600]">  $900</Text>
                                        </View>

                                    </View>
                                    <View
                                        className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor mb-3"
                                    >
                                        <View className="flex-row items-center justify-between">
                                            <View className="flex-row items-center">
                                                <CircularIcon Icon={Video} />
                                                <View>
                                                    <Text className="mb-2 font-[600]">Instagram - Reels Video Post</Text>
                                                    <View className="flex-row items-center">
                                                        <Text className="font-bold">x1</Text>
                                                        <Text className="font-[400] ml-2 text-billAddressColor">$850 per post</Text>
                                                    </View>
                                                </View>
                                            </View>
                                            <Text className="text-textDarkColor font-[600]">  $850</Text>
                                        </View>

                                    </View>
                                </View>
                                <View className="p-4 mb-5 rounded-lg bg-white shadow-sm">
                                    <Text className="text-gray-600 font-bold mb-3">Campaign Summary:</Text>
                                    <View className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor mb-3">
                                        <View className="flex-row items-center justify-between border-b border-borderColor pb-2.5 mb-2.5 border-solid" >
                                            <Text className="text-textDarkColor font-[600]">Total Earnings</Text>
                                            <Text className="text-textDarkColor font-[600]">$1,750</Text>
                                        </View>
                                        <View className="flex-row items-center justify-between border-b border-borderColor pb-2.5 mb-2.5 border-solid">
                                            <Text className="text-textDarkColor font-[600]">Bonus</Text>
                                            <Text className="text-textDarkColor font-[600]">0</Text>
                                        </View>
                                        <View className="flex-row items-center justify-between border-b border-borderColor pb-2.5 mb-2.5 border-solid">
                                            <Text className="text-textDarkColor font-[600]">Total Earnings</Text>
                                            <Text className="text-textDarkColor font-[600]">$1.700</Text>
                                        </View>
                                        <View className="flex-row items-center justify-between">
                                            <Text className="text-textDarkColor font-[600]">Transfer Source</Text>
                                            <View className="flex-row items-center">
                                                <Image
                                                    source={VisaIcon}
                                                    className="mr-2"
                                                />
                                                <Text className="text-textDarkColor font-[600]">
                                                    Credit Card ****5612
                                                </Text>
                                            </View>

                                        </View>
                                    </View>
                                </View>
                                <View className="p-4 mb-5 rounded-lg bg-white shadow-sm">
                                    <Text className="text-gray-600 font-bold mb-3">Notes:</Text>
                                    <View className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor mb-3">
                                        <Text
                                            className="text-textDarkColor font-[400] text-sm"
                                        >
                                            -
                                        </Text>
                                    </View>
                                </View>

                            </ScrollView>

                        )}

                        {activeTab === "Campaign Details" && (
                            <ScrollView
                                showsVerticalScrollIndicator={false}
                                keyboardShouldPersistTaps="handled"
                                scrollEnabled
                                contentContainerStyle={{ flexGrow: 1 }}
                                className="mt-4"
                            >
                                <View className="p-4 mb-5 rounded-lg bg-white shadow-sm b-1">
                                    <View className="flex flex-row items-center mt-4">
                                        <View className="flex items-center justify-center w-[80px] h-[80px] border-[1px] border-borderLightColor rounded-full">
                                            <Image
                                                source={NikeIcon}
                                                className="w-[60%] h-[60%] rounded-[16px]"
                                            />
                                        </View>

                                        <View style={{ marginLeft: 12 }}>
                                            <Text className="font-medium text-lg">
                                                Summer Campaign With Nike
                                            </Text>
                                            <Text className="text-gray-500 font-normal">Nike</Text>
                                        </View>
                                    </View>
                                    <View className="border-b border-gray-200 mt-4 mb-4" />
                                    {campaignIcons.map((item, index) => (
                                        <View className="flex-row items-center mb-3" key={index}>
                                            <View className="flex-row items-center w-[40%]">
                                                <CircularIcon Icon={iconMap[item.Icon]} />
                                                <Text className="text-gray-400 text-sm">{item.text}</Text>
                                            </View>
                                            <Text className="text-gray-700 text-sm">{item.value}</Text>
                                        </View>
                                    ))}
                                </View>
                            </ScrollView>
                        )}</View> :
                        <View style={{ minHeight: screenHeight - 400 }} className="flex-1">
                            {activeTab === "Campaign Task" && (

                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    keyboardShouldPersistTaps="handled"
                                    scrollEnabled
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    className="mt-4"
                                >
                                    <CampaignStatusBar
                                        items={[
                                            { id: 1, text: "Draft Content", quantity: 2 },
                                            { id: 2, text: "Waiting Approval", quantity: 1 },
                                            { id: 3, text: "Request To Edit", quantity: 1 },
                                            { id: 4, text: "Ready To Publish", quantity: 1 },
                                            { id: 5, text: "Published Content", quantity: 0 },
                                        ]}
                                        isActiveCampaign={true}
                                        showQuantity={true}
                                        onChange={(id) => console.log(id)}

                                    />
                                    {[1, 2, 3].map((item) => (
                                        <View key={item} className="p-4 mb-4 border border-modalBackground rounded-lg bg-white shadow-sm relative">
                                            <View className="absolute top-4 right-4">
                                                <Text className="text-yellowLightColor font-[400] bg-yelloDarkColor p-2 rounded-full">
                                                    Need to submit
                                                </Text>
                                            </View>
                                            <View className="items-center flex-row justify-between">
                                                <View>
                                                    <LabelIcon
                                                        Icon={Camera}
                                                        label="Photo Post"
                                                    />
                                                </View>


                                            </View>
                                            <View className="flex-row items-center mb-3">
                                                <Text className="text-gray-400 text-sm">Task assign:
                                                </Text>
                                                <Text className="text-gray-500 font-bold ml-1">
                                                    Sun, 05 Jul 2024
                                                </Text>
                                            </View>


                                            <LabelIcon
                                                Icon={Upload}
                                                label="Upload Picture"
                                                size="small"
                                            />

                                            <View className="min-h-[300px] border-2 border-dashed border-gray-300 p-6 flex items-center justify-center rounded-lg mb-3">
                                                <Camera className="text-gray-400 mb-2" size={24} />
                                                <Text className="text-gray-500">Drag and Drop picture here or</Text>
                                                <Text className="text-primary">Choose file</Text>
                                                <Text className="text-gray-400 text-xs mt-2">Supported formats: JPG, PNG, SVG (Max: 50MB)</Text>
                                            </View>



                                            <LabelIcon
                                                Icon={Quote}
                                                label="Post Caption"
                                                size="small"
                                            />
                                            <View className="border border-modalBackground rounded-lg p-3 mb-3">
                                                <TextInput placeholder="Write the campaign post based on the brief here..." multiline className="h-20 text-textInputColor" />
                                            </View>

                                            <View className="flex-row justify-between max-w-screen">
                                                <TouchableOpacity className="bg-gray-300 px-4 py-2 rounded-lg w-[45%]">
                                                    <Text className="text-gray-500 text-center">Publish content</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity className="bg-primary px-4 py-2 rounded-lg w-[45%]">
                                                    <Text className="text-white text-center">Submit to review</Text>
                                                </TouchableOpacity>
                                            </View>

                                        </View>
                                    ))}
                                </ScrollView>

                            )}

                            {activeTab === "Payment" && (
                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    keyboardShouldPersistTaps="handled"
                                    scrollEnabled
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    className="mt-4"
                                >
                                    <View className="p-4 mb-5 rounded-lg bg-white shadow-sm b-1">
                                        <View className="flex-row items-center mb-2">
                                            <Text className="text-gray-600 font-bold">Campaign No</Text>
                                            <Text className="text-blue-600 ml-1">#1234ABCDEFAAAA</Text>
                                        </View>


                                        <Text className="text-yellowLightColor bg-contactUsIconBg px-3 py-1 rounded-lg mb-3 w-[160px] text-center">Payment not active</Text>

                                        <View
                                            className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor-100 mb-3"
                                        >
                                            <Text className="text-greyLightColor font-[400] mb-3">Bill From:</Text>
                                            <Text className="text-textDarkColor font-[700] mb-2">XYZ Agencies - Adidas Brand</Text>
                                            <Text className="text-billAddressColor font-[500] mb-3">St.1234 Kuwait City 11421, Kuwait</Text>
                                            <Text className="text-greyLightColor font-[400] mb-1">Issued On:</Text>
                                            <Text className="text-textDarkColor font-[700]">July 26, 2024</Text>
                                        </View>
                                        <View
                                            className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor mb-3"
                                        >
                                            <Text className="text-greyLightColor font-[400] mb-3">Bill To:</Text>
                                            <Text className="text-textDarkColor font-[700] mb-2">XYZ Agencies - Adidas Brand</Text>
                                            <Text className="text-billAddressColor font-[500] mb-3">St.1234 Kuwait City 11421, Kuwait</Text>
                                            <Text className="text-greyLightColor font-[400] mb-1">Issued On:</Text>
                                            <Text className="text-textDarkColor font-[700]">July 26, 2024</Text>
                                        </View>
                                    </View>
                                    <View className="p-4 mb-5 rounded-lg bg-white shadow-sm">
                                        <Text className="text-gray-600 font-bold mb-3">Invoice Details:</Text>
                                        <View
                                            className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor mb-3"
                                        >
                                            <View className="flex-row items-center justify-between">
                                                <View className="flex-row items-center">
                                                    <CircularIcon Icon={Camera} />
                                                    <View>
                                                        <Text className="mb-2 font-[600]">Instagram - Photo Post</Text>
                                                        <View className="flex-row items-center">
                                                            <Text className="font-bold">x2</Text>
                                                            <Text className="font-[400] ml-2 text-billAddressColor">$450 per post</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <Text className="text-textDarkColor font-[600]">  $900</Text>
                                            </View>

                                        </View>
                                        <View
                                            className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor mb-3"
                                        >
                                            <View className="flex-row items-center justify-between">
                                                <View className="flex-row items-center">
                                                    <CircularIcon Icon={Video} />
                                                    <View>
                                                        <Text className="mb-2 font-[600]">Instagram - Reels Video Post</Text>
                                                        <View className="flex-row items-center">
                                                            <Text className="font-bold">x1</Text>
                                                            <Text className="font-[400] ml-2 text-billAddressColor">$850 per post</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                                <Text className="text-textDarkColor font-[600]">  $850</Text>
                                            </View>

                                        </View>
                                    </View>
                                    <View className="p-4 mb-5 rounded-lg bg-white shadow-sm">
                                        <Text className="text-gray-600 font-bold mb-3">Campaign Summary:</Text>
                                        <View className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor mb-3">
                                            <View className="flex-row items-center justify-between border-b border-borderColor pb-2.5 mb-2.5 border-solid" >
                                                <Text className="text-textDarkColor font-[600]">Total Earnings</Text>
                                                <Text className="text-textDarkColor font-[600]">$1,750</Text>
                                            </View>
                                            <View className="flex-row items-center justify-between border-b border-borderColor pb-2.5 mb-2.5 border-solid">
                                                <Text className="text-textDarkColor font-[600]">Bonus</Text>
                                                <Text className="text-textDarkColor font-[600]">0</Text>
                                            </View>
                                            <View className="flex-row items-center justify-between border-b border-borderColor pb-2.5 mb-2.5 border-solid">
                                                <Text className="text-textDarkColor font-[600]">Total Earnings</Text>
                                                <Text className="text-textDarkColor font-[600]">$1.700</Text>
                                            </View>
                                            <View className="flex-row items-center justify-between">
                                                <Text className="text-textDarkColor font-[600]">Transfer Source</Text>
                                                <View className="flex-row items-center">
                                                    <Image
                                                        source={VisaIcon}
                                                        className="mr-2"
                                                    />
                                                    <Text className="text-textDarkColor font-[600]">
                                                        Credit Card ****5612
                                                    </Text>
                                                </View>

                                            </View>
                                        </View>
                                    </View>
                                    <View className="p-4 mb-5 rounded-lg bg-white shadow-sm">
                                        <Text className="text-gray-600 font-bold mb-3">Notes:</Text>
                                        <View className="border border-borderColor p-4 rounded-lg bg-invoiceBgColor mb-3">
                                            <Text
                                                className="text-textDarkColor font-[400] text-sm"
                                            >
                                                -
                                            </Text>
                                        </View>
                                    </View>

                                </ScrollView>

                            )}

                            {activeTab === "Campaign Details" && (

                                <ScrollView
                                    showsVerticalScrollIndicator={false}
                                    keyboardShouldPersistTaps="handled"
                                    scrollEnabled
                                    contentContainerStyle={{ flexGrow: 1 }}
                                    className="mt-4"
                                >
                                    <View className="p-4 mb-5 rounded-lg bg-white shadow-sm b-1">
                                        <View className="flex flex-row items-center mt-4">
                                            <View className="flex items-center justify-center w-[80px] h-[80px] border-[1px] border-borderLightColor rounded-full">
                                                <Image
                                                    source={NikeIcon}
                                                    className="w-[60%] h-[60%] rounded-[16px]"
                                                />
                                            </View>

                                            <View style={{ marginLeft: 12 }}>
                                                <Text className="font-medium text-lg">
                                                    Summer Campaign With Nike
                                                </Text>
                                                <Text className="text-gray-500 font-normal">Nike</Text>
                                            </View>
                                        </View>
                                        <View className="border-b border-gray-200 mt-4 mb-4" />
                                        {campaignIcons.map((item, index) => (
                                            <View className="flex-row items-center mb-3" key={index}>
                                                <View className="flex-row items-center w-[40%]">
                                                    <CircularIcon Icon={iconMap[item.Icon]} />
                                                    <Text className="text-gray-400 text-sm">{item.text}</Text>
                                                </View>
                                                <Text className="text-gray-700 text-sm">{item.value}</Text>
                                            </View>
                                        ))}
                                    </View>
                                </ScrollView>

                            )}</View>}


            </View>

        </View >
    );
};

export default CampaignTaskScreen;




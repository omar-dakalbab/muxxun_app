import { View, Text, TextInput, Image, TouchableOpacity, KeyboardAvoidingView, Platform, Keyboard } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AvatarIcon from '../assets/Avatar.png';
import MessageImage from '../assets/messageImage.png';
import File from '../assets/file.png';
import { CheckCheck, Download, Paperclip, Upload, Image as ImageIcon, Smile, Mic } from 'lucide-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import React from 'react';
export default function MessageDetailsScreen() {
    const [message, setMessage] = useState('');


    const navigation = useNavigation();


    const scrollViewRef = useRef();

    React.useEffect(() => {
        setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);
    }, [message]); // Scrolls whenever a new message is added

    return (
        <SafeAreaView className="flex-1 bg-white">
            {/* Header */}
            <View className="flex-row items-center px-4 py-3 border-b border-gray-200">
                <TouchableOpacity
                    onPress={() => {
                        Keyboard.dismiss();
                        navigation.goBack();
                    }}
                >
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
                <Image source={AvatarIcon} className="w-10 h-10 rounded-full mx-3" />
                <Text className="text-lg font-semibold flex-1">Harvey Specter</Text>
                <TouchableOpacity>
                    <Ionicons name="call-outline" size={24} color="black" className="mx-2" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="ellipsis-vertical" size={24} color="black" />
                </TouchableOpacity>
            </View>

            {/* Messages */}
            <View className="flex-1 pb-5 bg-messageBgColor">
                <ScrollView ref={scrollViewRef}
                    onContentSizeChange={() => scrollViewRef.current?.scrollToEnd({ animated: true })}
                    className="px-4 pb-5 bg-messageBgColor"
                    showsHorizontalScrollIndicator={false}
                    showsVerticalScrollIndicator={false}

                >
                    <View className="flex-row items-center justify-center">
                        <Text className="text-textDarkColor text-xs text-center my-2 bg-white rounded-full p-1 px-3">Today . July 26, 2024</Text>
                    </View>

                    <View className="self-end bg-indigo-500 p-3 rounded-lg max-w-[75%]">
                        <Text className="text-white">Hello Harvey, How are you?{"\n"}I want to send you a brief document that I assigned.</Text>
                    </View>

                    <View className="self-end bg-white p-3 rounded-lg mt-2">
                        <View className="flex-row items-center justify-between w-[65%]">
                            <View className="flex-row items-center justify-between w-[65%]">
                                <Image source={File} className="w-9 h-9 mr-2 rounded-lg" />
                                <View>
                                    <Text className="font-[400] text-[12px] mb-1">Adidas Campaign Brief.pdf</Text>
                                    <Text className="text-xs text-gray-500">120KB</Text>
                                </View>
                            </View>
                            <View className="ml-2 p-1 border rounded-full border-modalBackground">
                                <Download
                                    size={15}
                                    className="text-modalBackground"
                                />
                            </View>

                        </View>
                    </View>

                    <View className="self-end flex-row items-center mt-2">
                        <Text className="mr-2 font-[600] text-[12px]">
                            You
                        </Text>
                        <Text className="text-billAddressColor mr-1">
                            10:30
                        </Text>
                        <Text>
                            <CheckCheck size={16} className="text-primary" />
                        </Text>
                    </View>



                    <View className="self-start bg-messageMessageColor p-3 rounded-lg max-w-[75%] mt-2">
                        <Text className="text-gray-700">Okay David, thanks.</Text>
                    </View>
                    <View className="self-start flex-row items-center mt-2">
                        <Text className="mr-2 font-[600] text-[12px]">
                            David Kevin
                        </Text>
                        <Text className="text-billAddressColor mr-1">
                            10:30
                        </Text>
                    </View>

                    <View className="self-end bg-indigo-500 p-3 rounded-lg max-w-[75%] mt-2">
                        <Text className="text-white">Hi John, I made the photo for the content, any thoughts from you for this?</Text>
                    </View>

                    <View className="self-end bg-gray-200 p-2 rounded-lg max-w-[75%] mt-2">
                        <Image source={MessageImage} className="w-40 h-40 rounded-lg" />
                        <Text className="text-gray-500 text-xs">Photo Example</Text>
                    </View>

                    <View className="self-end flex-row items-center mt-2">
                        <Text className="mr-2 font-[600] text-[12px]">
                            You
                        </Text>
                        <Text className="text-billAddressColor mr-1">
                            10:30
                        </Text>
                        <Text>
                            <CheckCheck size={16} className="text-primary" />
                        </Text>
                    </View>

                    <View className="self-start bg-messageMessageColor p-3 rounded-lg max-w-[75%] mt-2">
                        <Text className="text-gray-700">It's good David, you can draft it.</Text>
                    </View>
                    <View className="self-start flex-row items-center mt-2">
                        <Text className="mr-2 font-[600] text-[12px]">
                            David Kevin
                        </Text>
                        <Text className="text-billAddressColor mr-1">
                            10:30
                        </Text>
                    </View>

                    <View className="self-end bg-indigo-500 p-3 rounded-lg max-w-[75%] mt-2">
                        <Text className="text-white">Okay thanks Harvey.</Text>
                    </View>

                    <View className="self-end flex-row items-center mt-2">
                        <Text className="mr-2 font-[600] text-[12px]">
                            You
                        </Text>
                        <Text className="text-billAddressColor mr-1">
                            10:30
                        </Text>
                        <Text>
                            <CheckCheck size={16} className="text-primary" />
                        </Text>
                    </View>

                    <View className="self-start bg-messageMessageColor p-3 rounded-lg max-w-[75%] mt-2">
                        <Text className="text-gray-700">It's good David, you can draft it.</Text>
                    </View>
                    <View className="self-start flex-row items-center mt-2">
                        <Text className="mr-2 font-[600] text-[12px]">
                            David Kevin
                        </Text>
                        <Text className="text-billAddressColor mr-1">
                            10:30
                        </Text>
                    </View>

                    <View className="self-end bg-indigo-500 p-3 rounded-lg max-w-[75%] mt-2">
                        <Text className="text-white">Okay thanks Harvey.</Text>
                    </View>

                    <View className="self-end flex-row items-center mt-2">
                        <Text className="mr-2 font-[600] text-[12px]">
                            You
                        </Text>
                        <Text className="text-billAddressColor mr-1">
                            10:30
                        </Text>
                        <Text>
                            <CheckCheck size={16} className="text-primary" />
                        </Text>
                    </View>
                    <View className="self-start bg-messageMessageColor p-3 rounded-lg max-w-[75%] mt-2">
                        <Text className="text-gray-700">It's good David, you can draft it.</Text>
                    </View>
                    <View className="self-start flex-row items-center mt-2">
                        <Text className="mr-2 font-[600] text-[12px]">
                            David Kevin
                        </Text>
                        <Text className="text-billAddressColor mr-1">
                            10:30
                        </Text>
                    </View>


                </ScrollView>
            </View>

            {/* Message Input */}
            <View className="h-[15%] flex flex-column justify-between ">
                <KeyboardAvoidingView
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                    className="flex flex-row items-start px-4 py-2 border-t border-gray-300 bg-white"
                >
                    <TextInput
                        className="flex-1 rounded-full mt-2"
                        placeholder="Type your message here..."
                        value={message}
                        onChangeText={setMessage}
                    />

                </KeyboardAvoidingView>

                <View>
                    <View className="flex-row items-center justify-between px-4 py-2 bg-white">
                        <View className="flex-row items-center">
                            <TouchableOpacity onPress={() => { }} className="p-2 rounded-full border border-gray-200">
                                <Paperclip
                                    size={18}
                                    className="text-gray-400"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }} className="p-2 rounded-full border border-gray-200 ml-2">
                                <ImageIcon
                                    size={18}
                                    className="text-gray-400"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }} className="p-2 rounded-full border border-gray-200 ml-2">
                                <Smile
                                    size={18}
                                    className="text-gray-400"
                                />
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row items-center">
                            <TouchableOpacity onPress={() => { }} className="p-2 rounded-full border border-gray-200 ml-2">
                                <Mic
                                    size={18}
                                    className="text-gray-400"
                                />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { }} className="p-2 rounded-full border border-gray-200 ml-2 bg-primary">
                                <Ionicons name="send" size={18} color="#FFF" />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    );
}

import React from 'react';
import { View, Text, Image } from 'react-native';
import { ArrowUpFromLine, FileText, Instagram, Quote } from 'lucide-react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function TaskItem({ task }) {
    return (
        <View className="bg-white border border-gray-200 rounded-xl p-4 mb-20">
            <View>
                <View className="flex-row items-center mb-3">
                    <View className="border rounded-full p-3 border-borderSecondayColor mr-3">
                        <Instagram size={20} color={"#000"} />
                    </View>
                    <Text className="text-md font-[600]">Instagram - {task.type}</Text>
                </View>
            </View>

            <View className="flex-row items-center mb-3">
                <View className="border rounded-full p-2 border-borderSecondayColor bg-primary mr-3">
                    <FileText size={20} color={"#FFF"} />
                </View>
                <Text className="text-sm font-[600]">Post Brief:</Text>
            </View>

            <View className="border border-gray-200 rounded-lg p-4 bg-cardBackground mb-3">
                <Text className="text-gray-700 mb-2">{task.brief}</Text>
                <Text className="text-gray-900 font-bold mb-1">Do:</Text>
                {task.do.map((item, idx) => (
                    <Text key={idx} className="text-gray-700 ml-2">- {item}</Text>
                ))}
                <Text className="text-gray-900 font-bold mt-2 mb-1">Don't:</Text>
                {task.dont.map((item, idx) => (
                    <Text key={idx} className="text-gray-700 ml-2">- {item}</Text>
                ))}
            </View>

            <View className="flex-row items-center mb-3">
                <View className="border rounded-full p-3 border-borderSecondayColor bg-primary mr-3">
                    <Quote size={20} color={"#FFF"} />
                </View>
                <Text className="text-gray-900 font-bold mt-2 mb-1">Post Caption:</Text>
            </View>

            <View className="border border-gray-200 rounded-lg p-4 bg-cardBackground mb-3">
                <Text className="text-gray-700">{task.caption}</Text>
            </View>

            <View className="flex-row items-center mb-3">
                <View className="border rounded-full p-3 border-borderSecondayColor bg-primary mr-3">
                    <ArrowUpFromLine size={20} color={"#FFF"} />
                </View>
                <Text className="text-gray-900 font-bold mt-2 mb-1">Upload File:</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                className="bg-cardBackground border border-gray-200 rounded-lg p-4 mb-3"
            >
                <View className="flex-row items-center space-x-4 mr-4">
                    <View className="relative">
                        <Image source={require('../assets/pdf.png')} />
                        <View className="flex-row items-center absolute bottom-0 left-0 bg-fileCircleBackground p-2 w-[100%] rounded">
                            <Text className="text-white font-[400]">name.pdf</Text>
                        </View>
                    </View>
                </View>
                <View className="flex-row items-center space-x-4 mr-4">
                    <View className="relative">
                        <Image source={require('../assets/pdf.png')} />
                        <View className="flex-row items-center absolute bottom-0 left-0 bg-fileCircleBackground p-2 w-[100%] rounded">
                            <Text className="text-white font-[400]">name.pdf</Text>
                        </View>
                    </View>
                </View>
                <View className="flex-row items-center space-x-4">
                    <View className="relative">
                        <Image source={require('../assets/pdf.png')} />
                        <View className="flex-row items-center absolute bottom-0 left-0 bg-fileCircleBackground p-2 w-[100%] rounded">
                            <Text className="text-white font-[400]">name.pdf</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
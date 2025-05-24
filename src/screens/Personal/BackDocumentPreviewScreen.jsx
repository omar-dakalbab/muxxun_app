import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Dimensions, SafeAreaView } from 'react-native';

export default function BackDocumentPreviewScreen({ route, navigation }) {
    const { photoUri } = route.params;

    return (
        <View className="flex-1 bg-black">
            <SafeAreaView className='justify-center flex-1'>
                <View className='
            
            '>
                    {/* Title */}
                    <View className='items-center mt-24'>
                        <View className='items-center'>
                            {/* Image */}
                            <View className='flex-row justify-center'>
                                <Image className='mr-5' source={require('../../assets/back.png')} />
                                <Text className='text-white font-inter-bold font-bold text-3xl mb-8'>Back of the card</Text>
                            </View>
                            <Image
                                source={{ uri: photoUri }}
                                style={{
                                    width: '80%',
                                    aspectRatio: 4 / 3, // or 1.33 if it's a 4:3 crop
                                    resizeMode: 'contain',
                                    maxHeight: Dimensions.get('window').height * 1, // Limit image height to 40% of screen
                                }}
                            />
                        </View>
                        {/* Description */}
                        <View className='w-9/12'>
                            <Text className='text-white text-center font-inter-bold'>
                                Is the back of your driving license in the frame and easy to read? If so, you’re all good to go!
                            </Text>
                        </View>
                    </View>

                    {/* Action Buttons */}
                    <View className="w-fit mx-4">
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Reviews', { photoUri })}

                            className="bg-white w-full h-20 rounded-xl items-center justify-center mb-2"
                        >
                            <Text className="text-black font-semibold text-lg font-inter-bold">
                                Use this picture
                            </Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity
                        onPress={() => navigation.navigate('Reviews', { photoUri })}

                        className="bg-white w-full h-20 rounded-xl items-center justify-center mb-2"
                    >
                        <Text className="text-black font-semibold text-lg font-inter-bold">
                            Reviews Test
                        </Text>
                    </TouchableOpacity> */}

                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            className="bg-black w-full h-20 rounded-xl items-center justify-center"
                        >
                            <Text className="text-white font-semibold text-lg font-inter-bold">
                                Retake picture
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        </View>
    );
}
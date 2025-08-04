import React, { Component } from 'react';
import {
    View,
    ScrollView,
    Text,
    Pressable,
    Image,
    ImageBackground,
    KeyboardAvoidingView,
    Platform,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';

import BottomBar from '@/components/BottomBar';
import HeaderNavigation from '@/components/HeaderNavigations';
import AccountCard from '@/components/ui/AccountCard';
import { Button } from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { router } from 'expo-router';
import SelectModal from '@/components/ui/SelectModal';

export class PhysicalCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: "",
        };
    }

    setCountry = (country) => {
        this.setState({ country });
    };
    render() {
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ flex: 1, backgroundColor: 'white' }}
            >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={{ flex: 1 }}>
                        <ScrollView
                            keyboardShouldPersistTaps="handled"
                            contentContainerStyle={{ flexGrow: 1 }}
                        >
                            <View className='flex-row mt-16 justify-between items-center mx-6'>
                                <Text className='text-h3 font-bold'>Physical Card</Text>
                                <Pressable onPress={() => { router.push("/CreatePage") }}>
                                    <Image className='h-6 w-6 object-contain' source={require("@/assets/add-circle.png")} />
                                </Pressable>
                            </View>

                            <View className="items-center justify-center mt-8">
                                <ImageBackground
                                    source={require('@/assets/cardgradient.png')}
                                    className="w-full h-64 justify-center items-center blur-lg overflow-hidden"
                                    resizeMode="cover"
                                >
                                    <Image
                                        source={require('@/assets/card.png')} // Your foreground card image
                                        className="w-96 resize-contain"
                                    />
                                </ImageBackground>
                            </View>

                            <View className='flex-row items-center text-center mx-5 mt-6'>
                                <Pressable className='p-3 bg-gray100 w-24 rounded-3xl text-center items-center'>
                                    <Text className='font-semibold text-h5'>Standard </Text>
                                </Pressable>
                                <Pressable className='p-3  w-24 rounded-3xl text-center items-center'>
                                    <Text className='font-bold text-gray500 text-h5'>Premium</Text>
                                </Pressable>
                            </View>

                            <View className='mx-5 mt-10 mb-7'>
                                <View>
                                    <Input label='Full Name' type='text' value='Salomon Dion' onChangeText={() => { }} />
                                </View>
                                <Text className='text-gray500 text-h5 my-4'>Delivery Address</Text>
                                <Input type='text' value='' placeholder='Address line 1' centerText={true} onChangeText={() => { }} />
                                <Input type='text' value='' placeholder='Address line 2' centerText={true} onChangeText={() => { }} />
                                <Input type='text' value='' placeholder='City' centerText={true} onChangeText={() => { }} />
                                <View className="flex-row space-x-2">
                                    <View style={{ flex: 1, minWidth: 0 }}>
                                        <Input value="" placeholder='Postal code' centerText={true} onChangeText={() => { }} />
                                    </View>
                                    <View style={{ flex: 1, minWidth: 0 }}>
                                        <SelectModal
                                            compact={true}
                                            compactLabel="Country"
                                            value={this.state.country}
                                            onChange={(value) => this.setCountry(value)}
                                            options={[
                                                { label: "United States", value: "US" },
                                                { label: "Canada", value: "CA" },
                                                { label: "United Kingdom", value: "UK" },
                                            ]}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View className='pb-14 mx-4'>
                                <Button
                                    label='Continue'
                                    onPress={() => {
                                        router.push("/NameCard");
                                    }}
                                />
                            </View>
                        </ScrollView>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        );
    }
}

export default PhysicalCard;

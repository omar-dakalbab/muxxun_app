import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export default function SignupScreen({ navigation }) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <LinearGradient
            colors={["#F9F9F9", "#CCC9F2", "#CCC9F2", "#CCC9F2", "#FFFFFF"]}
            className="flex-1"
        >
            <SafeAreaView className="p-4">
                {/* Logo */}
                <Text className="text-left text-[30px] font-[800] text-gray500">
                    inflxr
                </Text>

                {/* Sign Up Card */}
                <View className="bg-white rounded-2xl p-6 mt-8 shadow-lg h-[90%]">
                     <Text className="text-left text-lg font-[500] text-textDarkColor">
                        Sign up to your Account
                    </Text>
                    <Text className="text-left text-[14px] text-billAddressColor mt-1">
                        Already have an account?{" "}
                        <Text className="text-gray500 font-[700]"
                            onPress={() => navigation.navigate("Login")}
                        >Log In</Text>
                    </Text>

                    {/* Full Name Input */}
                    <View className="mt-8">
                        <Text className="text-left text-[14px] text-textDarkColor font-[500]">
                            Full Name <Text className="text-red-500">*</Text>
                        </Text>
                        <View className="flex-row items-center border border-modalBackground p-3 rounded-lg mt-1">
                            <Feather name="user" size={18} color="#717273" />
                            <TextInput
                                placeholder="Add your name here..."
                                className="flex-1 pl-2 text-[14px]"
                            />
                        </View>
                    </View>

                    {/* Email Input */}
                    <View className="mt-4">
                        <Text className="text-left text-[14px] text-textDarkColor font-[500]">
                            Email Address <Text className="text-red-500">*</Text>
                        </Text>
                        <View className="flex-row items-center border border-modalBackground p-3 rounded-lg mt-1">
                            <Feather name="mail" size={18} color="#717273" />
                            <TextInput
                                placeholder="Add your email address here..."
                                keyboardType="email-address"
                                className="flex-1 pl-2 text-[14px]"
                            />
                        </View>
                    </View>

                    {/* Password Input */}
                    <View className="mt-4">
                        <Text className="text-left text-[14px] text-textDarkColor font-[500]">
                            Password <Text className="text-red-500">*</Text>
                        </Text>
                        <View className="flex-row items-center border border-modalBackground p-3 rounded-lg mt-1">
                            <Feather name="lock" size={18} color="#717273" />
                            <TextInput
                                placeholder="********"
                                secureTextEntry={!passwordVisible}
                                className="flex-1 pl-2 text-[14px]"
                            />
                            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
                                <Feather name={passwordVisible ? "eye" : "eye-off"} size={18} color="#717273" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Sign Up Button */}
                    <TouchableOpacity onPress={() => navigation.navigate("ProfileSetup_1")} className="bg-gray500 py-3 rounded-lg mt-6">
                        <Text className="text-white text-center font-[600] text-[16px]"

                        >Sign Up</Text>
                    </TouchableOpacity>

                    {/* Divider */}
                    <View className="flex-row items-center my-4">
                        <View className="flex-1 h-[1px] bg-modalBackground" />
                        <Text className="mx-4 text-black text-[14px]">Or</Text>
                        <View className="flex-1 h-[1px] bg-modalBackground" />
                    </View>

                    {/* Google Sign Up */}
                    <TouchableOpacity className="border border-modalBackground py-3 rounded-lg flex-row justify-center items-center">
                        <Image source={{ uri: "https://img.icons8.com/color/48/google-logo.png" }} className="w-5 h-5 mr-2" />
                        <Text className="text-textDarkColor font-[600] text-[14px]">Sign Up With Google</Text>
                    </TouchableOpacity>

                    {/* Terms & Privacy */}
                    <Text className="text-center text-[12px] text-billAddressColor mt-[auto]">
                        <Text className="text-gray500">Terms of Use</Text> and{" "}
                        <Text className="text-gray500">Privacy Policy</Text>
                    </Text>

                    {/* Footer */}
                    <Text className="text-center text-[12px] text-billAddressColor mt-2 mb-2">
                        © 2024 @inflxr | All Rights Reserved
                    </Text>
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
}

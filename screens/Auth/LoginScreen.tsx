import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    return (
        <LinearGradient
            colors={["#F9F9F9", "#CCC9F2", "#CCC9F2", "#CCC9F2", "#FFFFFF"]}
            className="flex-1"
        >
            <SafeAreaView className="p-4">
                {/* Logo */}
                <Text className="text-left text-[30px] font-[800] text-secondary">
                    inflxr
                </Text>

                {/* Sign Up Card */}
                <View className="bg-white rounded-2xl p-6 mt-8 shadow-lg h-[90%]">
                     <Text className="text-left text-lg font-[500] text-textDarkColor">
                        Log in to your Account
                    </Text>
                    <Text className="text-left text-[14px] text-billAddressColor mt-1">
                        Don't have an account?{" "}
                        <Text className="text-secondary font-[700]" onPress={() => navigation.navigate("Signup")}>Sign up</Text>
                    </Text>


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
                        <View className="flex-row justify-between">
                            <Text className="text-left text-[14px] text-textDarkColor font-[500]">
                                Password <Text className="text-red-500">*</Text>
                            </Text>
                            <Text className="text-secondary text-[14px] font-[400]">
                                Forgot Password?{" "}
                            </Text>
                        </View>
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
                        <View>
                            {/* //Remember Me */}
                            <View className="flex-row items-center mt-4">
                                <View className="w-4 h-4 border border-modalBackground rounded-lg" />
                                <Text className="text-textDarkColor text-[14px] ml-2">Remember Me</Text>
                            </View>
                        </View>
                    </View>

                    {/* Sign Up Button */}
                    <TouchableOpacity onPress={() => navigation.navigate("Home")} className="bg-secondary py-3 rounded-lg mt-6">
                        <Text className="text-white text-center font-[600] text-[16px]"

                        >Login</Text>
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
                        <Text className="text-secondary">Terms of Use</Text> and{" "}
                        <Text className="text-secondary">Privacy Policy</Text>
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

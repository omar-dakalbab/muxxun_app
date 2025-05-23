import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import SocialMediaModal from './SocialMediaModal';
export default function PrivacyPolicyModal({
  visible, onClose
}) {
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end items-center bg-black/50">
        <View className="bg-white w-full h-[90%] p-5 rounded-t-lg shadow-lg">
          {/* Header */}
          <View className="flex-row justify-center items-center pb-4 mb-3 border-b border-gray-200">
            <Text className="text-lg font-semibold text-center">
              Privace Policy
            </Text>
          </View>
          <TouchableOpacity
            onPress={onClose}
            className="absolute top-5 right-5 p-1 rounded-full bg-white border border-gray-300"
          >
            <Ionicons name="close" size={20} color="black" />
          </TouchableOpacity>

  
        </View>
      </View>
    </Modal>
  )
}
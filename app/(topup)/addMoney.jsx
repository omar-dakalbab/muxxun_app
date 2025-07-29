import {
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import React from 'react';
import Input from '@/components/ui/Input';
import SelectModal from '@/components/ui/SelectModal';
import HeaderNavigation from '@/components/HeaderNavigations';
import { Button } from '@/components/ui/Button';
import { router } from 'expo-router';
import CurrencyInput from '@/components/CurrencyInput';
import CurrencyInputSec from '@/components/ui/CurrencyInputSec';
import ChooseContainerCard from '@/components/ui/ChooseContainerCard';

export default function AddMoney() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        className="flex-1"
        keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="flex-1">
            <HeaderNavigation />
            <ScrollView
              contentContainerStyle={{ paddingBottom: 100 }}
              keyboardShouldPersistTaps="handled"
            >
              <View className="mt-4 mx-6">
                <Text className="text-h1 font-bold mb-3">Add money</Text>
                <Text className="text-body text-gray500 mb-6">
                  Your money is protected by licensed{'\n'} banks
                </Text>
              </View>

              <View className="mx-5">
                <CurrencyInput caption="you add" />

                <ChooseContainerCard
                  icon={require('@/assets/Union.png')}
                  title="Bank transfer"
                  buttonText="Change"
                  onPress={() => {
                    router.push('/(topup)/paymentOption/');
                  }}
                  route="/(topup)/paymentOption/"
                />

                <CurrencyInputSec />
              </View>

              <View className="mt-6 space-y-4 mx-8">
                <View className="flex flex-row justify-between items-center">
                  <Text className="text-gray700 text-footnote font-semibold">
                    Debit card fee
                  </Text>
                  <Text className="text-black text-h5 font-semibold">5.29 GBP</Text>
                </View>
                <View className="flex flex-row justify-between items-center">
                  <Text className="text-gray700 text-footnote font-semibold">
                    Our fee
                  </Text>
                  <Text className="text-primary text-h5 font-semibold">0 GBP</Text>
                </View>
                <View className="flex flex-row justify-between items-center">
                  <Text className="text-gray700 text-footnote font-semibold">
                    Total included fees (5.02%)
                  </Text>
                  <Text className="text-primary text-h5 font-semibold">5.29 GBP</Text>
                </View>
                <View className="flex flex-row justify-between items-center">
                  <Text className="text-gray700 text-footnote font-semibold">
                    Total you’ll pay
                  </Text>
                  <Text className="text-primary text-h5 font-semibold">15.29 GBP</Text>
                </View>
              </View>
            </ScrollView>

            {/* Fixed Button */}
            <View className="px-5 pb-2 bg-white">
              <Button
                label="Continue"
                onPress={() => {
                  router.push({ pathname: '/' });
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
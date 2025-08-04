import React, { Component } from 'react';
import {
    Dimensions,
    ScrollView,
    Text,
    TextInput,
    View,
    KeyboardAvoidingView,
    Platform,
    Image,
    Pressable,
    StyleSheet,
} from 'react-native';
import HeaderNavigation from '@/components/HeaderNavigations';
import { Search } from 'lucide-react-native';
import ToggleInput from '@/components/ToggleInput';
import QuestionComponent from '@/components/Questions';
import { router } from 'expo-router';

const screenWidth = Dimensions.get('window').width;
const inputFontSize = screenWidth * 0.04;

const faqData = [
    {
        question: 'How do I transfer money to another account?',
        answer:'Tap on the "Transfer" tab in the app, select the recipient, enter the amount, and confirm the transaction. You can also save recipients for future transfers.',
    },
    {
        question: 'How do I reset my password?',
        answer:'To reset your password, go to the login screen and tap "Forgot Password." Follow the instructions sent to your email or phone to create a new password.',
    },
    {
        question: 'Is my personal and financial information secure?',
        answer: 'lorem ipsum'
    }
];

export class HelpSupport extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchQuery: '',
            filteredFaqs: faqData,
        };
    }

    handleSearch = (text) => {
        const filteredFaqs = faqData.filter((faq) => {
            const query = text.toLowerCase();
            return (
                faq.question.toLowerCase().includes(query) ||
                faq.answer.toLowerCase().includes(query)
            );
        });
        this.setState({ searchQuery: text, filteredFaqs });
    };

    render() {
        const { searchQuery, filteredFaqs } = this.state;

        return (
            <KeyboardAvoidingView
                style={{ flex: 1, backgroundColor: 'white', position: 'relative' }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
            >
                    <HeaderNavigation />

                    {/* Removed the Pressable here */}

                    <Text className="text-3xl mt-5 mx-6 font-bold">FAQ</Text>
                    <Text className="text-h5 mt-3 mx-6 font-semibold text-gray400 leading-5">
                        Do you have any questions? Read {'\n'}through our FAQs below or search for
                        an {'\n'}answer to your questions.
                    </Text>

                    <View className="flex-row items-center bg-gray-100 rounded-xl h-14 mx-5 mt-6 px-4 py-3 ">
                        <Search size={20} color="#9ca3af" />
                        <TextInput
                            className="text-start"
                            style={{
                                marginLeft: 12,
                                color: '#000',
                                fontSize: inputFontSize,
                            }}
                            placeholder="Type a question here..."
                            placeholderTextColor="#9ca3af"
                            value={searchQuery}
                            onChangeText={this.handleSearch}
                        />
                    </View>

                    {searchQuery.length === 0 && (
                        <>
                            <Text className="mx-6 mt-6 mb-3 text-h5-semibold text-gray500">
                                Get help with your latest transaction
                            </Text>
                            <View className="flex-row items-center py-5  mx-6 px-4 bg-gray100 rounded-2xl">
                                <Image
                                    source={require('@/assets/maria.png')}
                                    className="w-10 h-10 rounded-full mr-3"
                                />

                                <View className="flex-1 ">
                                    <Text className="text-sm font-bold">Transfer from Leah</Text>
                                    <Text className="text-xs text-gray-500 mt-1">Thanks for dinner, 11:57 AM</Text>
                                </View>

                                <Text className="text-sm -mt-5 font-bold text-green-500">
                                    +$50
                                </Text>
                            </View>
                        </>
                    )}
                            <ScrollView keyboardShouldPersistTaps="handled">

                    <Text className="mx-6 mt-3 mb-3 text-h5-semibold text-gray500">
                        {searchQuery.length === 0 ? 'Frequently asked questions' : 'Search results'}
                    </Text>

                    <View>
                        {filteredFaqs.length > 0 ? (
                            filteredFaqs.map((faq, index) => (
                                <QuestionComponent
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                />
                            ))
                        ) : (
                            <Text className="mx-6 text-gray500 text-center py-4">
                                No results found for "{searchQuery}"
                            </Text>
                        )}
                    </View>
                </ScrollView>

                
                <Pressable onPress={() => {
                    router.push("/Support")
                }} style={styles.floatingButton}>
                    <View className='bg-black p-6 w-16 h-16 items-center justify-center rounded-full'>
                        <Image source={require('@/assets/message.png')} />
                    </View>
                </Pressable>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    floatingButton: {
        position: 'absolute',
        bottom: 60,
        right: 35,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
});

export default HelpSupport;

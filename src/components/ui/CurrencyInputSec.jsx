import { Search } from 'lucide-react-native';
import React, { Component, createRef } from 'react';
import {
    Text,
    View,
    Pressable,
    Image,
    TextInput,
    Keyboard,
    TouchableWithoutFeedback,
    FlatList,
    Modal,
} from 'react-native';

export class CurrencyInputSec extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            modalVisible: false,
            selectedCurrency: props.currencyLabel || {
                label: 'GBP',
                flag: '🇬🇧',
                desc: 'British Pound Sterling',
            },
            searchQuery: '',
        };
        this.inputRef = createRef();
    }

    openModal = () => {
        this.setState({ modalVisible: true, searchQuery: '' });
    };

    closeModal = () => {
        this.setState({ modalVisible: false });
    };

    selectCurrency = (currency) => {
        this.setState({
            selectedCurrency: currency,
            modalVisible: false,
            searchQuery: '',
        });

        if (this.props.onCurrencyChange) {
            this.props.onCurrencyChange(currency);
        }
    };

    handleSearch = (text) => {
        this.setState({ searchQuery: text });
    };

    render() {
        const {
            currencyList = [
                { label: 'USD', flag: '🇺🇸', desc: 'United States Dollar' },
                { label: 'GBP', flag: '🇬🇧', desc: 'British Pound Sterling' },
                { label: 'EUR', flag: '🇪🇺', desc: 'Euro' },
                { label: 'JPY', flag: '🇯🇵', desc: 'Japanese Yen' },
                { label: 'TRY', flag: '🇹🇷', desc: 'Turkish Lira' },
                { label: 'CAD', flag: '🇨🇦', desc: 'Canadian Dollar' },
                { label: 'AUD', flag: '🇦🇺', desc: 'Australian Dollar' },
                { label: 'CHF', flag: '🇨🇭', desc: 'Swiss Franc' },
                { label: 'CNY', flag: '🇨🇳', desc: 'Chinese Yuan' },
                { label: 'INR', flag: '🇮🇳', desc: 'Indian Rupee' },
            ],
        } = this.props;

        const { selectedCurrency, modalVisible, searchQuery } = this.state;

        
        const filteredCurrencyList = currencyList.filter((currency) => {
            const query = searchQuery.toLowerCase();
            return (
                currency.label.toLowerCase().includes(query) ||
                currency.desc.toLowerCase().includes(query)
            );
        });

        return (
            <>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View
                        className="bg-white shadow-sm p-4 rounded-xl flex items-center flex-row justify-between mb-4 w-full"
                        onFocus={() => this.setState({ isFocused: true })}
                        onBlur={() => this.setState({ isFocused: false })}
                    >
                        <Text className="text-h5 text-black font-bold">Currency to pay in</Text>
                        <Pressable
                            className="bg-white rounded-lg items-center justify-center flex-row p-2"
                            onPress={this.openModal}
                        >
                            <Text className="text-h4 text-black font-bold">
                                {selectedCurrency.flag} {selectedCurrency.label}
                            </Text>
                            <Image
                                source={require('@/assets/Frame 162744.png')}
                                className="w-4 h-4"
                            />
                        </Pressable>
                    </View>
                </TouchableWithoutFeedback>

                {/* Modal */}
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={this.closeModal}
                >
                    {/* <TouchableWithoutFeedback onPress={this.closeModal}> */}
                    <View className="h-full mt-24 bg-white bg-opacity-30">
                        <Text className="text-h1 font-bold mb-2 mx-7">Choose Currency</Text>

                        <View className="flex-row items-center bg-gray-100 rounded-xl h-14 mx-5 mt-6 px-4 py-3">
                            <Search size={20} color="#9ca3af" />
                            <TextInput
                                className="ml-3 flex-1 text-base text-black"
                                placeholder="Search"
                                placeholderTextColor="#9ca3af"
                                value={searchQuery}
                                onChangeText={this.handleSearch}
                                autoFocus
                            />
                        </View>

                        <View>
                            <Text className="mx-5 mt-8 text-h4 text-gray700">Recent currencies</Text>
                        </View>

                        <FlatList
                            data={filteredCurrencyList}
                            keyExtractor={(item) => item.label}
                            renderItem={({ item }) => (
                                <Pressable
                                    className="p-3"
                                    onPress={() => this.selectCurrency(item)}
                                >
                                    <View className="flex-row items-center bg-gray100 p-6 rounded-2xl mx-3">
                                        {/* <Image className="h-5 w-5 mr-3" /> */}
                                        <Text className="text-4xl mr-4">{item.flag}</Text>
                                        <View className="flex-1 mr-3">
                                            <Text className="text-h4 font-inter-bold font-semibold">
                                                {item.label}
                                            </Text>
                                            <Text className="text-footnote text-gray600 leading-[20px] mt-1">
                                                {item.desc}
                                            </Text>
                                        </View>
                                    </View>
                                </Pressable>
                            )}
                        />
                    </View>
                    {/* </TouchableWithoutFeedback> */}
                </Modal>
            </>
        );
    }
}

export default CurrencyInputSec;
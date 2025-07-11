import { ExternalLinkIcon, Search, X } from 'lucide-react-native';
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
    Touchable,
    TouchableOpacity,
} from 'react-native';
import HeaderNavigation from './HeaderNavigations';
import CurrencyChooser from './currencyChooser/currencyChooser';


export class CurrencyInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFocused: false,
            modalVisible: false,
            searchQuery: '',  // 1. Add searchQuery to state
            selectedCurrency: props.currencyLabel || {
                label: 'GBP',
                flag: '🇬🇧',
                desc: 'British Pound Sterling',
            },
        };
        this.inputRef = createRef();
    }

    handleInputPress = () => {
        const { isFocused } = this.state;
        if (isFocused) {
            Keyboard.dismiss();
            this.inputRef.current?.blur();
        } else {
            this.inputRef.current?.focus();
        }
    };

    openModal = () => {
        // 5. Clear search query when modal opens
        this.setState({ modalVisible: true, searchQuery: '' });
    };

    closeModal = () => {
        this.setState({ modalVisible: false });
    };

    // 2. Handler to update searchQuery on input change
    handleSearch = (text) => {
        this.setState({ searchQuery: text });
    };

    selectCurrency = (currency) => {
        this.setState({
            selectedCurrency: currency,
            modalVisible: false,
        });

        if (this.props.onCurrencyChange) {
            this.props.onCurrencyChange(currency);
        }
    };


    render() {
        console.log(selectedCurrency)
        const {
            imageSource = require("@/assets/Frame 162744.png"),
            placeholder = '0',
            value,
            onChangeText,
            caption,
            highlighted = false,
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

        const { selectedCurrency, modalVisible } = this.state;



        return (
            <>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                    <View
                        className={`shadow-sm p-4 rounded-xl flex-row justify-between items-center mb-4 w-full ${highlighted ? 'bg-gray100' : 'bg-white'}`}
                        onFocus={() => this.setState({ isFocused: true })}
                        onBlur={() => this.setState({ isFocused: false })}
                    >
                        <View>
                            <Pressable
                                className={`${highlighted ? 'bg-gray100' : 'bg-white'} rounded-lg flex-row items-center p-2`}
                                onPress={this.openModal}
                            >
                                <Text className="text-h4 text-black font-bold">
                                    {selectedCurrency.flag} {selectedCurrency.label}
                                </Text>
                                {imageSource && (
                                    <Image
                                        source={imageSource}
                                        className="w-4 h-4 ml-2"
                                    />
                                )}
                            </Pressable>
                            {caption && (
                                <Text className="text-footnote text-gray700 ml-2">{caption}</Text>
                            )}
                        </View>

                        <Pressable className="flex-1 items-end" onPress={this.handleInputPress}>
                            <TextInput
                                ref={this.inputRef}
                                className="text-h1 font-semibold text-right mr-5"
                                placeholder={placeholder}
                                value={value}
                                onChangeText={onChangeText}
                                keyboardType="numeric"
                                style={{ minWidth: 100 }}
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
                    <CurrencyChooser onClose={this.closeModal} onSelectCurrency={(e) => {
                        this.selectCurrency(e);
                    }} />
                </Modal>
            </>
        );
    }
}

export default CurrencyInput;

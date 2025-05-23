import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Badge from '../components/Badge';
import { SafeAreaView } from 'react-native-safe-area-context';
import Avatar from '../assets/avatar2.png';
import Visa from '../assets/visa.png';
import { ChevronRight, LogOut, MapPin, Pencil } from 'lucide-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';

import ProfileEditModal from '../components/modals/ProfileEditModal';
import ConnectedAccountModa from '../components/modals/ConnectedAccountModal';
import RateCardModal from '../components/modals/RateCardModal';
import BalanceModal from '../components/modals/BalanceModal';
import TransactionHistoryModal from '../components/modals/TransactionHistoryModal';
import AccountsModal from '../components/modals/AccountsModal';
import EditPasswordModal from '../components/modals/EditPasswordModal';
import ContactModal from '../components/modals/ContactModal';
import PrivacyPolicyModal from '../components/modals/PrivacyPolicyModal';
import DeleteAccountModal from '../components/modals/DeleteAccountModal';
import LogoutModal from '../components/modals/LogoutModal';

export default function ProfileScreen() {
    const [editModal, setEditModal] = useState(false);
    const [connectedAccountModal, setConnectedAccountModal] = useState(false);
    const [rateCardModal, setRateCardModal] = useState(false);
    const [balanceModal, setBalanceModal] = useState(false);
    const [transactionHistoryModal, setTransactionHistoryModal] = useState(false);
    const [accountsModal, setAccountsModal] = useState(false);
    const [editPasswordModal, setEditPasswordModal] = useState(false);
    const [contactModal, setContactModal] = useState(false);
    const [privacyPolicyModal, setPrivacyPolicyModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [logoutModal, setLogoutModal] = useState(false);

    return (
        <SafeAreaView className="bg-white px-4 py-2 min-h-screen flex-1">
            <ProfileEditModal
                visible={editModal}
                onClose={() => setEditModal(false)}
            />
            <ConnectedAccountModa
                visible={connectedAccountModal}
                onClose={() => setConnectedAccountModal(false)}
            />
            <RateCardModal
                visible={rateCardModal}
                onClose={() => setRateCardModal(false)}
            />
            <BalanceModal
                visible={balanceModal}
                onClose={() => setBalanceModal(false)}
            />
            <TransactionHistoryModal
                visible={transactionHistoryModal}
                onClose={() => setTransactionHistoryModal(false)}
            />
            <AccountsModal
                visible={accountsModal}
                onClose={() => setAccountsModal(false)}
            />
            <EditPasswordModal
                visible={editPasswordModal}
                onClose={() => setEditPasswordModal(false)}
            />
            <ContactModal
                visible={contactModal}
                onClose={() => setContactModal(false)}
            />
            <PrivacyPolicyModal
                visible={privacyPolicyModal}
                onClose={() => setPrivacyPolicyModal(false)}
            />
            <DeleteAccountModal
                visible={deleteModal}
                onClose={() => setDeleteModal(false)}
            />
            <LogoutModal
                visible={logoutModal}
                onClose={() => setLogoutModal(false)}
            />
            <ScrollView className="max-h-[81vh]" showsVerticalScrollIndicator={false}>
                {/* Profile Header */}


                <View className="flex-row items-center">
                    <Image source={Avatar} className="w-16 h-16 rounded-full" />
                    <View className="ml-4 flex-1">
                        <View className="flex-row items-center">
                            <Text className="text-lg font-semibold mr-2">
                                Harvey Specter
                            </Text>
                            <TouchableOpacity
                                className="p-1 border border-gray-300 rounded-full"
                                onPress={() => setEditModal(true)}
                            >
                                <Pencil
                                    size={14}
                                    className="text-gray-500"
                                />
                            </TouchableOpacity>
                        </View>
                        <View className="flex-row items-center mt-1">
                            <MapPin
                                size={16}
                                className="text-gray-500"
                            />
                            <Text className="text-gray-500">Kuwait</Text>
                        </View>
                        <View className="flex-row mt-2">
                            <Badge>Sport</Badge>
                            <Badge>Life Style</Badge>
                            <Badge>Business</Badge>
                        </View>
                    </View>
                </View>

                {/* Balance Card */}
                <TouchableOpacity
                    onPress={() => setBalanceModal(true)}
                    className="border border-modalBackground rounded-[16px] p-4 mt-4 flex-row justify-between items-center">
                    <View>
                        <Text className="text-gray-500">Total Balance</Text>
                        <Text className="text-xl font-bold">$0</Text>
                        <View className="flex-row items-center mt-2">
                            <Image source={Visa} />
                            <Text className="text-gray-500 ml-2">Credit Card **** 5612</Text>
                        </View>
                    </View>
                    <View>
                        <ChevronRight
                            size={18}
                            className="text-gray-500"
                        />
                    </View>
                </TouchableOpacity>

                {/* Connect Account */}
                <Text className="text-textDarkColor text-base font-[600] mt-4 mb-2">Connect Account</Text>
                <TouchableOpacity
                    onPress={() => setConnectedAccountModal(true)}
                    className="border border-modalBackground rounded-[16px] p-4 flex-row justify-between items-center">

                    <View className="flex-row">
                        <View className={`w-14 h-14 bg-white rounded-full flex items-center justify-center border-[1px] border-modalBackground`}>
                            <Ionicons name="logo-instagram" size={24} color="red" />
                        </View>
                        <View className={`w-14 h-14 bg-white rounded-full flex items-center ml-[-15px] justify-center border-[1px] border-modalBackground`}>
                            <Ionicons name="logo-tiktok" size={24} color="black" />
                        </View>
                        <View className={`w-14 h-14 bg-white rounded-full flex items-center ml-[-15px] justify-center border-[1px] border-modalBackground`}>
                            <Ionicons name="logo-youtube" size={24} color="red" />
                        </View>
                        <View className={`w-14 h-14 bg-white rounded-full flex items-center ml-[-15px] justify-center border-[1px] border-modalBackground`}>
                            <Ionicons name="logo-facebook" size={24} color="blue" />
                        </View>
                    </View>
                    <View>
                        <ChevronRight
                            size={18}
                            className="text-gray-500"
                        />
                    </View>
                </TouchableOpacity>

                {/* Rate Card */}
                <Text className="text-textDarkColor text-base font-[600] mt-4 mb-2">Rate Card</Text>
                <TouchableOpacity
                    onPress={() => setRateCardModal(true)}
                    className="border border-modalBackground rounded-[16px] p-4 flex-row justify-between items-center">

                    <View className="flex-row">
                        <View className={`w-14 h-14 bg-white rounded-full flex items-center justify-center border-[1px] border-modalBackground`}>
                            <Ionicons name="logo-instagram" size={24} color="red" />
                        </View>
                        <View className={`w-14 h-14 bg-white rounded-full flex items-center ml-[-15px] justify-center border-[1px] border-modalBackground`}>
                            <Ionicons name="logo-tiktok" size={24} color="black" />
                        </View>
                        <View className={`w-14 h-14 bg-white rounded-full flex items-center ml-[-15px] justify-center border-[1px] border-modalBackground`}>
                            <Ionicons name="logo-youtube" size={24} color="red" />
                        </View>
                        <View className={`w-14 h-14 bg-white rounded-full flex items-center ml-[-15px] justify-center border-[1px] border-modalBackground`}>
                            <Ionicons name="logo-facebook" size={24} color="blue" />
                        </View>
                    </View>

                    <View>
                        <ChevronRight
                            size={18}
                            className="text-gray-500"
                        />
                    </View>
                </TouchableOpacity>


                <Text className="text-textDarkColor text-base font-[600] mt-4">About & Support</Text>
                <View
                    className="border border-modalBackground rounded-[16px] p-4 mt-2"
                >
                    {[
                        { icon: 'time-outline', label: 'Transaction History', onPress: () => setTransactionHistoryModal(true) },
                        { icon: 'person-outline', label: 'Accounts', onPress: () => setAccountsModal(true) },
                        { icon: 'lock-closed-outline', label: 'Change Password', onPress: () => setEditPasswordModal(true) },
                        { icon: 'document-text-outline', label: 'Privacy Policy', onPress: () => setPrivacyPolicyModal(true) },
                        { icon: 'mail-outline', label: 'Contact Us', onPress: () => setContactModal(true) },
                        { icon: 'trash-outline', label: 'Delete Account', onPress: () => setDeleteModal(true) },
                    ].map((item, index) => (
                        <TouchableOpacity key={index} className="flex-row items-center py-3"
                            onPress={item.onPress}
                        >
                            <Ionicons name={item.icon} size={20} color="gray" />
                            <Text className="ml-3 text-gray-700 flex-1">{item.label}</Text>
                            <Ionicons name="chevron-forward-outline" size={20} color="gray" />
                        </TouchableOpacity>
                    ))}
                </View>
                <View
                    className="border border-modalBackground rounded-[16px] px-4 mt-2"
                >
                    <TouchableOpacity
                        onPress={() => setLogoutModal(true)}
                        className="flex-row items-center py-3">
                        <LogOut
                            size={20}
                            className="text-gray-500"
                        />
                        <Text className="ml-3 text-gray-700 flex-1">Logout</Text>
                        <Ionicons name="chevron-forward-outline" size={20} color="gray" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

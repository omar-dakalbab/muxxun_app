import { create } from 'zustand';

interface AuthState {
    phoneNumber: string;
    passcode: string;
    password: string;
    confirmPassword: string;
    isLogin: boolean;
    smsCode: string;
    signAppSmsCode: string;


    setPhoneNumber: (phone: string) => void;
    setIsLogin: (value: boolean) => void;
    setPassword: (password: string) => void;
    setConfirmPassword: (password: string) => void;
    setPasscode: (passcode: string) => void;
    setSmsCode: (smsCode: string) => void;
    setSignAppSmsCode: (smsCode: string) => void;
    reset: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
    phoneNumber: '',
    passcode: '',
    password: '',
    confirmPassword: '',
    isLogin: false,
    smsCode: '',
    signAppSmsCode: '',

    setPhoneNumber: (phone) => set({ phoneNumber: phone }),
    setIsLogin: (value) => set({ isLogin: value }),
    setPassword: (password) => set({ password }),
    setConfirmPassword: (password) => set({ confirmPassword: password }),
    setPasscode: (passcode) => set({ passcode: passcode }),
    setSmsCode: (smsCode) => set({ smsCode }),
    setSignAppSmsCode: (smsCode) => set({ signAppSmsCode: smsCode }),

    reset: () => set({
        phoneNumber: '',
        passcode: '',
        password: '',
        confirmPassword: '',
        isLogin: false,
        smsCode: '',
        signAppSmsCode: '',
    }),
}));

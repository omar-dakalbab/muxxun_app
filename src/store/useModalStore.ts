import { create } from 'zustand';

interface ModalState {
    passcodeSetupModal: boolean;
    setPasscodeSetupModal: (value: boolean) => void;

    biometricAuthModal: boolean;
    setBiometricAuthModal: (value: boolean) => void;

    reset: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    passcodeSetupModal: false,
    setPasscodeSetupModal: (value: boolean) => set({
        passcodeSetupModal: value
    }),

    biometricAuthModal: false,
    setBiometricAuthModal: (value: boolean) => set({
        biometricAuthModal: value
    }),

    reset: () => set({
        passcodeSetupModal: false,
        biometricAuthModal: false,
    }),
}));

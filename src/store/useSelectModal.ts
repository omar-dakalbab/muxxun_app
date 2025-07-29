// store/useSelectModal.ts
import { create } from "zustand";

type Option = { label: string; value: string };

type SelectModalState = {
    modalKey: string | null;
    selections: Record<number, Option | null>;
    setSelection: (id: number, option: Option) => void;
    setModalKey: (key: string | null) => void;
    resetSelections: () => void;
};

export const useSelectModal = create<SelectModalState>((set) => ({
    modalKey: null,
    selections: {} as Record<number, Option | null>,

    setSelection: (id, option) =>
        set((state) => ({
            selections: { ...state.selections, [id]: option },
        })),

    setModalKey: (key) => set({ modalKey: key }),

    resetSelections: () => set({ selections: {} }),
}));

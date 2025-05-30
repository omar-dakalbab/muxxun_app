// store/useSelectModal.ts
import { create } from "zustand";

type Option = { label: string; value: string };

type SelectModalProps = {
    key: string | null;
    selections: Record<number, Option | null>;
    setSelection: (id: number, option: Option) => void;
};

export const useSelectModal = create<SelectModalProps>((set) => ({
    key: null,
    selections: {},
    setSelection: (id, option) =>
        set((state) => ({
            selections: { ...state.selections, [id]: option },
        })),
}));

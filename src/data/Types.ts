type Option = { label: string; value: string };

type SelectItem = {
    id: number;
    title: string;
    placeholder: string;
    options: Option[];
};

type ToggleItem = {
    title: string;
    description: string;
}

export { type Option, type SelectItem, type ToggleItem };
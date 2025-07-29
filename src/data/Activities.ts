import { SelectItem } from "./Types";

const activityData: SelectItem[] = [
    {
        id: 0,
        title: "What will be the source of funds?",
        placeholder: "Select your source of funds",
        options: [
            { label: "Salary", value: "salary" },
            { label: "Business", value: "business" },
            { label: "Investment", value: "investment" },
            { label: "Other", value: "other" },
        ],
    },
    {
        id: 1,
        title: "What is your current occupation?",
        placeholder: "Select your occupation",
        options: [
            { label: "Student", value: "student" },
            { label: "Employed", value: "employed" },
            { label: "Unemployed", value: "unemployed" },
            { label: "Retired", value: "retired" },
        ],
    },
];

export { activityData };

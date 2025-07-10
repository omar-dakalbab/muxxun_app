import { create } from "zustand";

interface UserConditions {
    isCompletedKYC: boolean;
}

interface PersonalInformation {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    nationality: string;
    position?: string;
    ownsShares?: boolean;
    percentageSharesOwned?: string;
    ownershipNature?: string;
}

interface ActivitiesState {
    [key: string]: string;
}

interface OperationActivity {
    [key: string]: string;
}

interface Services {
    [key: string]: boolean;
}

interface IdentityVerification {
    countryOfResidence?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    dateOfBirth?: string;
    nationality?: string;
    city?: string;
    address?: string;
    address2?: string;
    postalCode?: string;
    issueCountry?: string;
    documentType?: string;
    status?: "pending" | "approved" | "rejected";
}

// BUSINESS
interface CompanyType {
    [key: string]: string;
}

interface CountryAndName {
    country: string;
    name: string;
}

interface AccountDataState {
    personalInformation: PersonalInformation;
    activities: ActivitiesState;
    operationActivities: OperationActivity;
    services: Services;
    identityVerification: IdentityVerification;
    companyType: CompanyType;
    countryAndName: CountryAndName;
    userConditions?: UserConditions;

    setPersonalInformation: (info: Partial<PersonalInformation>) => void;
    setField: (field: keyof PersonalInformation, value: string) => void;
    setActivitiesSelection: (id: string, value: string) => void;
    setOperationActivities: (id: string, value: string) => void;
    setServicesSelection: (id: string, value: boolean) => void;
    setIdentityVerification: (info: Partial<IdentityVerification>) => void;
    setCompanyType: (id: string, value: string) => void;
    setCountryAndName: (info: Partial<CountryAndName>) => void;
    setUserConditions: (conditions: Partial<UserConditions>) => void;

    reset: () => void;
}

const personalInformationState: PersonalInformation = {
    firstName: "",
    lastName: "",
    email: "",
    dateOfBirth: "",
    nationality: "",
    position: "",
    ownsShares: false,
    percentageSharesOwned: "",
    ownershipNature: "",
};

const activitiesState: ActivitiesState = {};
const operationActivityState: OperationActivity = {};
const servicesState: Services = {};
const identityVerificationState: IdentityVerification = {}
const companyTypeState: CompanyType = {};
const countryAndNameState: CountryAndName = {
    country: "",
    name: "",
};
const initialUserConditions: UserConditions = {
    isCompletedKYC: false,
};


export const useAccountDataStore = create<AccountDataState>((set) => ({
    personalInformation: { ...personalInformationState },
    activities: { ...activitiesState },
    operationActivities: { ...operationActivityState },
    services: { ...servicesState },
    identityVerification: { ...identityVerificationState },
    companyType: { ...companyTypeState },
    countryAndName: { ...countryAndNameState },
    userConditions: { ...initialUserConditions },

    setPersonalInformation: (info) =>
        set((state) => ({
            personalInformation: { ...state.personalInformation, ...info },
        })),

    setField: (field, value) =>
        set((state) => ({
            personalInformation: {
                ...state.personalInformation,
                [field]: value,
            },
        })),


    setActivitiesSelection: (id, value) =>
        set((state) => ({
            activities: {
                ...state.activities,
                [id]: value,
            },
        })),

    setOperationActivities: (id, value) =>
        set((state) => ({
            operationActivities: {
                ...state.operationActivities,
                [id]: value,
            },
        })),

    setServicesSelection: (id, value) =>
        set((state) => ({
            services: {
                ...state.services,
                [id]: value,
            },
        })),

    setIdentityVerification: (info) =>
        set((state) => ({
            identityVerification: {
                ...state.identityVerification,
                ...info,
            },
        })),

    setCompanyType: (id: string, value: string) =>
        set((state) => ({
            companyType: {
                ...state.companyType,
                [id]: value,
            },
        })),



    setCountryAndName: (info) =>
        set((state) => ({
            countryAndName: { ...state.countryAndName, ...info },
        })),

    setUserConditions: (conditions: Partial<UserConditions>) =>
        set((state) => ({
            userConditions: { ...state.userConditions, ...conditions } as UserConditions,
        })),

    reset: () => set({
        personalInformation: { ...personalInformationState },
        activities: { ...activitiesState },
        operationActivities: { ...operationActivityState },
        services: { ...servicesState },
        identityVerification: { ...identityVerificationState },
        companyType: { ...companyTypeState },
        countryAndName: { ...countryAndNameState },
        userConditions: { ...initialUserConditions },
    }),
}));

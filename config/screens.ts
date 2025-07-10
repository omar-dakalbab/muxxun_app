import OnboardingScreen from "../src/screens/OnboardingScreen";
import SignupScreen from "../src/screens/Auth/Signup/SignupScreen";
import LoginScreen from "../src/screens/Auth/Login/LoginScreen";
import PhoneNumber_1 from "../src/screens/Auth/Signup/PhoneNumber_1";
import PhoneNumberVerifyCode from "../src/screens/Auth/Signup/PhoneNumberVerifyCode";
import PhoneNumberVerified from "../src/screens/Auth/Signup/PhoneNumberVerified";
import CreatePasscode from "../src/screens/Auth/Signup/CreatePasscode";
import CreatePasscodeDigits from "../src/screens/Auth/Signup/CreatePasscodeDigits";
import NotificationAccept from "../src/screens/Auth/Signup/NotificationAccept";
import Home from "@/screens/Home";
import AccountSetup from "@/screens/AccountSetup";
import VerifyIdentify from "@/screens/Personal/VerifyIdentify";
import persInfo from "@/screens/Personal/PersonelInformation";
import Activites from "@/screens/Personal/Activites";
import OperationActivity from "@/screens/Personal/OperationActivity";
import Reviews from "@/screens/Personal/Reviews";
import CameraAccess from "@/screens/Personal/CameraAccess";
import PersonelData from "@/screens/Business/PersonelData";
import CameraScreen from "@/screens/Personal/CameraScreen";
import DocumentPreviewScreen from "@/screens/Personal/DocumentPreviewScreen";
import BackDocumentPreviewScreen from "@/screens/Personal/BackDocumentPreviewScreen";
import BackCameraScreen from "@/screens/Personal/BackCameraScreen";
import BusinessVerifyIdentify from "@/screens/Business/BusinessVerifyIdentify";
import CountryAndName from "@/screens/Business/CountryAndName";
import Address from "@/screens/Business/Address";
import CorporateInformation from "@/screens/Business/CorporateInformation";
import Services from "@/screens/Personal/Services";
import IdentityVerification from "@/screens/Personal/IdentityVerification";
import SumsubApplicant from "@/screens/Personal/SumsubApplicant";
import IdentityDocument from "@/screens/Personal/IdentityDocument";
import SignApplications from "@/screens/Personal/SignApplications";
import SendSmsScreen from "@/screens/Auth/SendSmsScreen";
import { CompanyType } from "@/screens/Business/CompanyType";

export const screens = [
    { name: "Onboarding", component: OnboardingScreen },
    { name: "Signup", component: SignupScreen },
    { name: "Login", component: LoginScreen },
    { name: "PhoneNumber_1", component: PhoneNumber_1 },
    { name: "PhoneNumberVerifyCode", component: PhoneNumberVerifyCode },
    { name: "PhoneNumberVerified", component: PhoneNumberVerified },
    { name: "CreatePasscode", component: CreatePasscode },
    { name: "CreatePasscodeDigits", component: CreatePasscodeDigits },
    { name: "NotificationAccept", component: NotificationAccept },
    { name: "Home", component: Home },

    { name: "AccountSetup", component: AccountSetup },
    { name: "VerifyIdentify", component: VerifyIdentify },
    { name: "persInfo", component: persInfo },
    { name: "Activites", component: Activites },
    { name: "OperationActivity", component: OperationActivity },
    { name: "Reviews", component: Reviews },
    { name: "CameraAccess", component: CameraAccess },
    { name: "PersonelData", component: PersonelData },
    { name: "CameraScreen", component: CameraScreen },
    { name: "DocumentPreviewScreen", component: DocumentPreviewScreen },
    { name: "BackDocumentPreviewScreen", component: BackDocumentPreviewScreen },
    { name: "BackCameraScreen", component: BackCameraScreen },

    { name: "BusinessVerifyIdentify", component: BusinessVerifyIdentify },
    { name: "CountryAndName", component: CountryAndName },
    { name: "Address", component: Address },
    { name: "CorporateInformation", component: CorporateInformation },
    { name: "Services", component: Services },
    { name: "IdentityVerification", component: IdentityVerification },
    { name: "SumsubApplicant", component: SumsubApplicant },
    { name: "IdentityDocument", component: IdentityDocument },
    { name: "CompanyType", component: CompanyType },
    { name: "SignApplications", component: SignApplications },
    { name: "SendSmsScreen", component: SendSmsScreen }

];

export const disableBottomBarScreens = [
    "Onboarding",
    "Login",
    "Signup",
    "PhoneNumber_1",
];

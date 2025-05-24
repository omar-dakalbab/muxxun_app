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
import PersData from "@/screens/Business/PersData";
import CameraScreen from "@/screens/Personal/CameraScreen";
import DocumentPreviewScreen from "@/screens/Personal/DocumentPreviewScreen";
import BackDocumentPreviewScreen from "@/screens/Personal/BackDocumentPreviewScreen";
import BackCameraScreen from "@/screens/Personal/BackCameraScreen";
import Business1 from "@/screens/Business/business1";
import CountryAndnm from "@/screens/Business/CountryAndnm";
import Address from "@/screens/Business/Address";
import CorporateInfo from "@/screens/Business/CorporateInfo";
import Services from "@/screens/Personal/Services";
import IdentityVerification from "@/screens/Personal/IdentityVerification";
import SumsubApplicant from "@/screens/Personal/SumsubApplicant";
import IdentityDocument from "@/screens/Personal/IdentityDocument";
import SignApplications from "@/screens/Personal/SignApplications";

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
    { name: "PersData", component: PersData },
    { name: "CameraScreen", component: CameraScreen },
    { name: "DocumentPreviewScreen", component: DocumentPreviewScreen },
    { name: "BackDocumentPreviewScreen", component: BackDocumentPreviewScreen },
    { name: "BackCameraScreen", component: BackCameraScreen },
    { name: "Business1", component: Business1 },
    { name: "CountryAndnm", component: CountryAndnm },
    { name: "Address", component: Address },
    { name: "CorporateInfo", component: CorporateInfo },
    { name: "Services", component: Services },
    { name: "IdentityVerification", component: IdentityVerification },
    { name: "SumsubApplicant", component: SumsubApplicant },
    { name: "IdentityDocument", component: IdentityDocument },

    { name: "SignApplications", component: SignApplications }

];

export const disableBottomBarScreens = [
    "Onboarding",
    "Login",
    "Signup",
    "PhoneNumber_1",
];

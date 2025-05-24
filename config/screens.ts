import OnboardingScreen from "../src/screens/OnboardingScreen";
import SignupScreen from "../src/screens/Auth/Signup/SignupScreen";
import LoginScreen from "../src/screens/Auth/Login/LoginScreen";
import PhoneNumber_1 from "../src/screens/Auth/Signup/PhoneNumber_1";
import PhoneNumberVerifyCode from "../src/screens/Auth/Signup/PhoneNumberVerifyCode";
import PhoneNumberVerified from "../src/screens/Auth/Signup/PhoneNumberVerified";
import CreatePasscode from "../src/screens/Auth/Signup/CreatePasscode";
import CreatePasscodeDigits from "../src/screens/Auth/Signup/CreatePasscodeDigits";
import NotificationAccept from "../src/screens/Auth/Signup/NotificationAccept";

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
];

export const disableBottomBarScreens = [
    "Onboarding",
    "Login",
    "Signup",
    "PhoneNumber_1",
];

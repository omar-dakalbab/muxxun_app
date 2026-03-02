# Muxxun — Mobile Fintech Application

A cross-platform mobile fintech app built with React Native & Expo that enables users to send money, exchange currencies, top up accounts, and track financial transactions — all with a smooth, modern UI and a full KYC verification flow.

---

## Features

### Authentication
- Phone number-based registration and login
- OTP (SMS) verification
- Passcode creation and confirmation
- Biometric authentication (Face ID / Touch ID)

### Onboarding
- Video-based onboarding carousel (3 slides)
- Push notification permission setup

### KYC Verification
- **Personal Account** — 17-step verification flow including personal info, document capture, selfie, and identity signing
- **Business Account** — 16-step flow including company info, business type, address, and personnel data
- Identity document capture (front & back via camera)
- Integration with **Sumsub** for automated identity verification

### Home Dashboard
- Swipeable account cards with balance display
- Transaction history feed
- Transfer/activity charts
- Dynamic widgets based on KYC status

### Transactions
- Send money to other users
- User search by phone or name
- Passcode confirmation before sending
- Transaction review screen
- Complete transaction history with income/expense categorization

### Top-Up
- Bank transfer
- Credit / debit card
- Mobile payment
- Bank information display
- Payment success confirmation

### Currency Exchange
- Multi-currency conversion input
- Live exchange rate display
- Fee breakdown (convert fee + platform fee)
- Guaranteed rate indicator

---

## Tech Stack

| Category | Technology |
|---|---|
| Framework | React Native 0.79.2, Expo 53 |
| Language | TypeScript 5.7 |
| Routing | Expo Router 5 (file-based) |
| State Management | Zustand 5 |
| Forms | React Hook Form 7 |
| Styling | NativeWind 2 (Tailwind CSS for RN) |
| Animation | React Native Reanimated 3 |
| Gestures | React Native Gesture Handler |
| Bottom Sheets | @gorhom/bottom-sheet |
| Icons | Lucide React Native, @expo/vector-icons |
| Charts | Victory Native, React Native Gifted Charts |
| Lists | @shopify/flash-list |
| Camera | Expo Camera, Expo Image Picker |
| Auth | Expo Local Authentication |
| Notifications | Expo Notifications |
| Navigation | React Navigation (Stack + Bottom Tabs) |
| KYC Provider | Sumsub |

---

## Project Structure

```
muxxun/
├── app/                        # Expo Router pages
│   ├── (auth)/                 # Login & signup flows
│   ├── (app)/                  # Main app (home + bottom nav)
│   ├── (account)/              # KYC verification flows
│   │   ├── Personal/           # 17-screen personal KYC
│   │   └── Business/           # 16-screen business KYC
│   ├── (exchange)/             # Currency exchange
│   ├── (topup)/                # Top-up payment methods
│   ├── (transactions)/         # Send money & history
│   └── onboarding.tsx          # Video onboarding
├── src/
│   ├── components/
│   │   ├── home/               # Dashboard components
│   │   ├── ui/                 # Reusable UI primitives
│   │   ├── BottomBar/          # Custom tab bar
│   │   └── layout/             # Layout wrappers
│   ├── store/                  # Zustand stores
│   │   ├── useAuthStore.ts
│   │   ├── useAccountDataStore.ts
│   │   └── useModalStore.ts
│   ├── data/                   # Static data & types
│   └── assets/                 # Images, icons, SVGs, videos
├── tailwind.config.js
├── app.json
└── tsconfig.json
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (macOS) or Android Emulator, or the **Expo Go** app on a physical device

### Installation

```bash
# Clone the repository
git clone https://github.com/omar-dakalbab/muxxun.git
cd muxxun

# Install dependencies
npm install

# Start the development server
npm start
```

### Running on a platform

```bash
# iOS
npm run ios

# Android
npm run android

# Web
npm run web
```

---

## Design Highlights

- **Primary color**: `#091249` (deep navy)
- **Typography**: Inter & SF Pro
- File-based routing with grouped routes `(auth)`, `(app)`, `(account)` for clean navigation architecture
- Conditional home screen rendering based on KYC completion state
- Full gesture support with swipeable cards, bottom sheets, and smooth transitions

---

## License

This project is licensed under the BSD Zero Clause License. See the [LICENSE](./LICENSE) file for details.

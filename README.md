## Demo Features

- Displays prices of Gold, Silver, Platinum, and Palladium
- Independent loading indicators for each metal
- Error handling with Retry functionality
- Pull-to-refresh support
- Navigation to the Details screen
- Real-time timestamp display
- Clean card-based UI with shadow styling

---

# Metal Price App

A React Native mobile application that displays prices of precious metals including Gold, Silver, Platinum, and Palladium. The app demonstrates navigation, API handling, loading states, error handling, and pull-to-refresh functionality.

---

## Features

- Display metal prices for:
  - Gold
  - Silver
  - Platinum
  - Palladium
- Separate loading indicator for each metal
- Error handling with Retry button
- Pull-to-refresh functionality
- Navigation between Home and Details screens
- Details screen showing:
  - Current price
  - Previous open price
  - Previous close price
  - Current date and time
- App logo icon added
- Clean UI with card layout and shadow styling

---

## Tech Stack

- React Native
- JavaScript
- React Navigation
- Android Emulator
- VS Code

---

## Project Structure

MetalPriceApp
│
├── assets
│   └── logo.png
│
├── components
│   └── MetalCard.js
│
├── navigation
│   └── AppNavigator.js
│
├── screens
│   ├── HomeScreen.js
│   └── DetailsScreen.js
│
├── services
│   └── api.js
│
├── App.js
├── package.json
└── README.md

---

## Installation

Clone the repository:

git clone <repository-url>

Install dependencies:

npm install

---

## Run the Application

Start Metro:

npx react-native start

Run Android:

npx react-native run-android

---

## Author

Priyanka Kudchi

---

## Assignment Objective

Build a React Native application that displays prices of precious metals and mimics a real-world financial product experience.

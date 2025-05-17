# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

## NativeWind install

npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context

https://www.nativewind.dev/docs/getting-started/installation

npx expo customize metro.config.js

# in this =>

const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(\_\_dirname);

module.exports = withNativeWind(config, { input: "./app/globals.css" });

# create in root:

nativewind-env.d.ts => add /// <reference types="nativewind/types"/>

# after:

npx expo start --clear

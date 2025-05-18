import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import "./globals.css";

export default function RootLayout() {
    return (
        <View style={{ flex: 1, backgroundColor: "darkcyan" }}>
            <StatusBar translucent backgroundColor="transparent" />
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
                <Stack.Screen
                    name="movie/[id]"
                    options={{ headerShown: false }}
                />
            </Stack>
        </View>
    );
}

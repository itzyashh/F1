import { Slot, Stack } from "expo-router";
import color from "../../assets/color";
import { StatusBar } from "expo-status-bar";
import ApolloClientProvider from "../providers/ApolloClientProvider";

export default function RootLayout() {

    console.log('RootLayout')
    return (
    <ApolloClientProvider>
    <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: color.primary,
            },
            headerTitleStyle: {
                color:'#fff'
            },
            headerTintColor: '#fff',
            headerShadowVisible: false,
        }}
    >
        <Stack.Screen name="index" options={{ title: 'F1 Racing' }}  />
    </Stack>
        <StatusBar style="light" />
    </ApolloClientProvider>)
    
}
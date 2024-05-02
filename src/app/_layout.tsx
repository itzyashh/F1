import { Slot, Stack } from "expo-router";
import color from "../../assets/color";

export default function RootLayout() {
    console.log('RootLayout')
    return <Stack
        screenOptions={{
            headerStyle: {
                backgroundColor: color.primary,
            },
            headerTitleStyle: {
                color:'#fff'
            },
            headerTintColor: '#fff',
        }}
    >
        <Stack.Screen name="index" options={{ title: 'F1 Racing' }}  />
    </Stack>
}
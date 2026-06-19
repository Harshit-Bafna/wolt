import { Stack } from 'expo-router';

export default function RootNav() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(public)" />
        </Stack>
    );
}

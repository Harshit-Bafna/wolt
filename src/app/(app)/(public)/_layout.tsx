import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: 'white' } }}>
            <Stack.Screen name="index" />

            <Stack.Screen
                name="otherOptions"
                options={{
                    headerShown: false,
                    presentation: 'formSheet',
                    title: '',
                    sheetAllowedDetents: [0.6],
                    headerShadowVisible: false,
                    sheetCornerRadius: 16,
                }}
            />
        </Stack>
    );
}

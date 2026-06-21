import { Stack } from 'expo-router';

export default function Layout() {
    return (
        <Stack>
            <Stack.Screen
                name="(tabs)"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(modal)/(restaurant)/[id]"
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="(modal)/location"
                options={{
                    presentation: 'formSheet',
                    sheetAllowedDetents: [0.7],
                    title: '',
                    sheetCornerRadius: 16,
                    sheetGrabberVisible: true,
                }}
            />
            <Stack.Screen
                name="(modal)/filter"
                options={{
                    presentation: 'formSheet',
                    sheetAllowedDetents: [0.7],
                    title: '',
                    sheetCornerRadius: 16,
                    sheetGrabberVisible: true,
                }}
            />
        </Stack>
    );
}

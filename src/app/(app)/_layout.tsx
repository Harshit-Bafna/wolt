import useUserStore from '@/src/hooks/useUserStore';
import { Stack } from 'expo-router';

export default function RootNav() {
    const { isGuest, user } = useUserStore();

    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Protected guard={isGuest || user}>
                <Stack.Screen name="(auth)" />
            </Stack.Protected>
            <Stack.Protected guard={!isGuest && !user}>
                <Stack.Screen name="(public)" />
            </Stack.Protected>
        </Stack>
    );
}

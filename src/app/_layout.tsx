import { Slot } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import { Nunito_400Regular, Nunito_700Bold, Nunito_900Black } from '@expo-google-fonts/nunito';
import { Fragment } from 'react';
import { StatusBar } from 'react-native';

const queryClient = new QueryClient();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
        Nunito_400Regular,
        Nunito_700Bold,
        Nunito_900Black,
    });

    if (!fontsLoaded) return null;

    return (
        <Fragment>
            <StatusBar barStyle="dark-content" />
            <GestureHandlerRootView style={{ flex: 1 }}>
                <QueryClientProvider client={queryClient}>
                    <Slot />
                </QueryClientProvider>
            </GestureHandlerRootView>
        </Fragment>
    );
}

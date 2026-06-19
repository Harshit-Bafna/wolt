import { useRouter } from 'expo-router';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import AuthButton from './_components/authButton';
import { Colors, Fonts } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import useUserStore from '@/hooks/useUserStore';

export default function OtherOptions() {
    const router = useRouter();
    const { setIsGuest } = useUserStore();

    const continueAsGuest = () => {
        setIsGuest(true);
    };

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => router.dismiss()}
                style={({ pressed }) => [styles.closeButton, pressed && styles.closeButtonPressed]}>
                <Ionicons
                    name="close"
                    size={24}
                />
            </Pressable>

            <Text style={styles.title}>Login In or create a Wolt account</Text>

            <View style={styles.buttonContainer}>
                <Animated.View entering={FadeInDown.delay(100)}>
                    <AuthButton
                        icon="logo-apple"
                        textColor="#fff"
                        backgroundColor="#000"
                        title="Sign in with Apple"
                    />
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(150)}>
                    <AuthButton
                        icon="logo-google"
                        textColor="#fff"
                        backgroundColor="#4285f4"
                        title="Sign in with Google"
                    />
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(250)}>
                    <AuthButton
                        icon="logo-discord"
                        textColor="#fff"
                        backgroundColor="#5865F2"
                        title="Continue with Discord"
                    />
                </Animated.View>
                <Animated.View entering={FadeInDown.delay(250)}>
                    <AuthButton
                        onPress={continueAsGuest}
                        textColor={Colors.secondary}
                        backgroundColor="#fff"
                        title="Continue as guest"
                    />
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 14,
    },
    closeButton: {
        backgroundColor: Colors.light,
        borderRadius: 40,
        padding: 8,
        alignSelf: 'flex-end',
    },
    closeButtonPressed: {
        opacity: 0.7,
    },
    title: {
        fontSize: 30,
        fontFamily: Fonts.brandBlack,
        marginVertical: 22,
    },
    buttonContainer: {
        gap: 12,
        width: '100%',
    },
});

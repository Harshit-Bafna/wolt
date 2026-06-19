import { Image, StyleSheet, View, Text, Linking } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

import { Fonts } from '@/src/constants/theme';
import AuthButton from './_components/authButton';
import InfiniteScroll from './_components/infiniteScroll';
import { Link } from 'expo-router';

export default function Index() {
    const openWebBrowser = () => {
        Linking.openURL('https://github.com/Harshit-Bafna');
    };

    return (
        <View style={styles.container}>
            <View style={styles.infiniteScrollContainer}>
                <View>
                    <InfiniteScroll
                        scrollDirection="down"
                        iconSet="set1"
                    />
                </View>
                <View>
                    <InfiniteScroll
                        scrollDirection="up"
                        iconSet="set2"
                    />
                </View>
                <View>
                    <InfiniteScroll
                        scrollDirection="down"
                        iconSet="set3"
                    />
                </View>
                <LinearGradient
                    colors={['transparent', '#fff']}
                    style={{
                        position: 'absolute',
                        height: 200,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                />
            </View>

            <View style={styles.contentContainer}>
                <Image
                    source={require('@/assets/images/wolt-logo.png')}
                    style={styles.brandlogo}
                />

                <Animated.Text
                    entering={FadeInDown}
                    style={styles.tagLine}>
                    Almost everything delivered
                </Animated.Text>

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
                    <Animated.View entering={FadeInDown.delay(200)}>
                        <Link
                            href={'/(app)/(public)/otherOptions'}
                            asChild>
                            <AuthButton
                                textColor="#666"
                                backgroundColor="#f0f0f0"
                                title="Other Options"
                            />
                        </Link>
                    </Animated.View>
                </View>

                <Animated.View
                    style={styles.privacyContainer}
                    entering={FadeInDown.delay(400)}>
                    <Text style={styles.privacyText}>
                        Please visit{' '}
                        <Text
                            style={styles.privacyLink}
                            onPress={openWebBrowser}>
                            Wolt Privacy Statement
                        </Text>{' '}
                        to learn about personal data processing at Wolt.
                    </Text>
                </Animated.View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    infiniteScrollContainer: {
        flex: 0.75,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 30,
    },
    brandlogo: {
        width: '100%',
        height: 48,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    tagLine: {
        fontSize: 32,
        fontFamily: Fonts.brandBlack,
        textAlign: 'center',
        marginBottom: 50,
        lineHeight: 36,
    },
    buttonContainer: {
        gap: 12,
        width: '100%',
    },
    privacyContainer: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    privacyText: {
        fontSize: 12,
        color: '#999',
        textAlign: 'center',
        lineHeight: 18,
    },
    privacyLink: {
        color: '#4285F4',
        textDecorationLine: 'underline',
    },
});

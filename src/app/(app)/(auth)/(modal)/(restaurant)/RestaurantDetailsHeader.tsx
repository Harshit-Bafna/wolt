import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Animated, { Extrapolation, interpolate, SharedValue, useAnimatedStyle } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '@/constants/theme';

interface RestaurantHeaderProps {
    scrollOffset: SharedValue<number>;
}

const SCROLL_THRESHOLD_START = 50;
const SCROLL_THRESHOLD_END = 80;

const MENU_ITEMS = [
    { label: 'More info', icon: 'information-circle' as const },
    { label: 'Add to favorites', icon: 'heart' as const },
    { label: 'Share venue', icon: 'share-outline' as const },
];

const RestaurantDetailsHeader = ({ scrollOffset }: RestaurantHeaderProps) => {
    const insets = useSafeAreaInsets();
    const router = useRouter();
    const [menuVisible, setMenuVisible] = useState(false);

    const headerStyle = useAnimatedStyle(() => {
        const backgroundOpacity = interpolate(scrollOffset.value, [SCROLL_THRESHOLD_START, SCROLL_THRESHOLD_END], [0, 1], Extrapolation.CLAMP);
        const shadowOpacity = interpolate(scrollOffset.value, [SCROLL_THRESHOLD_START, SCROLL_THRESHOLD_END], [0, 0.1], Extrapolation.CLAMP);
        return {
            backgroundColor: `rgba(255,255,255, ${backgroundOpacity})`,
            shadowOpacity,
        };
    });

    const searchBarStyle = useAnimatedStyle(() => {
        const backgroundOpacity = interpolate(scrollOffset.value, [0, SCROLL_THRESHOLD_START], [0.9, 1], Extrapolation.CLAMP);
        return {
            backgroundColor: `rgba(230, 230, 230, ${backgroundOpacity})`,
        };
    });

    const buttonStyle = useAnimatedStyle(() => ({
        opacity: interpolate(scrollOffset.value, [0, SCROLL_THRESHOLD_END], [1, 0], Extrapolation.CLAMP),
    }));

    const buttonStyle2 = useAnimatedStyle(() => ({
        opacity: interpolate(scrollOffset.value, [SCROLL_THRESHOLD_START * 0.3, SCROLL_THRESHOLD_END], [0, 1], Extrapolation.CLAMP),
    }));

    return (
        <Animated.View style={[styles.headerContainer, headerStyle, { paddingTop: insets.top }]}>
            <View style={styles.headerContent}>
                <Pressable
                    style={({ pressed }) => [styles.backButton, pressed && styles.pressed]}
                    onPress={() => router.back()}>
                    <Ionicons
                        name="chevron-back"
                        size={25}
                    />
                </Pressable>

                <Animated.View style={[styles.searchBar, searchBarStyle]}>
                    <Ionicons
                        name="search"
                        size={20}
                        color={Colors.muted}
                    />
                    <TextInput
                        style={{ fontSize: 15 }}
                        placeholder="Search"
                        placeholderTextColor={Colors.muted}
                    />
                </Animated.View>

                <View style={{ width: 40, height: 40 }} />

                <Animated.View style={[styles.iconButton, buttonStyle]}>
                    <Ionicons
                        name="heart-outline"
                        size={24}
                    />
                </Animated.View>

                <Animated.View style={[styles.iconButton, buttonStyle2]}>
                    <Pressable
                        style={({ pressed }) => [styles.iconPressable, pressed && styles.pressed]}
                        onPress={() => setMenuVisible(true)}>
                        <Ionicons
                            name="ellipsis-horizontal"
                            size={24}
                        />
                    </Pressable>
                </Animated.View>
            </View>

            <Modal
                visible={menuVisible}
                transparent
                animationType="fade"
                onRequestClose={() => setMenuVisible(false)}>
                <TouchableWithoutFeedback onPress={() => setMenuVisible(false)}>
                    <View style={styles.modalOverlay}>
                        <TouchableWithoutFeedback>
                            <View style={styles.menuCard}>
                                {MENU_ITEMS.map(({ label, icon }, index) => (
                                    <View key={label}>
                                        <Pressable
                                            style={({ pressed }) => [styles.menuItem, pressed && styles.menuItemPressed]}
                                            onPress={() => {
                                                setMenuVisible(false);
                                                console.log(`Pressed: ${label}`);
                                            }}>
                                            <Text style={styles.menuLabel}>{label}</Text>
                                            <Ionicons
                                                name={icon}
                                                size={18}
                                                color="#333"
                                            />
                                        </Pressable>
                                        {index < MENU_ITEMS.length - 1 && <View style={styles.divider} />}
                                    </View>
                                ))}
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        boxShadow: '0px 4px 2px -2px rgba(0, 0, 0, 0.05)',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        paddingVertical: 12,
        gap: 8,
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 2px -2px rgba(0, 0, 0, 0.1)',
    },
    searchBar: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 12,
        borderRadius: 20,
        gap: 8,
    },
    iconButton: {
        position: 'absolute',
        top: 12,
        right: 16,
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: Colors.light,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 2px -2px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
    },
    iconPressable: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    pressed: {
        opacity: 0.6,
    },
    // Modal / context menu
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.15)',
        justifyContent: 'flex-start',
        alignItems: 'flex-end',
        paddingTop: 100,
        paddingRight: 16,
    },
    menuCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        minWidth: 190,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.12,
        shadowRadius: 12,
        elevation: 8,
        overflow: 'hidden',
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 13,
        gap: 12,
    },
    menuItemPressed: {
        backgroundColor: '#f2f2f2',
    },
    menuLabel: {
        fontSize: 15,
        color: '#111',
    },
    divider: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 16,
    },
});

export default RestaurantDetailsHeader;

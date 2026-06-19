import useUserStore from '@/src/hooks/useUserStore';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useHeaderHeight } from 'expo-router/build/react-navigation';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
    const headerHeight = useHeaderHeight();

    const { setIsGuest } = useUserStore();

    const onLogout = () => {
        console.log('logout');
        setIsGuest(false);
    };

    return (
        <ScrollView
            contentContainerStyle={[styles.content]}
            contentInsetAdjustmentBehavior="automatic"
            showsHorizontalScrollIndicator={false}
            style={styles.container}>
            <View style={styles.section}>
                <Pressable style={({ pressed }) => [styles.menuItem, pressed && styles.menuItemPressed]}>
                    <View style={styles.menuItemLeft}>
                        <Text style={styles.menuItemTitle}>Order History</Text>
                        <Text style={styles.menuItemSubtitle}>No Orders</Text>
                    </View>
                    <Ionicons
                        name="chevron-forward"
                        size={20}
                        color="#999"
                    />
                </Pressable>

                <View style={styles.separator} />

                <Pressable style={({ pressed }) => [styles.menuItem, pressed && styles.menuItemPressed]}>
                    <Text style={styles.menuItemTitle}>Gift cards and credits</Text>
                    <Ionicons
                        name="chevron-forward"
                        size={20}
                        color="#999"
                    />
                </Pressable>

                <View style={styles.separator} />

                <Pressable style={({ pressed }) => [styles.menuItem, pressed && styles.menuItemPressed]}>
                    <Text style={styles.menuItemTitle}>Buy gift card</Text>
                    <Ionicons
                        name="chevron-forward"
                        size={20}
                        color="#999"
                    />
                </Pressable>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Your favorites</Text>
                <View style={styles.favoritesCard}>
                    <Text style={styles.favoritesText}>
                        Add a restaurant to your favorites by tapping the heart icon in the menu view. Your favorites are displayed here!
                    </Text>
                    <View style={styles.favoritesIllustration}>
                        <View style={styles.storeIcon}>
                            <View style={styles.awning} />
                            <View style={styles.storeFront} />
                            <View style={styles.storeBase} />
                        </View>
                        <View style={styles.heartIcon}>
                            <Ionicons
                                name="heart"
                                size={24}
                                color="#FF3B30"
                            />
                        </View>
                    </View>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Quick links</Text>

                <Pressable style={({ pressed }) => [styles.linkItem, pressed && styles.linkItemPressed]}>
                    <Text style={styles.linkText}>Invite friends</Text>
                    <Ionicons
                        name="chevron-forward"
                        size={20}
                        color="#999"
                    />
                </Pressable>

                <View style={styles.separator} />

                <Pressable style={({ pressed }) => [styles.linkItem, pressed && styles.linkItemPressed]}>
                    <Text style={styles.linkText}>Redeem code</Text>
                    <Ionicons
                        name="chevron-forward"
                        size={20}
                        color="#999"
                    />
                </Pressable>

                <View style={styles.separator} />

                <Pressable style={({ pressed }) => [styles.linkItem, pressed && styles.linkItemPressed]}>
                    <Text style={styles.linkText}>Contact Support</Text>
                    <Ionicons
                        name="chevron-forward"
                        size={20}
                        color="#999"
                    />
                </Pressable>
            </View>

            <Pressable
                style={({ pressed }) => [styles.logoutButton, pressed && styles.logoutButtonPressed]}
                onPress={onLogout}>
                <Text style={styles.logoutButtonText}>Sign out</Text>
            </Pressable>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        paddingBottom: 32,
    },
    section: {
        marginBottom: 16,
        paddingHorizontal: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: '700',
        color: '#000',
        paddingVertical: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    menuItemPressed: {
        opacity: 0.6,
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
    },
    menuItemLeft: {
        flex: 1,
    },
    menuItemTitle: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 4,
    },
    menuItemSubtitle: {
        fontSize: 14,
        color: '#999',
    },
    separator: {
        height: 1,
        backgroundColor: '#F0F0F0',
    },
    favoritesCard: {
        flexDirection: 'row',
        paddingVertical: 20,
        gap: 16,
    },
    favoritesText: {
        flex: 1,
        fontSize: 14,
        color: '#666',
        lineHeight: 20,
    },
    favoritesIllustration: {
        width: 80,
        height: 80,
    },
    storeIcon: {
        width: 80,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    awning: {
        width: 60,
        height: 20,
        backgroundColor: '#4ECDE6',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        position: 'absolute',
        top: 10,
    },
    storeFront: {
        width: 60,
        height: 40,
        backgroundColor: '#F0F0F0',
        position: 'absolute',
        top: 30,
    },
    storeBase: {
        width: 60,
        height: 8,
        backgroundColor: '#E0E0E0',
        position: 'absolute',
        bottom: 12,
    },
    heartIcon: {
        position: 'absolute',
        top: -4,
        right: -4,
        backgroundColor: '#fff',
        borderRadius: 16,
        width: 32,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 2px -2px rgba(0, 0, 0, 0.1)',
    },
    linkItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
    },
    linkItemPressed: {
        opacity: 0.6,
        backgroundColor: '#f5f5f5',
        borderRadius: 12,
    },
    linkText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000',
    },
    logoutButton: {
        backgroundColor: '#fbe9e9',
        paddingVertical: 16,
        paddingHorizontal: 20,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 16,
        marginBottom: 16,
    },
    logoutButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#ff4646',
    },
    logoutButtonPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.98 }],
    },
});

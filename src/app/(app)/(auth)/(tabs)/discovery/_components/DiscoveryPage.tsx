import { StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Ionicons from '@expo/vector-icons/Ionicons';

import { Colors, Fonts } from '@/constants/theme';
import FeaturedCarousel from './FeaturedCarousel';
import TrendingList from './TrendingList';
import FreeDeliveryList from './FreeDeliveryList';
import TopRatedList from './TopRatedList';
import FilterPills from './FilterPills';
import Header from '@/components/Header';

export default function DiscoveryPage() {
    const insets = useSafeAreaInsets();
    const scrollOffset = useSharedValue(0);

    const scrollHandler = useAnimatedScrollHandler({
        onScroll: (event) => {
            scrollOffset.value = event.contentOffset.y;
        },
    });

    return (
        <View style={styles.container}>
            <Header
                title="Discovery"
                scrollOffset={scrollOffset}
            />

            <Animated.ScrollView
                onScroll={scrollHandler}
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingTop: insets.top + 60, paddingBottom: 32 }}>
                <View style={styles.searchBar}>
                    <Ionicons
                        name="search-outline"
                        size={18}
                        color={Colors.muted}
                    />
                    <Text style={styles.searchPlaceholder}>Search restaurants, cuisines…</Text>
                </View>

                <FilterPills />

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Featured</Text>
                    </View>
                    <FeaturedCarousel />
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Trending near you</Text>
                    </View>
                    <TrendingList />
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Free delivery</Text>
                    </View>
                    <FreeDeliveryList />
                </View>

                <View style={styles.section}>
                    <View style={styles.sectionHeader}>
                        <Text style={styles.sectionTitle}>Top rated</Text>
                    </View>
                    <TopRatedList />
                </View>
            </Animated.ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pageTitle: {
        fontFamily: Fonts.brandBlack,
        fontSize: 30,
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        marginHorizontal: 16,
        backgroundColor: Colors.light,
        borderRadius: 12,
        paddingHorizontal: 14,
        paddingVertical: 12,
        marginBottom: 20,
    },
    searchPlaceholder: {
        fontSize: 15,
        color: Colors.muted,
    },
    section: { marginBottom: 24 },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 16,
        marginBottom: 12,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 6,
    },
});

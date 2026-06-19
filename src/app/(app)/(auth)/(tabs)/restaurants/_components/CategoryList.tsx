import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { categories } from '@/data/categories';
import { Colors } from '@/constants/theme';

export default function CategoryList() {
    const renderCategory = ({ item }: { item: (typeof categories)[0] }) => (
        <Pressable style={({ pressed }) => [styles.categoryCard, pressed && styles.categoryCardPressed]}>
            <View style={[styles.categoryImageContainer, { backgroundColor: item.backgroundColor }]}>
                <Image
                    source={item.image}
                    style={styles.categoryImage}
                />
            </View>
            <View style={styles.categoryInfo}>
                <Text style={styles.categoryName}>{item.name}</Text>
                <Text style={styles.categoryPlaces}>{item.placesCount} places</Text>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.categoriesSection}>
            <View style={styles.categoriesHeader}>
                <Text style={styles.categoriesTitle}>Categories</Text>

                <Pressable style={({ pressed }) => [styles.seeAllButton, pressed && styles.seeAllButtonPressed]}>
                    <Text style={styles.seeAll}>See all</Text>
                </Pressable>
            </View>

            <FlatList
                horizontal
                data={categories}
                renderItem={renderCategory}
                keyExtractor={(item) => item.id}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categoriesList}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    categoriesSection: {
        marginBottom: 24,
    },
    categoriesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 12,
        paddingHorizontal: 16,
    },
    categoriesTitle: {
        fontSize: 18,
        fontWeight: '600',
        marginVertical: 6,
    },
    seeAll: {
        fontSize: 14,
        color: Colors.secondary,
        fontWeight: '500',
    },
    seeAllButton: {
        padding: 8,
        paddingHorizontal: 16,
        borderRadius: 8,
        backgroundColor: Colors.primaryLight,
    },
    seeAllButtonPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.97 }],
    },
    categoriesList: {
        gap: 12,
        paddingHorizontal: 16,
    },
    categoryCard: {
        width: 130,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#fff',
        marginVertical: 8,
        boxShadow: '0px 4px 2px -2px rgba(0, 0, 0, 0.2)',
    },
    categoryCardPressed: {
        opacity: 0.8,
        transform: [{ scale: 0.97 }],
    },
    categoryImageContainer: {
        padding: 12,
    },
    categoryImage: {
        width: 106,
        height: 106,
        borderRadius: 8,
    },
    categoryInfo: {
        backgroundColor: '#fff',
        padding: 12,
        paddingTop: 4,
        borderLeftWidth: StyleSheet.hairlineWidth,
        borderRightWidth: StyleSheet.hairlineWidth,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.light,
    },
    categoryName: {
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 2,
    },
    categoryPlaces: {
        fontSize: 12,
        color: Colors.muted,
    },
});

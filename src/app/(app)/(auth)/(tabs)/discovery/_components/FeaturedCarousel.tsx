import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';
import { useFeatured } from '@/hooks/useDiscovery';

export default function FeaturedCarousel() {
    const { data: featured, isLoading } = useFeatured();

    if (isLoading) {
        return (
            <View style={styles.loader}>
                <ActivityIndicator
                    size="small"
                    color={Colors.secondary}
                />
            </View>
        );
    }

    return (
        <FlatList
            horizontal
            data={featured}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <Pressable style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
                    <View style={styles.imageArea}>
                        <Image
                            source={item.image}
                            style={styles.image}
                        />
                        <View style={styles.overlay} />
                        <View style={styles.tagBadge}>
                            <Text style={styles.tagText}>{item.tag}</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.title}>{item.title}</Text>
                        <Text
                            style={styles.subtitle}
                            numberOfLines={2}>
                            {item.subtitle}
                        </Text>
                    </View>
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    loader: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        gap: 12,
        paddingHorizontal: 16,
    },
    card: {
        width: 280,
        borderRadius: 14,
        overflow: 'hidden',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.light,
        backgroundColor: '#fff',
        marginVertical: 4,
        boxShadow: '0px 4px 2px -2px rgba(0,0,0,0.15)',
    },
    cardPressed: {
        opacity: 0.9,
        transform: [{ scale: 0.98 }],
    },
    imageArea: {
        height: 140,
        overflow: 'hidden',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: '100%',
        objectFit: 'fill',
    },
    overlay: {
        backgroundColor: 'rgba(0,0,0,0.25)',
    },
    tagBadge: {
        position: 'absolute',
        top: 12,
        left: 12,
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
    },
    tagText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: '600',
    },
    body: {
        padding: 12,
    },
    title: {
        fontSize: 15,
        fontWeight: '700',
        marginBottom: 4,
    },
    subtitle: {
        fontSize: 12,
        color: Colors.muted,
    },
});

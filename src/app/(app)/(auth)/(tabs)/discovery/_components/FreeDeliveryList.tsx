import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useFreeDelivery } from '@/hooks/useDiscovery';

export default function FreeDeliveryList() {
    const { data: freeDelivery, isLoading } = useFreeDelivery();

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
            data={freeDelivery}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <Pressable style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={item.image}
                            style={styles.image}
                            resizeMode="cover"
                        />
                        <View style={styles.badge}>
                            <Text style={styles.badgeText}>FREE DELIVERY</Text>
                        </View>
                    </View>
                    <View style={styles.body}>
                        <Text style={styles.name}>{item.name}</Text>
                        <View style={styles.meta}>
                            <Ionicons
                                name="bicycle-outline"
                                size={14}
                                color={Colors.secondary}
                            />
                            <Text style={styles.free}>€0 delivery</Text>
                            <Text style={styles.dot}>•</Text>
                            <Text style={styles.eta}>{item.eta}</Text>
                        </View>
                    </View>
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    loader: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        gap: 12,
        paddingHorizontal: 16,
    },
    card: {
        width: 200,
        borderRadius: 14,
        overflow: 'hidden',
        backgroundColor: '#fff',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.light,
        marginVertical: 4,
        boxShadow: '0px 4px 2px -2px rgba(0,0,0,0.15)',
        elevation: 2,
    },
    cardPressed: {
        opacity: 0.9,
        transform: [{ scale: 0.98 }],
    },
    imageContainer: {
        height: 110,
        alignItems: 'flex-end',
        position: 'relative',
    },
    image: {
        width: '100%',
        height: 110,
        objectFit: 'fill',
    },
    badge: {
        backgroundColor: Colors.secondary,
        borderRadius: 20,
        paddingHorizontal: 10,
        paddingVertical: 4,
        bottom: 4,
        right: 4,
        position: 'absolute',
    },
    badgeText: {
        color: '#fff',
        fontSize: 10,
        fontWeight: '700',
    },
    body: {
        padding: 12,
    },
    name: {
        fontSize: 14,
        fontWeight: '700',
        marginBottom: 4,
    },
    meta: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    free: {
        fontSize: 12,
        color: Colors.secondary,
        fontWeight: '600',
    },
    dot: {
        color: '#ccc',
        fontSize: 10,
    },
    eta: {
        fontSize: 12,
        color: Colors.muted,
    },
});

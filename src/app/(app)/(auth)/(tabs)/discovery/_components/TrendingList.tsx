import { ActivityIndicator, FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';
import { useTrending } from '@/hooks/useDiscovery';

export default function TrendingList() {
    const { data: trending, isLoading } = useTrending();

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
            data={trending}
            keyExtractor={(item) => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
            renderItem={({ item }) => (
                <Pressable style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
                    <View style={styles.body}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.eta}>{item.eta}</Text>
                    </View>
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    loader: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    list: {
        gap: 12,
        paddingHorizontal: 16,
    },
    card: {
        width: 130,
        borderRadius: 12,
        overflow: 'hidden',
        backgroundColor: '#fff',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: Colors.light,
        marginVertical: 4,
        boxShadow: '0px 4px 2px -2px rgba(0,0,0,0.15)',
    },
    cardPressed: {
        opacity: 0.85,
        transform: [{ scale: 0.97 }],
    },
    image: {
        height: 88,
    },
    body: {
        padding: 10,
    },
    name: {
        fontSize: 13,
        fontWeight: '600',
        marginBottom: 2,
    },
    eta: {
        fontSize: 11,
        color: Colors.muted,
    },
});

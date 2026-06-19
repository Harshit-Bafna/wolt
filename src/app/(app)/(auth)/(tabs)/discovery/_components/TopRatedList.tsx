import { ActivityIndicator, Image, Pressable, StyleSheet, Text, View } from 'react-native';

import { Colors } from '@/constants/theme';
import { useTopRated } from '@/hooks/useDiscovery';

export default function TopRatedList() {
    const { data: topRated, isLoading } = useTopRated();

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
        <>
            {topRated?.map((item) => (
                <Pressable
                    key={item.id}
                    style={({ pressed }) => [styles.row, pressed && styles.rowPressed]}>
                    <Image
                        source={item.image}
                        style={styles.image}
                    />
                    <View style={styles.info}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Text style={styles.cuisine}>{item.cuisine}</Text>
                        <View style={styles.tags}>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>⭐ {item.rating}</Text>
                            </View>
                            <View style={styles.tag}>
                                <Text style={styles.tagText}>{item.eta}</Text>
                            </View>
                            {item.badge && (
                                <View style={[styles.tag, styles.tagBlue]}>
                                    <Text style={[styles.tagText, styles.tagTextBlue]}>{item.badge}</Text>
                                </View>
                            )}
                        </View>
                    </View>
                </Pressable>
            ))}
        </>
    );
}

const styles = StyleSheet.create({
    loader: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        gap: 12,
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: Colors.light,
        alignItems: 'center',
    },
    rowPressed: {
        opacity: 0.8,
        backgroundColor: '#fafafa',
    },
    image: {
        width: 64,
        height: 64,
        borderRadius: 10,
    },
    info: {
        flex: 1,
    },
    name: {
        fontSize: 15,
        fontWeight: '600',
        marginBottom: 2,
    },
    cuisine: {
        fontSize: 13,
        color: Colors.muted,
        marginBottom: 6,
    },
    tags: {
        flexDirection: 'row',
        gap: 6,
        flexWrap: 'wrap',
    },
    tag: {
        backgroundColor: Colors.light,
        borderRadius: 10,
        paddingHorizontal: 8,
        paddingVertical: 2,
    },
    tagText: {
        fontSize: 11,
        color: Colors.dark,
    },
    tagBlue: {
        backgroundColor: Colors.primaryLight,
    },
    tagTextBlue: {
        color: Colors.secondary,
    },
});

import { FlatList, Pressable, StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import { Colors } from '@/constants/theme';

const FILTERS = ['For you', 'New', 'Offers', 'Fast delivery', 'Top rated'];

export default function FilterPills() {
    const [active, setActive] = useState('For you');

    return (
        <FlatList
            horizontal
            data={FILTERS}
            keyExtractor={(item) => item}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.list}
            style={{ marginBottom: 20 }}
            renderItem={({ item }) => (
                <Pressable
                    onPress={() => setActive(item)}
                    style={({ pressed }) => [styles.pill, item === active && styles.pillActive, pressed && styles.pillPressed]}>
                    <Text style={[styles.pillText, item === active && styles.pillTextActive]}>{item}</Text>
                </Pressable>
            )}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        gap: 8,
        paddingHorizontal: 16,
    },
    pill: {
        paddingHorizontal: 18,
        paddingVertical: 9,
        borderRadius: 20,
        backgroundColor: Colors.light,
    },
    pillActive: {
        backgroundColor: Colors.primary,
    },
    pillPressed: {
        opacity: 0.75,
        transform: [{ scale: 0.97 }],
    },
    pillText: {
        fontSize: 13,
        fontWeight: '600',
        color: Colors.dark,
    },
    pillTextActive: {
        color: '#fff',
    },
});

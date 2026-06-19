import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { Colors, Fonts } from '@/constants/theme';

export default function Page() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Fixed Header */}
            <View style={styles.header}>
                <Pressable
                    onPress={() => router.dismiss()}
                    style={({ pressed }) => [styles.closeButton, pressed && styles.closeButtonPressed]}>
                    <Ionicons
                        name="close"
                        size={24}
                    />
                </Pressable>

                <Text style={styles.title}>Location</Text>
            </View>

            {/* Scrollable Content */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.content}>
                <Pressable
                    style={({ pressed }) => [styles.locationItem, pressed && styles.pressed]}
                    onPress={() => {}}>
                    <View style={styles.locationItemIcon}>
                        <Ionicons
                            name="locate-outline"
                            size={18}
                            color="#000"
                        />
                    </View>

                    <Text style={styles.locationText}>Use my current location</Text>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [styles.locationItem, pressed && styles.pressed]}
                    onPress={() => {}}>
                    <View style={styles.locationItemIcon}>
                        <Ionicons
                            name="location-outline"
                            size={18}
                            color="#000"
                        />
                    </View>

                    <View style={styles.addressInfo}>
                        <Text style={styles.addressText}>Magdalenenstraße 21</Text>
                        <Text style={styles.cityText}>Münster</Text>
                    </View>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [styles.locationItem, pressed && styles.pressed]}
                    onPress={() => {}}>
                    <View style={styles.locationItemIcon}>
                        <Ionicons
                            name="location-outline"
                            size={18}
                            color="#000"
                        />
                    </View>

                    <View style={styles.addressInfo}>
                        <Text style={styles.addressText}>Schonebecker Weg 57A</Text>
                        <Text style={styles.cityText}>Münster</Text>
                    </View>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [styles.locationItem, pressed && styles.pressed]}
                    onPress={() => {}}>
                    <View style={styles.locationItemIcon}>
                        <Ionicons
                            name="add"
                            size={18}
                            color="#000"
                        />
                    </View>

                    <Text style={styles.locationText}>Add new address</Text>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [styles.locationItem, pressed && styles.pressed]}
                    onPress={() => {}}>
                    <View style={styles.locationItemIcon}>
                        <Ionicons
                            name="list-outline"
                            size={18}
                            color="#000"
                        />
                    </View>

                    <Text style={styles.locationText}>My addresses</Text>
                </Pressable>

                <Pressable
                    style={({ pressed }) => [styles.locationItem, styles.browseCities, pressed && styles.pressed]}
                    onPress={() => {}}>
                    <Ionicons
                        name="map-outline"
                        size={18}
                        color="#009de0"
                    />

                    <View style={styles.addressInfo}>
                        <Text style={styles.browseCitiesText}>Browse all Wolt cities</Text>
                        <Text style={styles.browseCitiesSubtext}>Münster</Text>
                    </View>
                </Pressable>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    header: {
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
        paddingBottom: 12,
    },

    content: {
        paddingHorizontal: 20,
        paddingBottom: 30,
    },

    closeButton: {
        backgroundColor: Colors.light,
        borderRadius: 40,
        padding: 8,
        alignSelf: 'flex-end',
    },

    closeButtonPressed: {
        opacity: 0.7,
    },

    title: {
        fontFamily: Fonts.brandBold,
        fontSize: 32,
        fontWeight: '900',
    },

    locationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
        gap: 16,
    },

    pressed: {
        opacity: 0.6,
    },

    locationItemIcon: {
        padding: 8,
        borderRadius: 20,
        backgroundColor: Colors.light,
    },

    locationText: {
        fontSize: 16,
        color: '#000',
    },

    addressInfo: {
        flex: 1,
    },

    addressText: {
        fontSize: 16,
        color: '#000',
        marginBottom: 2,
    },

    cityText: {
        fontSize: 14,
        color: '#999',
    },

    browseCities: {
        paddingLeft: 10,
        gap: 22,
    },

    browseCitiesText: {
        fontSize: 16,
        color: Colors.secondary,
        marginBottom: 2,
    },

    browseCitiesSubtext: {
        fontSize: 14,
        color: Colors.secondary,
    },
});

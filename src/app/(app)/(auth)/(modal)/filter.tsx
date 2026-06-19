// import { Colors, Fonts } from '@/constants/theme';
// import { useState } from 'react';
// import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';

// const cuisineFilters = ['Pizza', 'Italian', 'Mediterranean', 'Falafel', 'Burger', 'Kebab', 'Asian', 'Chicken', 'BBQ', 'Pasta', 'American'];

// const priceFilters = ['€', '€€', '€€€', '€€€€'];

// const sortOptions = ['Recommended', 'Delivery price', 'Rating', 'Delivery time'];

// export default function Page() {
//     const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
//     const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
//     const [woltPlusOnly, setWoltPlusOnly] = useState(false);
//     const [selectedSort, setSelectedSort] = useState('Recommended');

//     const toggleCuisine = (cuisine: string) => {
//         setSelectedCuisines((prev) => (prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]));
//     };

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>Filter</Text>

//             <View style={styles.filterSection}>
//                 <View style={styles.chipContainer}>
//                     {cuisineFilters.map((cuisine) => (
//                         <TouchableOpacity
//                             key={cuisine}
//                             style={[styles.chip, selectedCuisines.includes(cuisine) && styles.chipSelected]}
//                             onPress={() => toggleCuisine(cuisine)}>
//                             <Text style={[styles.chipText, selectedCuisines.includes(cuisine) && styles.chipTextSelected]}>{cuisine}</Text>
//                         </TouchableOpacity>
//                     ))}
//                 </View>
//             </View>

//             <View style={styles.filterSection}>
//                 <Text style={styles.sectionTitle}>PRICE</Text>
//                 <View style={styles.chipContainer}>
//                     {priceFilters.map((price) => (
//                         <TouchableOpacity
//                             key={price}
//                             style={[styles.chip, selectedPrice === price && styles.chipSelected]}
//                             onPress={() => setSelectedPrice(price === selectedPrice ? null : price)}>
//                             <Text style={[styles.chipText, selectedPrice === price && styles.chipTextSelected]}>{price}</Text>
//                         </TouchableOpacity>
//                     ))}
//                 </View>
//             </View>

//             {/* Wolt+ Toggle */}
//             <View style={[styles.filterSection, styles.toggleSection]}>
//                 <Text style={styles.toggleText}>Only show Wolt+ venues</Text>
//                 <Switch
//                     value={woltPlusOnly}
//                     onValueChange={setWoltPlusOnly}
//                     trackColor={{ false: Colors.light, true: Colors.primary }}
//                     thumbColor="#fff"
//                 />
//             </View>

//             <View style={styles.filterSection}>
//                 <Text style={styles.sectionTitle}>SORT BY</Text>
//                 <ScrollView
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                     style={styles.chipContainer}>
//                     {sortOptions.map((option) => (
//                         <TouchableOpacity
//                             key={option}
//                             style={[styles.chip, selectedSort === option && styles.chipSelected]}
//                             onPress={() => setSelectedSort(option)}>
//                             <Text style={[styles.chipText, selectedSort === option && styles.chipTextSelected]}>{option}</Text>
//                         </TouchableOpacity>
//                     ))}
//                 </ScrollView>
//             </View>

//             <TouchableOpacity style={styles.applyButton}>
//                 <Text style={styles.applyButtonText}>Apply</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         paddingHorizontal: 20,
//     },
//     title: {
//         fontFamily: Fonts.brandBold,
//         fontSize: 32,
//         fontWeight: 900,
//         marginBottom: 24,
//     },
//     filterSection: {
//         marginBottom: 24,
//     },
//     sectionTitle: {
//         fontSize: 12,
//         fontWeight: '600',
//         color: '#666',
//         marginBottom: 12,
//         letterSpacing: 0.5,
//     },
//     chipContainer: {
//         flexDirection: 'row',
//         flexWrap: 'wrap',
//         gap: 8,
//     },
//     chip: {
//         paddingHorizontal: 16,
//         paddingVertical: 10,
//         borderRadius: 20,
//         backgroundColor: Colors.primaryLight,
//     },
//     chipSelected: {
//         backgroundColor: Colors.primary,
//     },
//     chipText: {
//         fontSize: 12,
//         color: Colors.secondary,
//     },
//     chipTextSelected: {
//         color: '#fff',
//         fontWeight: '600',
//     },
//     toggleSection: {
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         paddingVertical: 12,
//         borderTopWidth: 1,
//         borderBottomWidth: 1,
//         borderColor: '#f0f0f0',
//     },
//     toggleText: {
//         fontSize: 16,
//         color: '#000',
//     },
//     applyButton: {
//         backgroundColor: Colors.primary,
//         paddingVertical: 16,
//         borderRadius: 12,
//         alignItems: 'center',
//         marginTop: 20,
//     },
//     applyButtonText: {
//         fontSize: 16,
//         fontWeight: '600',
//         color: '#fff',
//     },
// });

import { Colors, Fonts } from '@/constants/theme';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Switch, Text, View } from 'react-native';

const cuisineFilters = ['Pizza', 'Italian', 'Mediterranean', 'Falafel', 'Burger', 'Kebab', 'Asian', 'Chicken', 'BBQ', 'Pasta', 'American'];

const priceFilters = ['€', '€€', '€€€', '€€€€'];

const sortOptions = ['Recommended', 'Delivery price', 'Rating', 'Delivery time'];

export default function Page() {
    const router = useRouter();

    const [selectedCuisines, setSelectedCuisines] = useState<string[]>([]);
    const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
    const [woltPlusOnly, setWoltPlusOnly] = useState(false);
    const [selectedSort, setSelectedSort] = useState('Recommended');

    const toggleCuisine = (cuisine: string) => {
        setSelectedCuisines((prev) => (prev.includes(cuisine) ? prev.filter((c) => c !== cuisine) : [...prev, cuisine]));
    };

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => router.dismiss()}
                style={({ pressed }) => [styles.closeButton, pressed && styles.closeButtonPressed]}>
                <Ionicons
                    name="close"
                    size={24}
                />
            </Pressable>

            <Text style={styles.title}>Filter</Text>

            <View style={styles.filterSection}>
                <View style={styles.chipContainer}>
                    {cuisineFilters.map((cuisine) => (
                        <Pressable
                            key={cuisine}
                            style={({ pressed }) => [
                                styles.chip,
                                selectedCuisines.includes(cuisine) && styles.chipSelected,
                                pressed && styles.pressed,
                            ]}
                            onPress={() => toggleCuisine(cuisine)}>
                            <Text style={[styles.chipText, selectedCuisines.includes(cuisine) && styles.chipTextSelected]}>{cuisine}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            <View style={styles.filterSection}>
                <Text style={styles.sectionTitle}>PRICE</Text>

                <View style={styles.chipContainer}>
                    {priceFilters.map((price) => (
                        <Pressable
                            key={price}
                            style={({ pressed }) => [styles.chip, selectedPrice === price && styles.chipSelected, pressed && styles.pressed]}
                            onPress={() => setSelectedPrice(price === selectedPrice ? null : price)}>
                            <Text style={[styles.chipText, selectedPrice === price && styles.chipTextSelected]}>{price}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            <View style={[styles.filterSection, styles.toggleSection]}>
                <Text style={styles.toggleText}>Only show Wolt+ venues</Text>

                <Switch
                    value={woltPlusOnly}
                    onValueChange={setWoltPlusOnly}
                    trackColor={{
                        false: Colors.light,
                        true: Colors.primary,
                    }}
                    thumbColor="#fff"
                />
            </View>

            <View style={styles.filterSection}>
                <Text style={styles.sectionTitle}>SORT BY</Text>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={styles.chipContainer}>
                    {sortOptions.map((option) => (
                        <Pressable
                            key={option}
                            style={({ pressed }) => [styles.chip, selectedSort === option && styles.chipSelected, pressed && styles.pressed]}
                            onPress={() => setSelectedSort(option)}>
                            <Text style={[styles.chipText, selectedSort === option && styles.chipTextSelected]}>{option}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>

            <Pressable style={({ pressed }) => [styles.applyButton, pressed && styles.pressed]}>
                <Text style={styles.applyButtonText}>Apply</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
    },

    closeButton: {
        backgroundColor: Colors.light,
        borderRadius: 40,
        padding: 8,
        alignSelf: 'flex-end',
        marginTop: 20,
        marginBottom: 12,
    },

    closeButtonPressed: {
        opacity: 0.7,
    },

    title: {
        fontFamily: Fonts.brandBold,
        fontSize: 32,
        fontWeight: '900',
        marginBottom: 24,
    },

    filterSection: {
        marginBottom: 24,
    },

    sectionTitle: {
        fontSize: 12,
        fontWeight: '600',
        color: '#666',
        marginBottom: 12,
        letterSpacing: 0.5,
    },

    chipContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8,
    },

    chip: {
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 20,
        backgroundColor: Colors.primaryLight,
    },

    chipSelected: {
        backgroundColor: Colors.primary,
    },

    chipText: {
        fontSize: 12,
        color: Colors.secondary,
    },

    chipTextSelected: {
        color: '#fff',
        fontWeight: '600',
    },

    pressed: {
        opacity: 0.7,
    },

    toggleSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#f0f0f0',
    },

    toggleText: {
        fontSize: 16,
        color: '#000',
    },

    applyButton: {
        backgroundColor: Colors.primary,
        paddingVertical: 16,
        borderRadius: 12,
        alignItems: 'center',
        marginTop: 20,
    },

    applyButtonText: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
});

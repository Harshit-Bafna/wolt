import { useHeaderHeight } from 'expo-router/build/react-navigation';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Profile() {
    const headerHeight = useHeaderHeight();

    return (
        <ScrollView
            contentContainerStyle={{
                paddingTop: headerHeight,
            }}
            contentInsetAdjustmentBehavior="automatic"
            style={styles.container}>
            <Text>Profile Page</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

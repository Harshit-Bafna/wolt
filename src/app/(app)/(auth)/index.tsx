import useUserStore from '@/src/hooks/useUserStore';
import { Button, Text, View } from 'react-native';

export default function Index() {
    const { setIsGuest } = useUserStore();
    return (
        <View>
            <Text>This is auth page</Text>
            <Button
                title="Logout"
                onPress={() => {
                    setIsGuest(false);
                }}
            />
        </View>
    );
}

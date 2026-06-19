import type { ComponentProps } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export interface AuthButtonProps extends PressableProps {
    icon?: ComponentProps<typeof Ionicons>['name'];
    title: string;
    backgroundColor: string;
    textColor: string;
}

export default function AuthButton({ icon, textColor, title, backgroundColor, ...props }: AuthButtonProps) {
    return (
        <Pressable
            {...props}
            style={({ pressed }) => [styles.button, { backgroundColor: backgroundColor }, pressed && styles.buttonPressed]}>
            {icon && (
                <Ionicons
                    name={icon}
                    size={18}
                    color={textColor}
                />
            )}
            <Text style={[styles.buttonText, { color: textColor }]}>{title}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 17,
        borderRadius: 12,
        gap: 4,
    },
    buttonPressed: {
        opacity: 0.7,
    },
    buttonText: {
        fontSize: 18,
        fontWeight: '600',
    },
});

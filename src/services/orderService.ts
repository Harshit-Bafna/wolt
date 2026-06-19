import type { CartItem } from '@/hooks/useCartstore';

export interface OrderData {
    items: CartItem[];
    restaurantId: string;
    deliveryMode: 'delivery' | 'pickup';
    deliveryAddress?: string;
    leaveAtDoor: boolean;
    sendAsGift: boolean;
    deliveryTime: 'standard' | 'schedule';
    selectedTimeSlot?: string;
    tipAmount: number;
    paymentMethod: 'applepay' | 'card';
    subtotal: number;
    serviceFee: number;
    deliveryFee: number;
    total: number;
}

export const orderService = {
    createOrder: async (orderData: OrderData): Promise<{ orderId: string; success: boolean }> => {
        console.log('Creating order:', orderData);

        await new Promise((resolve) => setTimeout(resolve, 1000));

        return {
            orderId: `ORDER_${Date.now()}`,
            success: true,
        };
    },

    calculateFees: (cartTotal: number, distanceKm: number = 2.5): { serviceFee: number; deliveryFee: number } => {
        const serviceFee = 0.83;
        const deliveryFee = distanceKm <= 3 ? 1.9 : 1.9 + (distanceKm - 3) * 0.5;

        return {
            serviceFee: Number(serviceFee.toFixed(2)),
            deliveryFee: Number(deliveryFee.toFixed(2)),
        };
    },
};

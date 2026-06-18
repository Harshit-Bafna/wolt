import { useQuery } from '@tanstack/react-query';

import { restaurantService } from '@/services/restaurantService';

export const useRestaurants = () => {
    return useQuery({
        queryKey: ['restaurants'],
        queryFn: async () => {
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return restaurantService.getAll();
        },
    });
};

export const useRestaurant = (id: string) => {
    return useQuery({
        queryKey: ['restaurant', id],
        queryFn: () => restaurantService.getById(id),
        enabled: !!id,
    });
};

export const useRestaurantMarkers = () => {
    return useQuery({
        queryKey: ['restaurant-markers'],
        queryFn: restaurantService.getMarkers,
    });
};

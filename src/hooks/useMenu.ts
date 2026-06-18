import { useQuery } from '@tanstack/react-query';

import { menuService } from '@/services/menuService';

export const useMenu = (restaurantId: string) => {
    return useQuery({
        queryKey: ['menu', restaurantId],
        queryFn: () => menuService.getMenu(restaurantId),
        enabled: !!restaurantId,
    });
};

export const useDish = (dishId: number) => {
    return useQuery({
        queryKey: ['dish', dishId],
        queryFn: () => menuService.getDishById(dishId),
        enabled: !!dishId,
    });
};

export const usePopularDishes = (restaurantId: string) => {
    return useQuery({
        queryKey: ['dishes', 'popular', restaurantId],
        queryFn: () => menuService.getPopularDishes(restaurantId),
        enabled: !!restaurantId,
    });
};

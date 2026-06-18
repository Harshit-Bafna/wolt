import type { Dish, MenuCategory } from '@/data/restaurant_menu';
import { pizzaPerfettoMenu } from '@/data/restaurant_menu';

export const menuService = {
    getMenu: async (restaurantId: string): Promise<MenuCategory[]> => {
        if (restaurantId === 'rest_001') {
            return Promise.resolve(pizzaPerfettoMenu);
        }

        return Promise.resolve([]);
    },

    getDishById: async (dishId: number): Promise<Dish | undefined> => {
        const allDishes = pizzaPerfettoMenu.flatMap((category) => category.dishes);
        const result = allDishes.find((dish) => dish.id === dishId);

        return Promise.resolve(result);
    },

    getAllDishes: async (restaurantId: string): Promise<Dish[]> => {
        const menu = await menuService.getMenu(restaurantId);

        return Promise.resolve(menu.flatMap((category) => category.dishes));
    },

    getPopularDishes: async (restaurantId: string): Promise<Dish[]> => {
        const allDishes = await menuService.getAllDishes(restaurantId);

        return Promise.resolve(allDishes.filter((dish) => dish.isPopular));
    },
};

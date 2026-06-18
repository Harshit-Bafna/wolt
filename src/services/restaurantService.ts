import { restaurants } from '@/data/restaurants';
import { restaurantMarkers } from '@/data/restaurant_markers';
import type { Restaurant } from '@/data/restaurants';
import type { RestaurantMarker } from '@/data/restaurant_markers';

export const restaurantService = {
    getAll: async (): Promise<Restaurant[]> => {
        return Promise.resolve(restaurants);
    },

    getById: async (id: string): Promise<Restaurant | undefined> => {
        return Promise.resolve(restaurants.find((r) => r.id === id));
    },

    getMarkers: async (): Promise<RestaurantMarker[]> => {
        return Promise.resolve(restaurantMarkers);
    },

    search: async (query: string): Promise<Restaurant[]> => {
        const lowerQuery = query.toLowerCase();

        return Promise.resolve(
            restaurants.filter(
                (r) =>
                    r.name.toLowerCase().includes(lowerQuery) ||
                    r.description.toLowerCase().includes(lowerQuery) ||
                    r.cuisine.some((c) => c.toLowerCase().includes(lowerQuery)),
            ),
        );
    },

    filterByCuisine: async (cuisine: string): Promise<Restaurant[]> => {
        return Promise.resolve(restaurants.filter((r) => r.cuisine.includes(cuisine)));
    },
};

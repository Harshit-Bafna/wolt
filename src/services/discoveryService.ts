import type { FeaturedItem, FreeDeliveryItem, TopRatedItem, TrendingItem } from '@/data/discovery';
import { featuredItems, freeDeliveryItems, topRatedItems, trendingItems } from '@/data/discovery';

export const discoveryService = {
    getFeatured: async (): Promise<FeaturedItem[]> => {
        return Promise.resolve(featuredItems);
    },

    getTrending: async (): Promise<TrendingItem[]> => {
        return Promise.resolve(trendingItems);
    },

    getFreeDelivery: async (): Promise<FreeDeliveryItem[]> => {
        return Promise.resolve(freeDeliveryItems);
    },

    getTopRated: async (): Promise<TopRatedItem[]> => {
        return Promise.resolve(topRatedItems);
    },
};

import { useQuery } from '@tanstack/react-query';

import { discoveryService } from '@/services/discoveryService';

export const useFeatured = () => {
    return useQuery({
        queryKey: ['discovery', 'featured'],
        queryFn: discoveryService.getFeatured,
    });
};

export const useTrending = () => {
    return useQuery({
        queryKey: ['discovery', 'trending'],
        queryFn: discoveryService.getTrending,
    });
};

export const useFreeDelivery = () => {
    return useQuery({
        queryKey: ['discovery', 'free-delivery'],
        queryFn: discoveryService.getFreeDelivery,
    });
};

export const useTopRated = () => {
    return useQuery({
        queryKey: ['discovery', 'top-rated'],
        queryFn: discoveryService.getTopRated,
    });
};

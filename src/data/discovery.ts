export interface FeaturedItem {
    id: string;
    tag: string;
    title: string;
    subtitle: string;
    image: any;
}

export interface TrendingItem {
    id: string;
    name: string;
    eta: string;
    image: any;
}

export interface FreeDeliveryItem {
    id: string;
    name: string;
    eta: string;
    image: any;
}

export interface TopRatedItem {
    id: string;
    name: string;
    cuisine: string;
    rating: number;
    eta: string;
    badge: string | null;
    image: any;
}

export const featuredItems: FeaturedItem[] = [
    {
        id: '1',
        tag: '🍕 Italian Week',
        title: 'Italian Week Deals',
        subtitle: 'Save up to 30% on pasta & pizza',
        image: require('@/assets/images/dummy/discovery/feature1.png'),
    },
    {
        id: '2',
        tag: '🍔 Burgers',
        title: 'Best Burgers in Town',
        subtitle: 'Handpicked spots with the juiciest patties',
        image: require('@/assets/images/dummy/discovery/feature2.png'),
    },
    {
        id: '3',
        tag: '🥗 Healthy',
        title: 'Eat Clean, Feel Good',
        subtitle: 'Fresh salads, bowls and smoothies',
        image: require('@/assets/images/dummy/discovery/feature3.png'),
    },
];

export const trendingItems: TrendingItem[] = [
    {
        id: '1',
        name: 'Kebab King',
        eta: '20–30 min',
        image: require('@/assets/images/dummy/discovery/trending1.png'),
    },
    {
        id: '2',
        name: 'Sushi Garden',
        eta: '25–35 min',
        image: require('@/assets/images/dummy/discovery/trending2.png'),
    },
    {
        id: '3',
        name: 'Burger Bros',
        eta: '15–25 min',
        image: require('@/assets/images/dummy/discovery/trending3.png'),
    },
    {
        id: '4',
        name: 'Taco Fiesta',
        eta: '20–30 min',
        image: require('@/assets/images/dummy/discovery/trending4.png'),
    },
];

export const freeDeliveryItems: FreeDeliveryItem[] = [
    {
        id: '1',
        name: 'Pasta Palace',
        eta: '25–35 min',
        image: require('@/assets/images/dummy/discovery/freeDelivery1.png'),
    },
    {
        id: '2',
        name: 'Pizza Uno',
        eta: '20–30 min',
        image: require('@/assets/images/dummy/discovery/freeDelivery2.png'),
    },
    {
        id: '3',
        name: 'Green Bowl',
        eta: '15–25 min',
        image: require('@/assets/images/dummy/discovery/freeDelivery3.png'),
    },
];

export const topRatedItems: TopRatedItem[] = [
    {
        id: '1',
        name: 'Noodle House',
        cuisine: 'Asian • Noodles • Dim Sum',
        rating: 4.9,
        eta: '30–40 min',
        badge: 'Top 10%',
        image: require('@/assets/images/dummy/discovery/topRated1.png'),
    },
    {
        id: '2',
        name: 'Steakhouse 47',
        cuisine: 'Steak • Grill • American',
        rating: 4.8,
        eta: '35–50 min',
        badge: 'Popular',
        image: require('@/assets/images/dummy/discovery/topRated2.png'),
    },
    {
        id: '3',
        name: 'Falafel Corner',
        cuisine: 'Mediterranean • Vegan',
        rating: 4.7,
        eta: '20–30 min',
        badge: null,
        image: require('@/assets/images/dummy/discovery/topRated3.png'),
    },
];

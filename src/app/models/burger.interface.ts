export interface Burger {
  id: number;
  name: string;
  description: string;
  ingredients?: string[];
  price: number;
  imageUrl?: string;
}

export const AVAILABLE_INGREDIENTS = [
  'Beef Patty',
  'Chicken Patty',
  'Lettuce',
  'Tomato',
  'Cheese',
  'Bacon',
  'Onions',
  'Pickles',
  'Mushrooms',
  'Avocado'
];
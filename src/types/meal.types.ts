export interface Meal {
  id: string;
  name: string;
  description: string;
  initialPrice: number;
  discountedPrice: number;
  mealImage?: string;
}

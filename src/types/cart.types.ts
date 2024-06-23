import {PaymentMethod} from '../utils/enums';
import {Kitchen} from './kitchen.types';
import {Meal} from './meal.types';

export interface CartItem {
  meal: Meal;
  quantity: number;
}

export interface Cart {
  kitchen: Kitchen;
  cartItems: CartItem[];
  paymentMethod: PaymentMethod;
  observations: string;
}

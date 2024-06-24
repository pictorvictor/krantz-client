import {PaymentMethod} from '../utils/enums';
import {Kitchen} from './kitchen.types';
import {Meal} from './meal.types';

export enum OrderStatus {
  PLACED = 'PLACED',
  CONFIRMED = 'CONFIRMED',
  CANCELLED = 'CANCELLED',
  PICKED_UP = 'PICKED_UP',
}

export interface OrderItem {
  meal: Meal;
  quantity: number;
  unitPrice?: number;
}

export interface OrderSummary {
  orderId: number;
  totalPrice: number;
  paymentMethod: PaymentMethod;
  observations: string;
  address: string;
  items: OrderItem[];
}

export interface Order {
  orderId: number;
  totalPrice: number;
  hasUserReviewed: boolean;
  status: OrderStatus;
  items: OrderItem[];
  kitchen: Kitchen;
  createdAt: string;
}

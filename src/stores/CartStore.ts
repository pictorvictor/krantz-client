import {action, makeAutoObservable, observable, runInAction} from 'mobx';
import {PaymentMethod} from '../utils/enums';
import {Kitchen} from '../types/kitchen.types';
import {Cart, CartItem} from '../types/cart.types';
import {OrderSummary} from '../types/order.types';
import axios from '../utils/axios';
import {OrderStore} from './OrderStore';

export class CartStore {
  @observable isCartEmpty: boolean = true;
  @observable cart?: Cart;
  @observable orderSummary?: OrderSummary;

  constructor(private orderStore: OrderStore) {
    makeAutoObservable(this);
  }

  @action createCart(kitchen: Kitchen) {
    this.cart = {
      kitchen: kitchen,
      paymentMethod: PaymentMethod.CASH_ON_SITE,
      cartItems: [],
      observations: '',
    };
  }

  @action addToCart(mealItem: CartItem, kitchen: Kitchen) {
    if (!this.cart) {
      this.createCart(kitchen);
    } else if (this.cart.kitchen?.id !== kitchen.id) {
      this.clearCart();
      this.createCart(kitchen);
    }
    const foundCartItem = this.cart?.cartItems.find(
      cartItem => cartItem.meal.id === mealItem.meal.id,
    );
    if (foundCartItem) {
      foundCartItem.quantity += mealItem.quantity;
      return;
    }
    this.cart?.cartItems.push(mealItem);
    this.setIsCartEmpty(false);
  }

  @action clearCart() {
    this.cart = undefined;
    this.setIsCartEmpty(true);
    this.orderSummary = undefined;
  }

  @action setIsCartEmpty(isCartEmpty: boolean) {
    this.isCartEmpty = isCartEmpty;
  }

  @action setObservations(observations: string) {
    if (this.cart) {
      this.cart.observations = observations;
    }
  }

  @action setQuantity(newQuantity: number, mealId: string) {
    if (this.cart) {
      if (newQuantity > 0) {
        const foundCartItem = this.cart.cartItems.find(
          cartItem => cartItem.meal.id === mealId,
        );
        if (foundCartItem) {
          foundCartItem.quantity = newQuantity;
        }
      } else {
        this.cart.cartItems = this.cart.cartItems.filter(
          cartItem => cartItem.meal.id !== mealId,
        );
      }
    }
  }

  @action setPaymentMethod(paymentMethod: PaymentMethod) {
    if (this.cart) {
      this.cart.paymentMethod = paymentMethod;
    }
  }

  @action async placeOrder() {
    try {
      const {data} = await axios.post('api/order/place', {
        kitchenId: this.cart?.kitchen?.id,
        observations: this.cart?.observations,
        paymentMethod: this.cart?.paymentMethod,
        items: this.cart?.cartItems.map(cartItem => ({
          mealId: cartItem.meal.id,
          quantity: cartItem.quantity,
        })),
      });
      runInAction(() => {
        this.orderSummary = data;
        this.orderStore.getMyOrders();
        this.orderStore.getKitchenOrders();
      });
    } catch (err: any) {
      console.error('Error placing order:', err);
    }
  }
}

import {action, makeAutoObservable, observable} from 'mobx';
import {Cart, CartItem} from '../types/cart.types';
import {PaymentMethod} from '../utils/enums';
import {Kitchen} from '../types/kitchen.types';

export class CartStore {
  @observable isCartEmpty: boolean = true;
  @observable cart?: Cart;
  constructor() {
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
    this.cart?.cartItems.push(mealItem);
    this.setIsCartEmpty(false);
  }

  @action clearCart() {
    this.cart = undefined;
    this.setIsCartEmpty(true);
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
}

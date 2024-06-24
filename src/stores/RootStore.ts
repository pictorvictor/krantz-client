import {observable} from 'mobx';
import {AuthStore} from './AuthStore';
import {KitchenStore} from './KitchenStore';
import {UserStore} from './UserStore';
import {CartStore} from './CartStore';
import {OrderStore} from './OrderStore';

export class RootStore {
  @observable authStore: AuthStore;
  @observable kitchenStore: KitchenStore;
  @observable userStore: UserStore;
  @observable cartStore: CartStore;
  @observable orderStore: OrderStore;

  constructor() {
    this.authStore = new AuthStore();
    this.kitchenStore = new KitchenStore();
    this.userStore = new UserStore();
    this.orderStore = new OrderStore();
    this.cartStore = new CartStore(this.orderStore);
  }
}

export const rootStore = new RootStore();

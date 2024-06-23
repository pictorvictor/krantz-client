import {observable} from 'mobx';
import {AuthStore} from './AuthStore';
import {KitchenStore} from './KitchenStore';
import {UserStore} from './UserStore';
import {CartStore} from './CartStore';

export class RootStore {
  @observable authStore: AuthStore;
  @observable kitchenStore: KitchenStore;
  @observable userStore: UserStore;
  @observable cartStore: CartStore;

  constructor() {
    this.authStore = new AuthStore();
    this.kitchenStore = new KitchenStore();
    this.userStore = new UserStore();
    this.cartStore = new CartStore();
  }
}

export const rootStore = new RootStore();

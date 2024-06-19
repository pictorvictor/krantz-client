import {observable} from 'mobx';
import {AuthStore} from './AuthStore';
import {KitchenStore} from './KitchenStore';

export class RootStore {
  @observable authStore: AuthStore;
  @observable kitchenStore: KitchenStore;

  constructor() {
    this.authStore = new AuthStore();
    this.kitchenStore = new KitchenStore();
  }
}

export const rootStore = new RootStore();

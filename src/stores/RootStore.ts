import {observable} from 'mobx';
import {AuthStore} from './AuthStore';
import {KitchenStore} from './KitchenStore';
import {UserStore} from './UserStore';

export class RootStore {
  @observable authStore: AuthStore;
  @observable kitchenStore: KitchenStore;
  @observable userStore: UserStore;

  constructor() {
    this.authStore = new AuthStore();
    this.kitchenStore = new KitchenStore();
    this.userStore = new UserStore();
  }
}

export const rootStore = new RootStore();

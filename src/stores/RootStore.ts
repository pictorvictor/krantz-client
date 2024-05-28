import {observable} from 'mobx';
import {AuthStore} from './AuthStore';

export class RootStore {
  @observable authStore: AuthStore;

  constructor() {
    this.authStore = new AuthStore();
  }
}

export const rootStore = new RootStore();

import {action, makeAutoObservable, observable} from 'mobx';

export class AuthStore {
  @observable isAuth: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  @action authenticate() {
    this.isAuth = true;
  }
}

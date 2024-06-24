import {action, makeAutoObservable, observable, runInAction} from 'mobx';

import axios from '../utils/axios';

export class UserStore {
  @observable firstName: string = '';
  @observable lastName: string = '';
  @observable email: string = '';

  constructor() {
    makeAutoObservable(this);
  }

  @action async me() {
    try {
      const {data} = await axios.get('api/auth/my-profile');
      if (data?.firstName) {
        runInAction(() => {
          this.firstName = data?.firstName;
          this.lastName = data?.lastName;
          this.email = data?.email;
        });
      }
      return true;
    } catch (e: any) {
      console.error(e);
      return false;
    }
  }
}

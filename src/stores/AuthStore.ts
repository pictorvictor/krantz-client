import {action, makeAutoObservable, observable} from 'mobx';
import Keychain from 'react-native-keychain';

import axios from '../utils/axios';

export class AuthStore {
  @observable isAuth: boolean = false;
  constructor() {
    makeAutoObservable(this);
  }

  @action setIsAuth(isAuth: boolean) {
    this.isAuth = isAuth;
  }

  @action async authenticate({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) {
    try {
      const {data} = await axios.post('/auth/login', {
        email,
        password,
      });
      if (data?.jwtToken) {
        await Keychain.setGenericPassword(email, data?.jwtToken);
        this.setIsAuth(true);
      }
    } catch (e: any) {
      console.error(e);
    }
  }
}

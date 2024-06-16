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
      const {data} = await axios.post('api/auth/login', {
        email,
        password,
      });
      if (data?.accessToken) {
        await Keychain.setGenericPassword(email, data?.accessToken);
        this.setIsAuth(true);
      }
    } catch (e: any) {
      console.error(e);
    }
  }

  @action async logout() {
    try {
      await Keychain.resetGenericPassword();
      this.setIsAuth(false);
    } catch (e: any) {
      console.error(e);
    }
  }

  @action async register({
    email,
    password,
    lastName,
    firstName,
  }: {
    email: string;
    password: string;
    lastName: string;
    firstName: string;
  }) {
    try {
      const {data} = await axios.post('api/auth/register', {
        email,
        password,
        lastName,
        firstName,
      });
      if (data?.accessToken) {
        await Keychain.setGenericPassword(email, data?.accessToken);
        this.setIsAuth(true);
      }
    } catch (e: any) {
      console.error(e);
    }
  }
}

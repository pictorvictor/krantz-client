import {action, makeAutoObservable, observable, runInAction} from 'mobx';

import axios from '../utils/axios';
import {Order} from '../types/order.types';

export class OrderStore {
  @observable orders: Order[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action async getMyOrders() {
    try {
      const {data} = await axios.get('api/order/my-orders');
      runInAction(() => {
        this.orders = data;
      });
    } catch (e: any) {
      console.error(e);
    }
  }
}

import {action, makeAutoObservable, observable, runInAction} from 'mobx';

import {Order, OrderStatus} from '../types/order.types';
import axios from '../utils/axios';
import {isEmpty} from 'lodash';

export class OrderStore {
  @observable orders: Order[] = [];
  @observable kitchenOrders: any;

  constructor() {
    makeAutoObservable(this);
  }

  @action async getMyOrders() {
    try {
      const {data} = await axios.get('api/order/my-orders');
      runInAction(() => {
        this.orders = data;
        console.log(this.orders);
      });
    } catch (e: any) {
      console.error(e);
    }
  }

  @action async reviewOrder(orderId: number, rating: number) {
    try {
      const {data} = await axios.post('api/order/review', {
        orderId,
        rating,
      });
      if (data.status === 200) {
        return;
      }
    } catch (e: any) {
      console.error(e.message);
    }
  }

  @action async getKitchenOrders() {
    try {
      const {data} = await axios.get('api/kitchen/orders');
      if (!isEmpty(data)) {
        runInAction(() => {
          this.kitchenOrders = data;
          this.getMyOrders();
        });
      }
    } catch (e: any) {
      console.error(e.message);
    }
  }

  @action async updateOrderStatus(orderId: number, status: OrderStatus) {
    try {
      const {data} = await axios.post('api/order/status', {
        orderId,
        status,
      });
      if (data.status === 200) {
        return;
      }
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

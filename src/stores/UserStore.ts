import {action, makeAutoObservable, observable, runInAction} from 'mobx';
import moment from 'moment';

import axios from '../utils/axios';

export class UserStore {
  @observable firstName: string = '';
  @observable lastName: string = '';
  @observable email: string = '';
  @observable statistics: any;

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

  @action async getStatistics() {
    try {
      const {data} = await axios.get('api/user/statistics');
      if (data?.length) {
        runInAction(() => {
          this.statistics = data?.reduce(
            (
              res: {labels: string[]; data: number[]},
              curr: {month: string; totalco2saved: number},
            ) => ({
              labels: [...res?.labels, moment(curr?.month).format('MMM')],
              data: [...res?.data, Math.round(curr?.totalco2saved)],
            }),
            {labels: [], data: []},
          );
        });
      }
    } catch (e: any) {
      console.error(e);
    }
  }
}

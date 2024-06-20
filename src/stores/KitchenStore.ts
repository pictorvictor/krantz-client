import {action, makeAutoObservable, observable, runInAction} from 'mobx';
import axios from '../utils/axios';
import {Kitchen} from '../types/kitchen.types';
import Geolocation from '@react-native-community/geolocation';

export class KitchenStore {
  @observable kitchens: Kitchen[] = [];
  @observable kitchenTypes: string[] = [];
  @observable kitchensByProximity: Kitchen[] = [];
  @observable kitchensFavorites: Kitchen[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action async fetchKitchenTypes() {
    try {
      const {data} = await axios.get('api/kitchen/types');
      runInAction(() => {
        this.kitchenTypes = data;
      });
    } catch (error) {
      console.error('Error fetching kitchen types:', error);
    }
  }

  @action async searchKitchens(searchQuery: string, types: string[]) {
    try {
      const {data} = await axios.post('api/kitchen/search', {
        types,
        searchQuery,
      });
      runInAction(() => {
        this.kitchens = data;
      });
    } catch (error) {
      console.error('Error fetching kitchens:', error);
    }
  }

  @action async searchKitchensByProximity() {
    try {
      Geolocation.getCurrentPosition(async position => {
        const {coords} = position;
        const {data} = await axios.get('api/kitchen/proximity', {
          params: {
            latitude: coords.latitude,
            longitude: coords.longitude,
          },
        });
        runInAction(() => {
          this.kitchensByProximity = data;
        });
      });
    } catch (error) {
      console.error('Error fetching kitchens by proximity:', error);
    }
  }

  @action async fetchFavouriteKitchens() {
    try {
      //TODO: change endpoint when orders are implemented
      const {data} = await axios.get('api/kitchen');
      runInAction(() => {
        this.kitchensFavorites = data;
      });
    } catch (error) {
      console.error('Error fetching favourite kitchens:', error);
    }
  }
}

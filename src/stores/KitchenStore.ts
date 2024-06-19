import {action, makeAutoObservable, observable} from 'mobx';
import axios from '../utils/axios';
import {Kitchen} from '../types/kitchen.types';

export class KitchenStore {
  @observable kitchens: Kitchen[] = [];
  @observable kitchenTypes: string[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  @action async fetchKitchenTypes() {
    try {
      const {data} = await axios.get('api/kitchen/types');
      this.kitchenTypes = data;
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
      this.kitchens = data;
    } catch (error) {
      console.error('Error fetching kitchens:', error);
    }
  }
}

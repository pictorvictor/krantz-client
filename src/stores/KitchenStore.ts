import {action, makeAutoObservable, observable} from 'mobx';
import axios from '../utils/axios';

export class KitchenStore {
  @observable kitchens = [];
  @observable filters: string[] = [];
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

  @action toggleFilter(filterKey: string) {
    if (this.filters.includes(filterKey)) {
      this.filters = this.filters.filter(f => f !== filterKey);
    } else {
      this.filters.push(filterKey);
    }
  }
}

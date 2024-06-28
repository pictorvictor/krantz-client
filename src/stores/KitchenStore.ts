import {action, makeAutoObservable, observable, runInAction} from 'mobx';
import axios from '../utils/axios';
import {Kitchen} from '../types/kitchen.types';
import Geolocation from '@react-native-community/geolocation';
import {Meal} from '../types/meal.types';

export class KitchenStore {
  @observable kitchens: Kitchen[] = [];
  @observable kitchenTypes: string[] = [];
  @observable kitchensByProximity: Kitchen[] = [];
  @observable kitchensFavorites: Kitchen[] = [];
  @observable kitchenMeals: Map<string, Meal[]> = new Map();
  @observable providerKitchen?: Kitchen;

  constructor() {
    makeAutoObservable(this);
  }

  @action async getKitchenTypes() {
    try {
      const {data} = await axios.get('api/kitchen/types');
      runInAction(() => {
        this.kitchenTypes = data;
      });
    } catch (error) {
      console.error('Error getting kitchen types:', error);
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
      console.error('Error getting kitchens:', error);
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
      console.error('Error getting kitchens by proximity:', error);
    }
  }

  @action async getFavouriteKitchens() {
    try {
      const {data} = await axios.get('api/kitchen/favourites');
      runInAction(() => {
        this.kitchensFavorites = data;
      });
    } catch (error) {
      console.error('Error getting favourite kitchens:', error);
    }
  }

  @action async getKitchenById(id: string) {
    try {
      const {data} = await axios.get(`api/kitchen/${id}`);
      runInAction(() => {
        this.kitchenMeals = data.meals;
      });
    } catch (error) {
      console.error('Error getting kitchen by id:', error);
    }
  }

  @action async getMeals(kitchenId: string) {
    if (this.kitchenMeals.has(kitchenId)) {
      return;
    }
    try {
      const {data} = await axios.get(`api/kitchen/${kitchenId}`);
      runInAction(() => {
        this.kitchenMeals.set(kitchenId, data.meals);
      });
    } catch (error) {
      console.error('Error getting meals:', error);
    }
  }

  @action async getProviderKitchen() {
    try {
      const {data} = await axios.get('api/kitchen/self');
      runInAction(() => {
        this.providerKitchen = data;
      });
    } catch (error) {
      console.error('Error getting provider kitchen:', error);
    }
  }

  getKitchenMeals(kitchenId: string) {
    return this.kitchenMeals.get(kitchenId) || [];
  }
}

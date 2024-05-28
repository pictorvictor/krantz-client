import {createContext, useContext} from 'react';
import {rootStore} from '../stores/RootStore';

export const StoreContext = createContext(rootStore);

export const StoreProvider = StoreContext.Provider;

export const useStores = () => useContext(StoreContext);

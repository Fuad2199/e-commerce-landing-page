"use client"

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cartReducer from '../store/cartSlice';
import {
  persistReducer,
  persistStore,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // ✅ düzgün import

// SSR üçün boş storage (noop)
const createNoopStorage = () => {
  return {
    getItem() {
      return Promise.resolve(null);
    },
    setItem(_key: string, value: unknown) {
      return Promise.resolve(value);
    },
    removeItem() {
      return Promise.resolve();
    },
  };
};

const isServer = typeof window === 'undefined';

const selectedStorage = isServer ? createNoopStorage() : storage;

const persistConfig = {
  key: 'root',
  storage: selectedStorage,
  whitelist: ['cart'],
};

const rootReducer = combineReducers({
  cart: cartReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () =>
  configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
        },
      }),
  });

const store = makeStore();

export const persistor = persistStore(store);
export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export default store;
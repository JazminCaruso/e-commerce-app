import { configureStore } from '@reduxjs/toolkit';
import addressReducer from './address/addressSlice';
import authReducer from './auth/authSlice';
import cartReducer from './cart/cartSlice';
import categoriesReducer from './categories/categoriesSlice';
import favReducer from './favorites/favSlice';
import productsReducer from './products/productsSlice';
import { authApi } from './auth/api';
import { categoriesApi } from './categories/api';
import { mapsApi } from './maps/api';
import { ordersApi } from './orders/api';
import { productsApi } from './products/api';
import { settingsApi } from './settings/api';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        auth: authReducer,
        address: addressReducer,
        fav: favReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [settingsApi.reducerPath]: settingsApi.reducer,
        [mapsApi.reducerPath]: mapsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            categoriesApi.middleware,
            productsApi.middleware,
            ordersApi.middleware,
            authApi.middleware,
            settingsApi.middleware,
            mapsApi.middleware
        ),
});

setupListeners(store.dispatch);

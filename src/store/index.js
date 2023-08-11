import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./categories/categoriesSlice";
import cartReducer from "./cart/cartSlice";
import authReducer from "./auth/authSlice"
import { categoriesApi } from "./categories/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from "./products/api";
import { ordersApi } from "./orders/api";
import { authApi } from "./auth/api";
import { settingsApi } from "./settings/api";
import { mapsApi } from "./maps/api";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        auth: authReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [ordersApi.reducerPath]: ordersApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [settingsApi.reducerPath]: settingsApi.reducer,
        [mapsApi.reducerPath]: mapsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
        categoriesApi.middleware, 
        productsApi.middleware, 
        ordersApi.middleware,
        authApi.middleware,
        settingsApi.middleware,
        mapsApi.middleware,
    ),

});

setupListeners(store.dispatch);

import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import categoriesReducer from "./categories/categoriesSlice";
import cartReducer from "./cart/cartSlice";
import { categoriesApi } from "./categories/api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { productsApi } from "./products/api";

export const store = configureStore({
    reducer: {
        products: productsReducer,
        categories: categoriesReducer,
        cart: cartReducer,
        [categoriesApi.reducerPath]: categoriesApi.reducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(categoriesApi.middleware, productsApi.middleware),

});

setupListeners(store.dispatch);

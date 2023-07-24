import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";

export const store = configureStore({
    reducer: {
        products: productsReducer,
    }
});

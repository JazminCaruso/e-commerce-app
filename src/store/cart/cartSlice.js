import { createSlice } from "@reduxjs/toolkit";
import { sumTotal } from "../../utils/functions";

const initialState = {
    items: [],
    total: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if ( itemInCart &&
              state.items.find((item) => item.id === action.payload.id)?.quantity === itemInCart?.stock
            ) {
              return;
            }
            if (itemInCart?.stock > itemInCart?.quantity) {
              itemInCart.quantity += 1;
              state.total = sumTotal(state.items);
            }
            if (!itemInCart) {
              state.items.push(action.payload);
              state.total = sumTotal(state.items);
            }
          },
        increaseItemQuantity: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart && itemInCart.stock > itemInCart.quantity) {
                itemInCart.quantity += 1;
                state.total = sumTotal(state.items);
            }
        },
        decreaseItemQuantity: (state, action) => {
            const itemInCart = state.items.find((item) => item.id === action.payload.id);
            if (itemInCart && itemInCart.quantity > 1) {
                itemInCart.quantity -= 1;
                state.total = sumTotal(state.items);
            }
        },
        removeItemFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
            state.total = sumTotal(state.items);
        },
        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        },
    },
});

export const { addToCart, increaseItemQuantity, decreaseItemQuantity, removeItemFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


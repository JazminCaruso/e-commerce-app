import { createSlice } from "@reduxjs/toolkit";

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
            if (itemInCart) {
                itemInCart.quantity += 1;
            } else {
                state.items.push({ ... action.payload})
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;


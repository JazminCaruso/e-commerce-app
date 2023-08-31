import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const favSlice = createSlice({
    name: 'fav',
    initialState,
    reducers: {
        addToFav: (state, action) => {
            const itemInFav = state.items.find((item) => item.id === action.payload.id);
            if ( itemInFav
            ) {
              return;
            }
            if (!itemInFav) {
              state.items.push(action.payload);
            }
        },
        removeItemFromFav: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { addToFav, removeItemFromFav } = favSlice.actions;

export default favSlice.reducer;


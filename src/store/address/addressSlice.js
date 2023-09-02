import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    mapImageUrl: '',
};

const addressSlice = createSlice({
    name: 'address',
    initialState,
    reducers: {
        saveMapImageUrl(state, action) {
            state.mapImageUrl = action.payload;
        },
    },
});

export const { saveMapImageUrl } = addressSlice.actions;

export default addressSlice.reducer;

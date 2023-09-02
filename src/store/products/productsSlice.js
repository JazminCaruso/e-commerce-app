import { createSlice } from '@reduxjs/toolkit';
import PRODUCTS from '../../constants/data/products.json';

const initialState = {
    data: PRODUCTS,
};

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
});

export default productsSlice.reducer;

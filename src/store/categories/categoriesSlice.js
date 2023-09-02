import { createSlice } from '@reduxjs/toolkit';
import CATEGORIES from '../../constants/data/categories.json';

const initialState = {
    data: CATEGORIES,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
});

export default categoriesSlice.reducer;

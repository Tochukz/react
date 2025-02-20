import { createSlice } from '@reduxjs/toolkit';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

const filtersSlice = createSlice({
    name: 'VisibilityFilters',
    initialState: VisibilityFilters.SHOW_ACTIVE,
    reducers: {
        setVisibilityFilter(state, action) {
            return action.payload;
        }
    }
});

export const { setVisibilityFilter } = filtersSlice.actions;

export default filtersSlice.reducer;


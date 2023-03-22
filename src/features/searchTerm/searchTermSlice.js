import { createSlice } from "@reduxjs/toolkit";

const searchTerm = createSlice({
    name: 'searchTerm',
    initialState: '',
    reducers: {
        setSearchTerm: (state, action) => {
            return action.payload;
        },
        clearSearchTerm: () => {
            return '';
        }
    }
})

export const selectTerm = state => state.searchTerm
export const { setSearchTerm, clearSearchTerm } = searchTerm.actions
export default searchTerm.reducer
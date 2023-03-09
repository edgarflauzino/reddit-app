import { configureStore } from '@reduxjs/toolkit';
import searchTermReducer from '../features/searchTerm/searchTermSlice';
import allPostsReducer from '../features/allPosts/allPostsSlice'

export const store = configureStore({
  reducer: {
    allPosts: allPostsReducer,
    searchTerm: searchTermReducer
  },
});

export default store;

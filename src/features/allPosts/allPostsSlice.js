import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const reddit = createAsyncThunk(
  'loadData/fetchRedditData',
  async (searchTerm, thunkAPI) => {
  const response = await fetch(`https://www.reddit.com/search.json?q=${searchTerm}`)
  const data = await response.json()
  return data.data.children
})

export const allPostsSlice = createSlice({
  name: 'allPosts',
  initialState: {
    isLoading: false,
    data: [],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(reddit.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(reddit.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(reddit.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
})

export const selectPosts = state => state.allPosts
export default allPostsSlice.reducer
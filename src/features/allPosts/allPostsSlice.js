import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const allPostsSlice = createSlice({
    name: 'allPosts',
    initialState: {
        posts: [],
        isLoading: false,
        error: null
    },
    reducers: {
        /*toggleLike: (state, action) => {
            return state.map(post =>
                (post.data.id === action.payload.id) ? {
                    ...post,
                    like: !post.like,
                    dislike: false
                } : post)
        },
        toggleDislike: (state, action) => {
            return state.map(post =>
                (post.id === action.payload.id) ? {
                    ...post,
                    like: false,
                    dislike: !post.dislike
                } : post)
        }*/
    },
    extraReducers: {
        fetchRedditPostsRequest: (state) => {
        state.isLoading = true;
        },
        fetchRedditPostsSuccess: (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        },
        fetchRedditPostsFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        },
    },
})

export const fetchRedditPosts = () => {
    return async (dispatch) => {
      dispatch(fetchRedditPostsRequest());
  
      try {
        const response = await axios.get('https://www.reddit.com/search.json?q=bears');
        const posts = response.data.data.children.map(({ data }) => ({
          id: data.id,
          title: data.title,
          author: data.author,
          votes: data.ups,
          thumbnail: data.thumbnail,
          comments: data.num_comments,
        }));
  
        dispatch(fetchRedditPostsSuccess(posts));
      } catch (error) {
        dispatch(fetchRedditPostsFailure(error.message));
      }
    };
  };

export const {fetchRedditPostsRequest, fetchRedditPostsSuccess, fetchRedditPostsFailure} = allPostsSlice.actions;
export default allPostsSlice.reducer
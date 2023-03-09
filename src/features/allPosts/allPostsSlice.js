import { createSlice } from '@reduxjs/toolkit';

async function getData() {
    const response = await fetch(`https://www.reddit.com/search.json?q=bears`);
    const posts = await response.json();
    return posts.data.children;
};

const allPostsSlice = createSlice({
    name: 'allPosts',
    initialState: [],
    reducers: {
        loadData:
            getData(),
        toggleLike: (state, action) => {
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
        },
    }
})

export const selectAllPosts = state => state.allPosts
export const { loadData, toggleLike, toggleDislike } = allPostsSlice.actions
export default allPostsSlice.reducer
import { createSlice } from '@reduxjs/toolkit'

// fetch data to build default main page with posts from r/popular
// post example: { id: '', like: false, dislike: false, comments: [] }
const allPostsData = '' 

const allPostsSlice = createSlice({
    name: 'allPosts',
    initialState: [],
    reducers: {
        loadData: () => {
            return allPostsData;
        },
        toggleLike: (state, action) => {
            return state.map(post =>
                (post.id === action.payload.id) ? {
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

export const { loadData, toggleLike, toggleDislike } = allPostsSlice.actions
export const { allPostsReducer } =  allPostsSlice.reducer
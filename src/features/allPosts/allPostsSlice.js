import { createSlice } from '@reduxjs/toolkit'

// fetch data to build default main page with posts from r/popular
// post example: { id: '', like: false, dislike: false, comments: [] }
const apiData = 'https://www.reddit.com/r/popular.json'
const allPostsData = apiData.data.children

// json api url for a 'cake recipes' search: 
// https://www.reddit.com/search.json?q=cake%20recipes

/* 
the api returns an object with other objects (posts) inside data.children path
inside this path we will fetch for each post:  
data.num_comments (# of comments), 
done: data.id, data.thumbnail, data.author, data.title, data.ups (# of upvotes),
data.subreddit_name_prefixed (subreddit in the 'r/subreddit' format),
*/

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

export const selectAllPosts = state => state.allPosts
export const { loadData, toggleLike, toggleDislike } = allPostsSlice.actions
export const { allPostsReducer } =  allPostsSlice.reducer
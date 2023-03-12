import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import Post from '../../common/Post'
import { selectPosts, reddit } from './allPostsSlice'
import { selectTerm } from '../searchTerm/searchTermSlice';

export const AllPosts = () => {
    const dispatch = useDispatch();
    const { isLoading, posts, error } = useSelector(selectPosts);
    const searchTerm = useSelector(selectTerm)
    
    useEffect(() => {
        const delay = setTimeout(() => {
            dispatch(reddit(searchTerm || 'popular'));
        }, 1200);

        return () => clearTimeout(delay);
    }, [searchTerm, dispatch]);
    
    if (isLoading) {
        return <div className='loading'>Loading...</div>;
    }
    
    if (error) {
        return <div className='error'>Error: {error}</div>;
    }

    return (
        <div id='all-posts' className='posts-container'>
            {posts.map(post => (
                <Post post={post.data}>
                </Post>
            ))}
        </div>
    )
}
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import Post from '../../common/Post'
import { selectPosts, reddit } from './allPostsSlice'
import { selectTerm } from '../searchTerm/searchTermSlice';

export const AllPosts = () => {
    const dispatch = useDispatch();
    const { isLoading, data, error } = useSelector(selectPosts);
    const searchTerm = useSelector(selectTerm)
    
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            dispatch(reddit(searchTerm || 'popular'));
        }, 1500);

        return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, dispatch]);
    
    if (isLoading) {
        return <div>Loading...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div id='all-posts' className='posts-container'>
            {data.map(post => (
                <Post post={post.data}>
                </Post>
            ))}
        </div>
    )
}
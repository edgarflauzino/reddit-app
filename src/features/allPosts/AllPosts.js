import { selectAllPosts, toggleLike, toggleDislike, loadData } from './allPostsSlice'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import Post from '../features/Post'
import VoteButtom from '../features/VoteButtom'
import CommentsButtom from '../features/CommentsButtom'

const likeIcon = '../img/upvote.svg'
const dislikeIcon = '../img/downvote.svg'

export const AllPosts = () => {
    const posts = useSelector(selectAllPosts);
    const dispatch = useDispatch();

    const onFirstRender = () => {
        dispatch(loadData());
    }
    
    useEffect(onFirstRender, [])

    return (
        <div id='all-posts' className='posts-container'>
            {posts.map(post => (
                <Post post={post.data}>
                    <VoteButtom onClickHandler={dispatch(toggleLike(post.id))}
                                icon={likeIcon}/>
                    <h4>{post.data.ups}</h4>
                    <VoteButtom onClickHandler={dispatch(toggleDislike(post.id))}
                                icon={dislikeIcon}/>
                    <CommentsButtom />
                </Post>
            ))}
        </div>
    )
}
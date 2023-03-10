import { fetchRedditPosts } from './allPostsSlice'
import { useSelector, useDispatch } from 'react-redux'
import React, { useEffect } from 'react';
import Post from '../../common/Post'
import VoteButtom from '../../common/VoteButtom'
import CommentsButtom from '../../common/CommentsButtom'

const likeIcon = '../img/upvote.svg'
const dislikeIcon = '../img/downvote.svg'

export const AllPosts = () => {
    const dispatch = useDispatch();
    const { posts, isLoading, error } = useSelector(state => state.allPosts)

    const onFirstRender = () => {
        dispatch(fetchRedditPosts());
    }
    
    useEffect(onFirstRender, [])

    return (
        <div id='all-posts' className='posts-container'>
            {posts.map(post => (
                <Post post={post}>
                    {/*<VoteButtom onClickHandler={dispatch(toggleLike(post.id))}
                                icon={likeIcon}/>
                    <h4>{post.ups}</h4>
                    <VoteButtom onClickHandler={dispatch(toggleDislike(post.id))}
                                icon={dislikeIcon}/>
                    <CommentsButtom />*/}
                </Post>
            ))}
        </div>
    )
}
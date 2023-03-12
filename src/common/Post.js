import React from 'react';

export default function Post({ post }) {
    return (
        <div key={post.id} className="post" tabIndex={0}>
          <span className="post-container">
            <h3 className="post-title">{post.title}</h3>
            <h4 className="post-author">Posted by: {post.author}</h4>
            <h4 className="post-subreddit">{`r/${post.subreddit}`}</h4>
            <div className="thumbnail-container">
              <img src={post.thumbnail} alt="" className="post-thumbnail" />
            </div>
            <h5 className="post-comments">{`${post.num_comments} comments`}</h5>
          </span>
        </div>
    );
}
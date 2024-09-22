import React from 'react';
// Remove the line below if you don't have Post.css
// import './Post.css';

const Post = ({ post, deletePost, index }) => {
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <p>{post.timestamp}</p>
      <p>{post.body}</p>
      <button onClick={() => deletePost(index)}>Delete</button>
    </div>
  );
};

export default Post;

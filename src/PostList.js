import React from 'react';
import Post from './Post';

const PostList = ({ posts, deletePost }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Post key={index} post={post} deletePost={deletePost} index={index} />
      ))}
    </div>
  );
};

export default PostList;

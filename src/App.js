import React, { useState } from 'react';
import './App.css';
import PostForm from './PostForm';
import PostList from './PostList';

function App() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  const addPost = (post) => {
    setPosts([...posts, post]);
  };

  const deletePost = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase()) ||
    post.body.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Simple Blog App</h1>
      <PostForm addPost={addPost} />
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <PostList posts={filteredPosts} deletePost={deletePost} />
    </div>
  );
}

export default App;

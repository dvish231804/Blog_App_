// src/App.js
import React, { useState } from 'react';
import BlogList from './components/BlogList';
import PostDetails from './components/PostDetails';

const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div>
      {selectedPost ? (
        <PostDetails post={selectedPost} onBack={() => setSelectedPost(null)} />
      ) : (
        <BlogList onPostClick={setSelectedPost} />
      )}
    </div>
  );
};

export default App;

import React, { Component } from 'react';
import PostForm from './component/PostForm'
import AllPost from './component/AllPost'

function App() {
  return (
    <div className="App">
      <div className="navbar">
        <h2 className="center">Post</h2>

      </div>
      <PostForm/>
      <AllPost/>
    </div>
  );
}

export default App;

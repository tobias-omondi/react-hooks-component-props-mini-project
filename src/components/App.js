import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from './About';
import ArticleList from './ArticleList';

console.log(blogData);

function App() {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is my first post.' },
    { id: 2, title: 'Second Post', content: 'This is my second post.' },
    { id: 3, title: 'Third Post', content: 'This is my third post.' },
  ];
  return (
    <div className="App">
      You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck!
      <Header name="My Blog" />
      <About image="https://example.com/logo.png" about="This is my blog about React." />
      <ArticleList posts={posts} />
    </div>
  );
}

export default App;

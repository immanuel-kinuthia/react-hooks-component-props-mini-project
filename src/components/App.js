import React from "react";
import Header from "./Header";
import About from "./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <header>
        <h1>{blogData.name}</h1>
        <small>{blogData.description}</small>
      </header>
      <about>
        <aside>
          <img src={blogData.image || "https://via.placeholder.com/215"} alt="blog logo" />
          <p>{blogData.about}</p>
        </aside>
      </about>
      <main>
        {blogData.posts.map((post) => (
          <article key={post.id}>
            <h3>{post.title}</h3>
            <small>Posted on: {post.date}</small>
            <p>{post.content}</p>
          </article>
        ))}
      </main>
    </div>
  );
}

export default App;

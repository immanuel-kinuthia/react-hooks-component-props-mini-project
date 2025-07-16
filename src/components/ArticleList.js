import React from 'react';

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <article key={post.id}>
          <h3>{post.title}</h3>
          <small>Posted on: {post.date}</small>
          <p>{post.content}</p>
        </article>
      ))}
    </main>
  );
}

export default ArticleList;
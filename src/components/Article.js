import React from 'react';

function article({ title, date, content }) {
  return (
    <article>
      <h3>{title}</h3>
      <small>Posted on: {date || "January 1, 1970"}</small>
      <p>{content || "Setting up the building blocks of your site"}</p>
    </article>
  );
}

export default article;
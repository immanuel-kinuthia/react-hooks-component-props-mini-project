import React from 'react';

function Header({ name, description, image, about }) {
  return (
    <header>
      <h1>{name}</h1>
      <small>{description}</small>
      <aside>
        <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
        <p>{about}</p>
      </aside>
    </header>
  );
}

export default Header;
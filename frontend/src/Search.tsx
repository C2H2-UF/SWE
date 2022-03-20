import React, { useState } from 'react';
import './App.css';

const Search = () => {
  return <div> Hello World!</div>
}

const SearchBar = () => (
  <form action="/" method="get" className = "SearchBar">
      <label htmlFor="header-search">
          <span className="visually-hidden">Search blog posts</span>
      </label>
      <input
          type="text"
          id="header-search"
          placeholder="Search blog posts"
          name="s" 
      />
      <button type="submit">Search</button>
  </form>
);

export default SearchBar;
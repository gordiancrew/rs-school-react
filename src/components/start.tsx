import React, { useState } from 'react';
import CardsMorti from './utils/cardsMorti';
import Header from './utils/header';
import '../styles/main.css';
import SearchBar from './utils/searchBar';

function Main() {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <div className="main">
      <Header />
      <SearchBar setSearchQuery={setSearchQuery} searchQuery={searchQuery} />
      <CardsMorti searchQuery={searchQuery} />
    </div>
  );
}
export default Main;

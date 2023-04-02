import React from 'react';

import CardsMorti from './utils/cardsMorti';
import Header from './utils/header';

import '../styles/main.css';
import SearchBar from './utils/searchBar';

function Main() {
  return (
    <div className="main">
      <Header />
      <SearchBar />
      <CardsMorti />
    </div>
  );
}
export default Main;

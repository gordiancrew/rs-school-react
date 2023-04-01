import React from 'react';

import CardsMorti from './utils/cardsMorti';
import Header from './utils/header';

import Search from './utils/search';

function Main() {
  return (
    <div>
      <Header />
      <Search />
      <CardsMorti />
    </div>
  );
}
export default Main;

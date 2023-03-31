import React from 'react';
import Cards from './utils/cards';
import Header from './utils/header';

import Search from './utils/search';

function Main() {
  return (
    <div>
      <Header />
      <Search />
      <Cards />
    </div>
  );
}
export default Main;

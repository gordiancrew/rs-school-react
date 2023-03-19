import React from 'react';
import Cards from './utils/cards';
import Header from './utils/header';
import InfoValue from './utils/info-value';
import Search from './utils/search';

class Main extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <h1>Hello</h1>
        <Header />
        <InfoValue />
        <Search />
        <Cards />
      </div>
    );
  }
}
export default Main;

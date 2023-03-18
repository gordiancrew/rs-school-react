import React from 'react';
import Header from './utils/header';
import InfoValue from './utils/info-value';
import Search from './utils/search';

class Main extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Header />
        <InfoValue />
        <Search />
        <h1>Class main</h1>
      </div>
    );
  }
}
export default Main;

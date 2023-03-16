import React from 'react';
import Search from './utils/search';

class Main extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Search />
        <h1>Class main</h1>
      </div>
    );
  }
}
export default Main;

import React from 'react';
import InfoValue from './utils/info-value';
import Search from './utils/search';

class Main extends React.Component {
  componentWillUnmount(): void {
    alert('start unmount');
  }
  render(): React.ReactNode {
    return (
      <div>
        <InfoValue />
        <Search />
        <h1>Class main</h1>
      </div>
    );
  }
}
export default Main;

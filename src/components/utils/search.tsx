import React from 'react';
import '../../styles/search.css';

class Search extends React.Component {
  currentValue = '';
  saveValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.currentValue = e.target.value;
  }
  componentWillUnmount(): void {
    localStorage.value = this.currentValue;
  }
  render() {
    return (
      <div className="search">
        <form>
          <input onChange={(e) => this.saveValue(e)} />
          <button type="button"></button>
        </form>
      </div>
    );
  }
}

export default Search;

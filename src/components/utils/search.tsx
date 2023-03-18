import React from 'react';
import '../../styles/search.css';

class Search extends React.Component {
  currentValue = 'iiiii';
  saveValue(e: React.ChangeEvent<HTMLInputElement>) {
    this.currentValue = e.target.value;
    console.log(this.currentValue);
  }
  componentWillUnmount(): void {
    localStorage.value = this.currentValue;
    alert('kk');
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

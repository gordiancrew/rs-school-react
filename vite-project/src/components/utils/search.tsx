import React from 'react';
import '../../styles/search.css';
let currentValue = '';
class Search extends React.Component {
  saveValue(e: React.ChangeEvent<HTMLInputElement>) {
    currentValue = e.target.value;
    console.log(currentValue);
  }
  componentWillUnmount(): void {
    localStorage.value = currentValue;
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

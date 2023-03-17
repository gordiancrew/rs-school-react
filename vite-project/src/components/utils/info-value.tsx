import React from 'react';
class InfoValue extends React.Component {
  value = localStorage.value;

  render() {
    return (
      <div>
        <h1>Value is: {this.value}</h1>
      </div>
    );
  }
}

export default InfoValue;

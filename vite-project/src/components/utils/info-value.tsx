import React from 'react';
class InfoValue extends React.Component {
  value = '';
  // eslint-disable-next-line react/no-deprecated
  componentWillMount(): void {
    if (localStorage.value) this.value = localStorage.value;
  }

  render() {
    return (
      <div>
        <h1>Value is: {this.value}</h1>
      </div>
    );
  }
}

export default InfoValue;

import React from 'react';
import CardsMorti from './utils/cardsMorti';
import Header from './utils/header';
import '../styles/main.css';

function Main() {
  return (
    <div className="main">
      <Header />
      <CardsMorti />
    </div>
  );
}
export default Main;

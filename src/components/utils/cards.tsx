import React from 'react';
import '../../styles/cards.css';
import { ICard } from '../../types/i-card';
import { useSelector } from 'react-redux';
import { res } from './cardsMorti';

function Cards() {
  const footballists: ICard[] = useSelector((state: res) => state.tesst.value);

  return (
    <div data-testid={'preview'} className="cards">
      {footballists.map((item) => (
        <div key={item.name} className="card">
          <div className="card-photo-frame">
            <img
              className="card-photo"
              src={item.photo ? URL.createObjectURL(item.photo) : 'xxx'}
            ></img>
            <div className="card-flag">
              <img className="card-img" src={item.flag}></img>
            </div>
            <div className="card-date">{item.born}</div>
            <div className="foot">{item.leg ? item.leg : 'R'}</div>
          </div>
          <div className="card-info">
            {item.name}
            <React.Fragment>
              <br />
            </React.Fragment>
            {item.club}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cards;

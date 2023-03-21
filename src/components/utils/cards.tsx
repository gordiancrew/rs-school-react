import { footballs } from '../../Data/footballs';
import React from 'react';
import '../../styles/cards.css';
import { ICard } from 'types/i-card';

class Cards extends React.Component {
  render() {
    const footballists: ICard[] = localStorage.cards ? JSON.parse(localStorage.cards) : footballs;
    return (
      <div className="cards">
        {footballists.map((item) => (
          <div key={item.name} className="card">
            <div className="card-photo-frame">
              <img className="card-photo" src={item.photo}></img>
              <div className="card-flag">
                <img className="card-img" src={item.flag}></img>
              </div>
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
}

export default Cards;

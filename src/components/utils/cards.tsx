import { footballs } from '../../Data/footballs';
import React from 'react';
import '../../styles/cards.css';
class Cards extends React.Component {
  render() {
    return (
      <div className="cards">
        {footballs.map((item) => (
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

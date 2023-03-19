import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/header.css';
class Header extends React.Component {
  render() {
    const textArr = window.location.href.toString().split('/');
    const text = textArr[textArr.length - 1];

    const menuArr = [
      { name: 'main', url: '', link: '/' },
      { name: 'about us', url: 'about', link: '/about' },
    ];
    const info = menuArr.filter((x) => x.url === text)[0].name;
    return (
      <div className="header">
        <div className="header-info">Page :{info}</div>
        {menuArr.map((item) => (
          <li
            key={item.name}
            style={{ backgroundColor: text === item.url ? 'grey' : '' }}
            className="header__item"
          >
            <Link to={item.link}>{item.name}</Link>
          </li>
        ))}
      </div>
    );
  }
}

export default Header;

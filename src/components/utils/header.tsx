import React from 'react';
import '../../styles/header.css';
class Header extends React.Component {
  render() {
    const textArr = window.location.href.toString().split('/');
    const text = textArr[textArr.length - 1];
    const menuArr = [
      { name: 'main', url: '', link: '/' },
      { name: 'about us', url: 'about', link: '/about' },
    ];
    return (
      <div className="header">
        {menuArr.map((item) => (
          <li
            key={item.name}
            style={{ backgroundColor: text === item.url ? 'grey' : '' }}
            className="header__item"
          >
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </div>
    );
  }
}

export default Header;

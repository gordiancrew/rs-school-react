import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './components/start';
import AboutUs from './components/about-us';
import NotFound from './components/not-found';
import Header from './components/utils/header';
function App() {
    return (React.createElement("div", null,
        React.createElement("div", null,
            React.createElement(Header, null),
            React.createElement(Routes, null,
                React.createElement(Route, { path: "/", element: React.createElement(Main, null) }),
                React.createElement(Route, { path: "/about", element: React.createElement(AboutUs, null) }),
                React.createElement(Route, { path: "*", element: React.createElement(NotFound, null) })))));
}
export default App;

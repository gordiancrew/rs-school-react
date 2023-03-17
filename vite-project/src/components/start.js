import React from 'react';
import InfoValue from './utils/info-value';
import Search from './utils/search';
class Main extends React.Component {
    componentWillUnmount() {
        alert('start unmount');
    }
    render() {
        return (React.createElement("div", null,
            React.createElement(InfoValue, null),
            React.createElement(Search, null),
            React.createElement("h1", null, "Class main")));
    }
}
export default Main;

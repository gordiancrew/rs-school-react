import React from 'react';
import '../../styles/search.css';
class Search extends React.Component {
    currentValue = 'iiiii';
    saveValue(e) {
        this.currentValue = e.target.value;
        console.log(this.currentValue);
    }
    componentWillUnmount() {
        localStorage.value = this.currentValue;
        alert('kk');
    }
    render() {
        return (React.createElement("div", { className: "search" },
            React.createElement("form", null,
                React.createElement("input", { onChange: (e) => this.saveValue(e) }),
                React.createElement("button", { type: "button" }))));
    }
}
export default Search;

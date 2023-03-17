import React from 'react';
class InfoValue extends React.Component {
    value = '';
    // eslint-disable-next-line react/no-deprecated
    componentWillMount() {
        if (localStorage.value)
            this.value = localStorage.value;
    }
    render() {
        return (React.createElement("div", null,
            React.createElement("h1", null,
                "Value is: ",
                this.value)));
    }
}
export default InfoValue;

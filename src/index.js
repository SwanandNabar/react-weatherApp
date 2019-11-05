import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export default class Index extends Component {
    render() {
        return (
            <div>
                Hello React!
                </div>
        )
    }
}

ReactDOM.render(
    <App />, document.getElementById("root")
);
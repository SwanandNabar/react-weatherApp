import React, { Component } from 'react';
import Weather from './Weather-App/Weather/Weather';
import TipCalculator from './Tip-Calculator/TipCalculator';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import GithubCards from './Github-Cards/GithubCards';

class App extends Component {

    render() {
        return (
            <div>
                <Weather />
                <TipCalculator />
                <GithubCards />
            </div>
        )
    }
}

export default App;
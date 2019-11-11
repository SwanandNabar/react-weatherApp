import React, { Component } from 'react';
import Weather from './Weather-App/Weather/Weather';
import TipCalculator from './Tip-Calculator/TipCalculator';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Weather} />
                    <Route exact path="/tipcalculator" component={TipCalculator} />
                </Switch>
            </Router>
        )
    }
}

export default App;
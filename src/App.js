import React, { Component } from 'react';
import Weather from './Weather-App/Weather/Weather';
import TipCalculator from './Tip-Calculator/TipCalculator';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Weather}>
                        <Link to="/" component={Weather}>Weather</Link>
                    </Route>
                    <Route exact path="/tipcalculator" component={TipCalculator}>
                        <Link to="/tipcalculator" component={TipCalculator}>Tip Calculator</Link>
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App;
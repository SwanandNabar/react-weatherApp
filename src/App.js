import React, { Component } from 'react';
import Weather from './Weather-App/Weather/Weather';
import TipCalculator from './Tip-Calculator/TipCalculator';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class App extends Component {

    render() {
        return (
            // <Router>
            //     <Switch>
            //         <Route exact path="/">
            //             <Weather />
            //         </Route>
            //         <Route path="/tip">
            //             <TipCalculator />
            //         </Route>
            //     </Switch>
            // </Router>

            <div>
                <Weather />
                <TipCalculator />
            </div>
        )
    }
}

export default App;
import React, { Component } from 'react';
import Titles from './Weather-App/Titles/Titles';
import Form from './Weather-App/Form/Form';
import Weather from './Weather-App/Weather/Weather';
import TipCalculator from './Tip-Calculator/TipCalculator';
import axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            city: '',
            error: ''
        }
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather(e) {
        e.preventDefault();

        const API_KEY = 'dd7197d57b1680d056e104057a24d493';
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const BASE_URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}`;
        const FULL_URL = BASE_URL + `&appid=${API_KEY}`;

        axios.get(FULL_URL)
            .then(result => {
                if (city && country) {
                    this.setState({
                        temp: result.data.main.temp,
                        city: result.data.name
                    })
                } else {
                    this.setState({
                        error: 'Please enter city'
                    })
                }
            })
    }

    render() {
        return (
            <div>
                <Titles />
                <Form loadWeather={this.getWeather} />
                {this.state.city &&
                    <Weather city={this.state.city} temp={this.state.temp} error={this.state.error} />
                }
                <TipCalculator />
            </div>
        )
    }
}

export default App;
import React, { Component } from 'react';
import Titles from './Titles/Titles';
import Form from './Form/Form';
import Weather from './Weather/Weather';
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
                const weather_info = result.data;
                console.log(weather_info);
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
            </div>
        )
    }
}

export default App;
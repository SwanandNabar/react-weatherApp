import React, { Component } from "react";
import axios from 'axios';

class Weather extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temp: 0,
            city: '',
            country: '',
            error: '',
            weather: false
        }
        this.getWeather = this.getWeather.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name

        this.setState({
            [name]: value
        })
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
                        city: result.data.name,
                        weather: true
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
                <h1>Weather App</h1>
                <form onSubmit={this.getWeather}>
                    <input type="text" name="city" placeholder="City" onChange={this.onChange} value={this.state.city} />
                    <input type="text" name="country" placeholder="Country" onChange={this.onChange} value={this.state.country} />
                    <button>Get Weather</button>
                    <p>This is weather component which is returned from the App component</p>
                    {this.state.weather &&
                        <p>
                            Temperature in {this.state.city} is {this.state.temp - 273.15} degree Celcius
                        </p>
                    }
                </form>
            </div>
        )
    }
}

export default Weather;
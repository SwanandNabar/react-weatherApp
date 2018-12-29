import React, { Component } from "react";
import axios from "axios";

class Weather extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                Temperature in {this.props.city} is {this.props.temp - 273.15} degree Celcius
                {this.props.error}
                this is weather component
            </div>
        )
    }
}

export default Weather;
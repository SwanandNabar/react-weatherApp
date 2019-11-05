import React, { Component } from "react";

class Weather extends Component {

    render() {
        return (
            <div>
                <p>This is weather component which is returned from the App component</p>
                Temperature in {this.props.city} is {this.props.temp - 273.15} degree Celcius
            </div>
        )
    }
}

export default Weather;
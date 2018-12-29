import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const city = this.props.city;
        const country = this.props.country;
        return (
            <form onSubmit={this.props.loadWeather}>
                <input type="text" name="city" placeholder="City" value={this.props.city} />
                <input type="text" name="country" placeholder="Country" value={this.props.country} />
                <button>Get Weather</button>
            </form>
        )
    }
}

export default Form;
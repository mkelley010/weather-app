import React, { Component } from 'react';
import Skycons from 'react-skycons'
import "./WeatherPane.css";

class WeatherPane extends Component {

    iconSize = {
        height: '125%',
        width: '125%',
        justifyContent: 'center',
        alignItems: 'center'
    };

    isEmpty = (obj) => {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    };

    toPercent = (decVal) => {
        return (decVal * 100).toFixed(0);
    };

    // Build weather cards for current, valid weather
    handleValidWeather = (weatherData, location) => {
        return (
            <div>
                <h1>Current weather for {location}</h1>
                <div className="center flex flex-column flex-row-l justify-between ph3 ph4-l pv3 w-60">
                    <div className="mainIcon w-100 w-33-l ph4-l mb4 mb0-l bg-white br3 mr2 card">
                        <div className="img">
                            <Skycons className="icon-size mt2"
                                     color='black'
                                     icon={weatherData.currently.icon.toUpperCase().replace(/-/g, '_')}
                                     autoplay={true}
                                     style={this.iconSize}
                            />
                        </div>
                        <p>{weatherData.currently.summary}</p>
                    </div>
                    <div className="w-100 w-33-l ph4-l mb4 mb0-l bg-white br3 mr2 card">
                        <h1 className="mainTemp">{weatherData.currently.temperature.toPrecision(2)}°</h1>
                        <p>Feels like: {weatherData.currently.apparentTemperature.toPrecision(2)}°</p>
                        <p>
                            Hi: {weatherData.daily.data[0].temperatureHigh.toPrecision(2)}°&nbsp;
                            Low: {weatherData.daily.data[0].temperatureLow.toPrecision(2)}°
                        </p>
                    </div>
                    <div className="details w-100 w-33-l ph4-l mb4 mb0-l bg-white br3 mr2 card">
                        <p><b>Humidity:</b> {this.toPercent(weatherData.currently.humidity)}%</p>
                        <p><b>Precipitation:</b> {this.toPercent(weatherData.currently.precipProbability)}%</p>
                        <p><b>Wind:</b> {weatherData.currently.windSpeed}&nbsp;mph</p>
                        <p><b>UV Index:</b> {weatherData.currently.uvIndex}</p>
                        {console.log(location)}
                    </div>
                </div>
            </div>
        );
    };

    // Check if location is valid and render it if so
    renderWeatherPane = () => {
        let { weatherData, location } = this.props;
        if (weatherData.badLoc) {
            return (
                <p className="red">Please enter a valid location.</p>
            )
        } else if (!this.isEmpty(weatherData)) {
            return this.handleValidWeather(weatherData, location);
        } else {
            return (null)
        }
    };

    render() {
        return (
            <div>
                {this.renderWeatherPane()}
            </div>
        )
    }
}

export default WeatherPane;
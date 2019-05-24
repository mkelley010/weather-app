import React from 'react';

const WeatherPane = ( {weatherData} ) => {
    // console.log({weatherData});
    if (weatherData.badLoc) {
        return (
            <p>Please enter a valid location.</p>
        )
    } else if (!isEmpty(weatherData)) {
        return (
            <div>
                 <h1>{weatherData.currently.temperature}°</h1>
            </div>
        );
    } else {
        return (null)
    }
}

//Helper function
function isEmpty(obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

export default WeatherPane;
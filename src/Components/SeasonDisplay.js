import React from 'react';

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
       return lat > 0 ? 'Summer' : 'Winter';
    } else {
       return lat > 0 ? 'Winter' : 'Summer';

    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const seasonText = season === 'Winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    const icon = season === 'Winter' ? 'snowflake' : 'sun';
  
    return (
        <div>
            <i className={`${icon} icon`} />
            <h1>{seasonText}</h1>
            <i className={`${icon} icon`} />
            <p></p>
        </div>
    )
};

export default SeasonDisplay;

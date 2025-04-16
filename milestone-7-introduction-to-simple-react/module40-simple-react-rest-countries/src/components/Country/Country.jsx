import React, { useState } from 'react';
import './Country.css'


const Country = ({country, handleVisitedCountries, handleVisitedFlag}) => {
    const [visited, setVisited] = useState(false)
    // console.log(country.flags)
    // console.log(country?.fla?.png)
    // console.log(handleVisitedCountries)
    const handleVisited = () =>{
        // setVisited(true) //1
            // if (visited === true){ //2
            //     setVisited(false)
            // }
            // else{
            //     setVisited(true);
            // }

            setVisited(!visited); //3 more shortcut and effective
            handleVisitedCountries(country)

        console.log("visited cilcked")
    }
    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>{country.name.common}</h3>
            <img src={country.flags.png} alt="" />
            {/* <img src={country?.fla?.png} alt="" /> */}
            <p>Independent: {country.independent ? "Free":"Not Free"}</p>
            <p>Population: {country.population}</p>
            <button className={visited? 'btn-visited' : 'btn-not-visited'} onClick={handleVisited}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            <button onClick={() => handleVisitedFlag(country.flags.png)}>Add Visited Flag</button>
        </div>
    );
};

export default Country;

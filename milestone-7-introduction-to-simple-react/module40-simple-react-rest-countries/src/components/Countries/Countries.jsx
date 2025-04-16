import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'
const Countries = ({countriesPromise}) => {
    const[visitedCountries, setVisitedCountries] =useState([])
    const [visitedFlags, setVisitedFlags] = useState([])


    const countries = use(countriesPromise)
    const handleVisitedFlag= (flag) =>{
        // console.log("flag is added", flag)
        const newVisitedFlags = [...visitedFlags, flag]
            setVisitedFlags(newVisitedFlags)
    }
    console.log(countries)
    const handleVisitedCountries = (country) =>{
        console.log("country visited clicked to be added", country)
        console.log(visitedCountries)
        const newVisitedCountries = [...visitedCountries,country] //... na dile notun array make hbe na copy akare
        setVisitedCountries(newVisitedCountries)
        // visitedCountries.push(country); //wrong

    }
    return (
        <div >
            <h1>You and Me Traveling Countries: {countries.length}</h1>
            <h3>Travel so far:{visitedCountries.length}</h3>
            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag,index) => <img key={index} src={flag}></img>)
                 }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div className='countries'>
            {
                countries.map(country => <Country 
                    key={country.cca3}
                    handleVisitedCountries = {handleVisitedCountries} 
                    handleVisitedFlag = {handleVisitedFlag}
                    country={country}></Country>)
            }
            </div>
        </div>
    );
};

export default Countries;




/////read the documentation: updating objects state, arrays state 
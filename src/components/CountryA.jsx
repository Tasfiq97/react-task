import React from 'react';
import { useEffect } from 'react';
import axios from "axios"
import { useState } from 'react';
const CountryA = () => {
    const [country,setCountry]=useState([]);
      useEffect(()=>{
    
        fetch("https://contact.mediusware.com/api/contacts/?format=json").then(res=>res.json()).then(data=>setCountry(data.results));
    
      },[])
        console.log(country)
    return (
        <div style={{color:"black",fontSize:"15px"}}>
            {
                country?.map(dt=>(
                    <ul>
                        <li>{dt?.phone}</li>
                    </ul>
                ))
            }
            
        </div>
    );
};

export default CountryA;
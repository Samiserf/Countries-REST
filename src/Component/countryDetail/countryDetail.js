import React, { useEffect, useState } from 'react';
import './countryDetail.css';
import {
    BrowserRouter as 
    Link, NavLink,useParams
  } from "react-router-dom";
import Button from '../Button/button'



function CountryDetail(props) {

    const [desc,setDesc] = useState([]);
    const [descBorder,setDescBorder] = useState([]);
    const [descCurrencies,setdescCurrencies] = useState([]);
    const [descLenguages,setdescLanguages] = useState([]);

    let { id } = props.match.params;

    useEffect( () => { 
    

        fetch(`https://restcountries.eu/rest/v2/alpha/${id}`)
        
  
        .then(response => {return response.json() })
  
        .then(response => {
  
            setDesc(response);
            setDescBorder(response.borders);
            setdescCurrencies(response["currencies"][0]);
            setdescLanguages(response["languages"]);
            
        })
    },[id]);

    console.log(descLenguages);

    return (

        <div className="conteiner-desc">
            <div className="div-back">
                <Button path="" id="" text="< Back" />
            </div>
            <div className="content-CartList">

                    <div className="flag">
                        <img src={desc.flag}></img>
                    </div>

                    <div className="description-country">
                        <h1>{desc.name}</h1>
                        <div className="info-country">
                            <div className="tags_info_countries">
                                <p>Native Name: <span>{desc.nativeName}</span></p>
                                <p>Population: <span>{desc.population}</span></p>
                                <p>Region: <span>{desc.region}</span></p>
                                <p>Sub Region: <span>{desc.subRegion}</span></p>
                                <p>Capital: <span>{desc.capital}</span></p>
                            </div>
                            <div>
                                <p>Top Level Domain: <span>{desc.topLevelDomain}</span></p>
                                <p>Top Level Domain: <span>{descCurrencies.name}</span></p>
                                <p>Currencies : {descLenguages.map( item => ( <span>{item.name},</span> ))}</p>
                            </div>
                        </div>
                        <div className="around-countries">
                            <p>Border Countries:</p>
                            <div className="List-countries-around">
                                {descBorder.map( (border,i) => (
                                    <Button path="pais/" id={border} text={border} />
                                    ) )}
                            </div>
                            
                        </div>
                    </div>
            </div>
            
      </div>
    );
  }
  
  export default CountryDetail;
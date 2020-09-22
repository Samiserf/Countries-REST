import React, { useEffect, useState } from 'react';
import './cartList.css';
import {
    BrowserRouter as 
    Link, NavLink
  } from "react-router-dom";


function CartList(props) {



    return (
      <div className="content-CartList">

            <div className="container">
                <div className="grid-row">
                    {props.data.map( (pais, i) =>
                        <NavLink to={`/pais/${pais.alpha2Code }`} className="grid-item" key={i}>
                                    <div className="grid-item-wrapper">
                                        <div className="imagenPais">
                                            <img style={{backgroundImage : `url(${pais.flag})`}}></img>
                                        </div>
                                        <div className="description-country">
                                            <h3>{pais.name}</h3>

                                            <p>Population: <span>{pais.population}</span></p>
                                            <p>Region: <span>{pais.region}</span></p>
                                            <p>Capital: <span>{pais.capital}</span></p>
                                        </div>
                                    </div>
                        </NavLink>
                    )}
                </div>
            </div>
        
      </div>
    );
  }
  
  export default CartList;
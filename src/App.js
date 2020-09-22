import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './Component/Nav/nav'
import FiltroHome from './Component/Filtros/filtroHome'
import CartList from './Component/CartList/cartList'
import CountryDetail from './Component/countryDetail/countryDetail'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  

  const [data, setData] = useState([]);
  const [theme, settheme] = useState(true);

  useEffect( () => { 

      fetch("https://restcountries.eu/rest/v2/all")
      

      .then(response => {return response.json() })

      .then(response => {

          setData(response)

      })

  },[]);

  function changeTheme(){
    
    if(theme){console.log(theme); settheme(false)}
    else{settheme(true)}
    
  } 

  return (
    <div className={theme ? "App" : "App-dark"}>
      <Router>

        <NavBar changeTheme={changeTheme}/>
        <switch>
          <Route exact path="/">
            <FiltroHome updateData={setData} data={data}/>
            <CartList data={data}/>  
          </Route>
          <Route exact path="/pais/:id" component={CountryDetail}/>
        </switch>

      </Router>

        

        


    </div>
  );
}

export default App;

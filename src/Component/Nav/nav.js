import React, { useEffect, useState } from 'react';
import './nav.css';


function NavBar(props) {

  const [shadow,setShadow] = useState(false);

  useEffect( () => {

    function onScroll(){
      if(window.scrollY>50){
        setShadow(true);
      }else{setShadow(false);}
      
    }
    document.addEventListener("scroll",onScroll)
    return () => {
      document.removeEventListener("scroll",onScroll)
    }
  })


    return (
      <div className={shadow ? "shadow" : "NavBar"}>
        
        <h1>Where in the world?</h1>
        <button onClick={props.changeTheme}><i class="fa fa-moon-o" aria-hidden="true"></i> Black mode</button>
      </div>
    );
  }
  
  export default NavBar;
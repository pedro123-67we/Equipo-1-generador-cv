import React from 'react'
import {Link} from 'react-router-dom'


 export const Inicio = () => {
 return (
    <div>
    <div className="header">
      <a href="#default" className="logo">
        <img
          src=""
          alt="logo"
        ></img>
      </a>
      <div className="header-right">
      <Link to="/generador">Generador</Link> 
      <Link to="/vistaCv">CV</Link> 
    
      </div>
    </div>
  
  </div>
    )
 }
export default Inicio

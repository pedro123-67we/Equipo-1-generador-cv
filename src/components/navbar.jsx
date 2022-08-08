import React from 'react'
import {Link} from 'react-router-dom'

export const navbar = () => {
return (
    <div>    
        <nav className="navbar fixed-top navbar-expand-lg bg-light">
    <div className="container">
        { <Link to='/'> <img src= 'https://universidadesgratuitas.com/wp-content/uploads/2018/10/Universidad-Tecnológica-de-Aguascalientes.png' width='200'/></Link> }
<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
<ul className="navbar-nav mx-auto">
<li className="nav-item">
    <Link className="nav-link active" to="/inicio">Inicio</Link> 
    </li>
    <li className="nav-item">
    <Link className="nav-link active" to="/generador">Generador</Link> 
    </li>
    <li className="nav-item">
    <Link className="nav-link active" to="/vistaCv">CV</Link> 
    </li>
</ul>
</div>
</div>
</nav></div>
)
}
export default navbar;

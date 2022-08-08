import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import '../App'


const Login = () => {
    return (
        <div>
            <form>
                <div className="login">
                    <div className='titulo'>
                        <FaUserCircle className='user-icon'/>
                        <h1>Login</h1>
                    </div>
                        <label htmlFor="*">Email:</label>
                        <input className="inpu2" type={'email'} placeholder="Escribe tu email"/>
                        <label htmlFor="*">Password:</label>
                        <input className="inpu2" type={'password'}placeholder="Escribe tu contraseña" />
                        <button className='ingresar'>INGRESAR</button>
                        <Link to="/Registro">Registrate</Link>      
                    </div>
            </form>
    </div>
)
}

export default Login

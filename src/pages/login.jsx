import React, { Component, response } from 'react'
import * as axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import '../App'
import Cookies from 'universal-cookie';



const baseUrl ='http://localhost:4000/usuarios/';
const cookies = new Cookies();

class Login extends Component {

    state={
        form:{
            "email":'',
            "password":''
        }
    }


    manejadorSubmit =e=>{
        e.preventDefault();
    }

    manejadorChange =async e=>{
        await  this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    manejadorBoton=async()=>{
        let url = baseUrl
        await axios.get(url,{params:{email: this.state.form.email, password: this.state.form.password}})
        .then(response=>{
            return response.data;
            })
            .then(response =>{
                if(response.length>0){
                    var respuesta = response[0];
                    cookies.set("id",respuesta.id, {path:"/"})
                    cookies.set("nombre", respuesta.nombre,{path:"/"})
                    Swal.fire(`Bienvenido ${respuesta.nombre}`)
                    window.location.href="/inicio"
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            })
        .catch(error=>{
            console.log(error)
        })
    }

    render(){
    return (
<div>
    <form onSubmit={this.manejadorSubmit}>
    <div className="login">
        <div className='titulo'>
            <FaUserCircle className='user-icon'/>
            <h1>Login</h1>
        </div>
            <label>Email:</label>
            <input type={'text'} placeholder="Escribe tu email" name='email'
            onChange={this.manejadorChange}/>
            <label>Password:</label>
            <input type={'password'}placeholder="Escribe tu contraseña" name='password'
            onChange={this.manejadorChange}/>
            <button className='ingresar' onClick={this.manejadorBoton}>INICIAR SESION</button>
            <Link to="/Registro">Registrate</Link>      
        </div>
        </form>
</div>
)}
}

export default Login

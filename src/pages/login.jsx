import React, { Component, response } from 'react'
import * as axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import '../App'
import Cookies from 'universal-cookie';
import { useTranslation } from 'react-i18next';


const baseUrl ='https://generador-cv.herokuapp.com/usuarios';
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
        const [t, i18n] = useTranslation("global")
    return (
    
<div>
    <form onSubmit={this.manejadorSubmit}>
    <div className="login">
                    <div className='titulo'>
                    <button onClick={() => i18n.changeLanguage("es")}>Esapañol</button>
                    <button onClick={() => i18n.changeLanguage("en")}>Ingles</button>
                    <br/> <br/>
                        <FaUserCircle className='user-icon'/>
                        <h1>Login</h1>
                    </div>
                        <label htmlFor="*">{t("email.email")}:</label>
                        <input type={'email'} placeholder={t("wirtee.ema")}/>
                        <label htmlFor="*">{t("pass.pass")}:</label>
                        <input type={'password'}placeholder={t("write.con")} />
                        <button className='ingresar'>{t("ingre.ingre")}</button>
                        <Link to="/Registro">{t("reg.reg")}</Link>      
                    </div>
        </form>
</div>
)}
}

export default Login

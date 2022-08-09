import * as axios from 'axios';
import React from 'react'
import {useState } from 'react'
import '../App'
import {Link} from 'react-router-dom'
import Swal from 'sweetalert2'
import { useTranslation } from 'react-i18next'

export default function Registro () {
    const [nombre, setNombre]= useState ('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState ('');
    const [telefono, setTelefono] = useState('');



    const registrar = async(e)=>{
        e.preventDefault()
        const newUser ={nombre,apellidos,email,password,telefono}
        const respuesta = await axios.post('https://generador-cv.herokuapp.com/usuarios',newUser)
        Swal.fire({
            icon: 'success',
            title: 'Your user saved',
            showConfirmButton: false,
            timer: 1500
        })
    }

    const [t, i18n] = useTranslation("global")
return (
    
        <div className="registro">
            <form onSubmit={registrar}>
             <button onClick={() => i18n.changeLanguage("es")}>Esapañol</button>
                    <button onClick={() => i18n.changeLanguage("en")}>Ingles</button>
                    <br/> <br/>
                <div className="container">
                    <label htmlFor="">{t("name.nom")}:</label>
                    <input type={'text'} />
                    <label htmlFor="">{t("apelli.appe")}:</label>
                    <input type={'email'} />
                    <label htmlFor="">{t("email.email")}:</label>
                    <input type={'text'} />
                    <label htmlFor="">{t("cell.phone")}:</label>
                    <input type={'tel'} />
                    <label htmlFor="">{t("pass.pass")}:</label>
                    <input type="text" />
                    <button>{t("save.save")}</button>
                </div>
            </form>
        </div>
)

} 


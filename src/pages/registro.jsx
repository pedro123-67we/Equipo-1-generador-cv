import * as axios from 'axios';
import React from 'react'
import {useState } from 'react'
import '../App'
import Swal from 'sweetalert2'

export default function Registro () {
    const [nombre, setNombre]= useState ('');
    const [apellidos, setApellidos] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword]= useState ('');
    const [telefono, setTelefono] = useState('');



    const registrar = async(e)=>{
        e.preventDefault()
        const newUser ={nombre,apellidos,email,password,telefono}
        const respuesta = await axios.post('http://localhost:4000/usuarios',newUser)
        Swal.fire({
            icon: 'success',
            title: 'Your user saved',
            showConfirmButton: false,
            timer: 1500
        })
    }


return (
        <div className="registro">
            <form onSubmit={registrar}>
                <div className="container">
                    <label>Nombre:</label>
                    <input type={'text'} required  placeholder='Nombre'
                    onChange={e=>setNombre(e.target.value)}/>
                    <label>Apellidos:</label>
                    <input type={'text'} required placeholder='Apellidos'
                    onChange={e=>setApellidos(e.target.value)} />
                    <label>Email:</label>
                    <input type={'email'} required placeholder='Email'
                    onChange={e=>setEmail(e.target.value)}/>
                    <label>Telefono:</label>
                    <input type={'tel'} required placeholder='Telefono'
                    onChange={e=>setTelefono(e.target.value)} />
                    <label>Password:</label>
                    <input type="password"  required placeholder='Password'
                    onChange={e=>setPassword(e.target.value)}/>
                    <button type='submit'>Save</button>
                </div>
            </form>
        </div>
)

} 


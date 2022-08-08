import React, {useState,useEffect}from 'react'
import * as axios from 'axios';
import Swal from 'sweetalert2'
import Navbar from "../components/navbar"


export default function GeneradorCv() {
    const [nombre, setNombre]= useState ('');
    const [apellidos, setApellidos] = useState('');
    const [carrera, setCarrera] = useState('');
    const [email, setEmail] = useState('')
    const [experiencia, setExperiencia]= useState('');
    const [educacion, setEducacion]= useState('');
    const [telefono, setTelefono] = useState('');
    const [descripcion, setDescripcion]= useState('');
    const [redes, setRedes]= useState('');

    const crearcv = async(e)=>{
        e.preventDefault()
        const newCurriculum ={nombre,apellidos,email,telefono,carrera,experiencia,educacion,descripcion,redes}
        const respuesta = await axios.post('https://generador-cv.herokuapp.com/usuarios',newCurriculum)
        Swal.fire({
            icon: 'success',
            title: 'Your curriculum saved',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
    <div>
            <form onSubmit={crearcv}>
        <div className="cont-generador">
                <div className="label1">
                    <label htmlFor="">Nombre:</label>
                    <input className="inpu1" type={'text'} placeholder="Nombre"
                    onChange={e=>setNombre(e.target.value)}/>
                    <label htmlFor="">Apellido:</label>
                    <input className="inpu1" type={'text'} placeholder="Apellido"
                    onChange={e=>setApellidos(e.target.value)}/>
                    <label htmlFor="">Carrera:</label>
                    <input className="inpu1" type={'text'} placeholder="Carrera" 
                    onChange={e=>setCarrera(e.target.value)}/>
                    <label htmlFor="">Email:</label>
                    <input className="inpu1" type={'text'} placeholder="Email"
                    onChange={e=>setEmail(e.target.value)} />
                    <label htmlFor="">Experiencia:</label>
                    <input className="inpu1" type={'text'} placeholder="Experiencia"
                    onChange={e=>setExperiencia(e.target.value)} />
                </div>
            
            <div className="label1">
                    <label htmlFor="">Telefono:</label>
                    <input className="inpu1" type={'tel'} placeholder="telefono"
                    onChange={e=>setTelefono(e.target.value)}/>
                    <label htmlFor="">Eduacacion:</label>
                    <input className="inpu1" type={'text'} placeholder="Educacion"
                    onChange={e=>setEducacion(e.target.value)}/>
                    <label htmlFor="">Descripcion:</label>
                    <input className="inpu1" type={'text'}  placeholder="Descripcion"
                    onChange={e=>setDescripcion(e.target.value)}/>
                    <label htmlFor="">Redes:</label>
                    <input className="inpu1" type={'text'} placeholder="Redes"
                    onChange={e=>setRedes(e.target.value)} />  
            </div>
            <button className="guardar" type='submit'>Save</button>           
            </div>
    </form>
    <Navbar/>
    </div>
)
}



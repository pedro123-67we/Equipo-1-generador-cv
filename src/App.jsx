import React from 'react';
import {useState, useEffect } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './pages/login.jsx'
import Inicio from './pages/inicio';
import FormRegistro from './pages/registro'
import GeneradorCv from './pages/Generador-cv';
import VistaCv from './pages/vistaCv';




function App() {
 // const [count, setCount] = useState(0);
  //const [nombre, setnombre]= useState ('');
  //const [apellidos, setapellidos] = useState('');
  //const [carrera, setcarrera] = useState('');
  //const [email, setemail] = useState('')
  //const [password, setPassword]= useState ('');
  //const [experiencia, setexperiencia]= useState('');
  //const [educacion, seteducacion]= useState('');
  //const [telefono, settelefono] = useState('');
  //const [descripcion, setdescripcion]= useState('');
  //const [redes, setredes]= useState('');
  const [curriculum, setCurriculum]  =useState(null);
  function fetchCurriculum (){
    fetch("http://localhost:4000/usuarios")
    .then((response) =>response.json())
    .then((data)=>{
        setCurriculum(data[0]);
        console.log(data[0]);
    });

    React.useEffect(()=>{
        fetchCurriculum();
    }, []);
  
    }




  return (
    <Router>
      <div className="App">
          <Routes>
              <Route path="/registro" element={<FormRegistro />}>
              </Route>
              <Route path ="/" element={<Login />}>
              </Route>
              <Route path ="/generador" element={<GeneradorCv />}>
              </Route>
              <Route path="/vistaCv" curriculum={curriculum} element={<VistaCv />}>
              </Route>
              <Route path ="/inicio" element={<Inicio />}>
              </Route>
            </Routes>
      </div>
    </Router>
  )
}

export default App

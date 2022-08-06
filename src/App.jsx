import React from 'react';
import {useState } from 'react'
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Login from './pages/login.jsx'
import Inicio from './pages/inicio';
import Registro from './pages/registro'
import GeneradorCv from './pages/Generador-cv';
import VistaCv from './pages/vistaCv';



function App() {
  const [count, setCount] = useState(0);
  const [UserName, setUserName]= useState (0);
  const [password,setPassword]= useState (0);
  


  return (
    <Router>
      <div className="App">
          <Routes>
              <Route path="/registro" element={<Registro />}>
              </Route>
              <Route path ="/" element={<Login />}>
              </Route>
              <Route path ="/generador" element={<GeneradorCv />}>
              </Route>
              <Route path="/vistaCv" element={<VistaCv />}>
              </Route>
              <Route path ="/inicio" element={<Inicio />}>
              </Route>
            </Routes>
      </div>
    </Router>
  )
}

export default App

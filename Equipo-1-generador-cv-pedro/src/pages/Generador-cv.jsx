import React from 'react'


const GeneradorCv= ()=>(
    <div className="generador">
        <form >
            <div className="container-generador">
                <label htmlFor="">Nombre:</label>
                <input type={'text'} />

                <label htmlFor="">Apellidos:</label>
                <input type={'text'} />
                
                <label htmlFor="">Carrera:</label>
                <input type={'text'}/>
                <label htmlFor="">Email:</label>
                <input type={'email'} />
                <label htmlFor="">Experiencia:</label>
                <input type={'text'}/>
                <label htmlFor="">Educacion:</label>
                <input type={'text'}/>
                <label htmlFor="">Descripcion:</label>
                <input type={'text'}/>
                <label htmlFor="">Telefono:</label>
                <input type={'tel'} />
                <label htmlFor="">Redes:</label>
                <input type={'text'}/>

                <button>Save</button>
            </div>
        </form>
    </div>
)

export default GeneradorCv

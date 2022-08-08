import React from 'react'

const GeneradorCv= ()=>(
    <div>
    <form>
        <div className="cont-generador">
                <div className="label1">
                    <label htmlFor="">Nombre:</label>
                    <input className="inpu1" type={'text'} />
                    <label htmlFor="">Apellido:</label>
                    <input className="inpu1" type={'text'} />
                    <label htmlFor="">Carrera:</label>
                    <input className="inpu1" type={'text'} />
                    <label htmlFor="">Email:</label>
                    <input className="inpu1" type={'text'} />
                    <label htmlFor="">Experiencia:</label>
                    <input className="inpu1" type={'text'} />
                </div>
            
            <div className="label1">
                    <label htmlFor="">Telefono:</label>
                    <input className="inpu1" type={'tel'} />
                    <label htmlFor="">Eduacacion:</label>
                    <input className="inpu1" type={'text'} />
                    <label htmlFor="">Descripcion:</label>
                    <input className="inpu1" type={'text'} />
                    <label htmlFor="">Redes:</label>
                    <input className="inpu1" type={'text'} />  
            </div>
            <button className="guardar">Save</button>           
            </div>
    </form>
</div>
)

export default GeneradorCv


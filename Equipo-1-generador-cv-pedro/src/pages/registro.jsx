import React from 'react'
import '../App'


const Registro= ()=>(
        <div className="registro">
            <form >
                <div className="container">
                    <label htmlFor="">Nombre:</label>
                    <input type={'text'} />
                    <label htmlFor="">Apellidos:</label>
                    <input type={'email'} />
                    <label htmlFor="">Email:</label>
                    <input type={'text'} />
                    <label htmlFor="">Telefono:</label>
                    <input type={'tel'} />
                    <label htmlFor="">Password:</label>
                    <input type="text" />
                    <button>Save</button>
                </div>
            </form>
        </div>
    )
    

export default Registro
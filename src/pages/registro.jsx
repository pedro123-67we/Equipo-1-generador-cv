import React from 'react'
import '../App'
import { useTranslation } from 'react-i18next'

const Registro= ()=>{
    const [t, i18n] = useTranslation("global")
    return(
        <div className="registro">
            <form >
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
        

export default Registro
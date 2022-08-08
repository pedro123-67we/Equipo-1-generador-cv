import React from 'react'
import { FaUserCircle } from 'react-icons/fa';
import {Link} from 'react-router-dom'
import '../App'
import { useTranslation } from 'react-i18next';

const Login = () => {
    const [t, i18n] = useTranslation("global")
    return (
        <div>
            <form>
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
)
}

export default Login
import React from 'react'
import Navbar from "../components/navbar"
import { useTranslation } from 'react-i18next'

export const Inicio = () => {
    const [t, i18n] = useTranslation("global")
    return (
    <div>
        <h1>{t("inicio.ini")}</h1>
        <Navbar />
    </div>
    ) 
}
export default Inicio

import React, { Component } from 'react'

/* Styles */
import style from './Home.module.css'

/* Components and Pages */
import Navbar from '../../components/Navbar'


export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <h2 className={style.description}>Bienvenid@ a la pagina de turnos de  MeTocaFinal LTDA, esperamos tengas una excelente experiencia con nosotros</h2>
            </>
        )
    }
}
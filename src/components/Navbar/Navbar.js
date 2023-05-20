import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/* Styles */
import style from './Navbar.module.css'

/* Components and Pages */


export default class Navbar extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <>
                <nav className={style.nav}>
                    <Link to='/'>Inicio</Link>
                    <Link to='/crear-turno'>Crea tu turno</Link>
                    <Link to='/turnos'>Tus turnos</Link>
                    <Link to='/califica'>Califica</Link>
                    <Link to='/sesion'>Sesión</Link>
                </nav>
            </>
        )
    }
}
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/* Styles */
import style from './Navbar.module.css'

/* Components and Pages */
import ButtonLine from '../ButtonLine'


export default class Navbar extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <header className={style.header}>
                <div className={style.center}>
                    <h1>Logo</h1>
                    <nav className={style.nav}>
                        <Link className={style.link} to='/'>Inicio</Link>
                        <Link className={style.link} to='/crear-turno'>Crea tu turno</Link>
                        <Link className={style.link} to='/turnos'>Tus turnos</Link>
                        <Link className={style.link} to='/califica'>Califica</Link>
                    </nav>
                    <ButtonLine>
                        Sesión
                    </ButtonLine>
                </div>
            </header>
        )
    }
}
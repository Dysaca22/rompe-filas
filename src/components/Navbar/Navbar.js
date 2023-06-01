import React, { Component } from 'react'
import { Link } from 'react-router-dom'

/* Styles */
import style from './Navbar.module.css'

/* Components and Pages */
import ButtonLine from '../ButtonLine'
import Register from '../Register'


export default class Navbar extends Component {

    constructor(props) {
        super()
    }

    registerOnClick() {
        const register = document.getElementById('register');
        register.classList.remove('is-hidden');
    }

    render() {
        return (
            <>
                <header className={style.header}>
                    <div className={style.center}>
                        <h1>Logo</h1>
                        <nav className={style.nav}>
                            <ButtonLine><Link className={style.link} to='/'>Inicio</Link></ButtonLine>
                            <ButtonLine><Link className={style.link} to='/crear-turno'>Crea tu turno</Link></ButtonLine>
                            <ButtonLine><Link className={style.link} to='/turnos'>Tus turnos</Link></ButtonLine>
                            <ButtonLine><Link className={style.link} to='/califica'>Califica</Link></ButtonLine>
                        </nav>
                        <ButtonLine function={this.registerOnClick}>
                            <span className={style.link}>Sesión</span>
                        </ButtonLine>
                    </div>
                </header>
                <Register />
            </>
        )
    }
}
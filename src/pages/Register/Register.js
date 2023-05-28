import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
/* Styles */
import style from './Register.module.css'

/* Components and Pages */
import Navbar from '../../components/Navbar'


export default class Register extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <>
                <Navbar />
                <div className={style.loginWrapper}>
                    <h2>Registrate</h2>
                    <section className={style.form_back}>
                            <form class={style.form}>
                                <label className={style.inputs}>
                                    <p>Nombre</p>
                                    <input type="text" />
                                </label>
                                <label className={style.inputs}>
                                    <p>Correo </p>
                                    <input type="email" />
                                </label>
                                <label className={style.inputs}>
                                    <p>Telefono</p>
                                    <input type="tel" />
                                </label>
                                <div >
                                    <button className={style.submit}type="submit">Enviar</button>
                                </div>
                            </form>
                    </section>
                </div>
            </>
        )
    }
}
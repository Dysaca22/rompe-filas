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
                        <div className={style.form_section}>
                            <form class="">
                                <label>
                                    <p>Nombre</p>
                                    <input type="text" />
                                </label>
                                <label>
                                    <p>Correo </p>
                                    <input type="email" />
                                </label>
                                <label>
                                    <p>Telefono</p>
                                    <input type="tel" />
                                </label>
                                <div >
                                    <button className={style.submit}type="submit">Enviar</button>
                                </div>
                            </form>
                        </div>
                    </section>
                </div>
            </>
        )
    }
}
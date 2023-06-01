import React, { Component } from 'react'

/* Styles */
import style from './CreateTurn.module.css'

/* Components and Pages */
import Navbar from '../../components/Navbar'
import TheCalendar from '../../components/Calendar';

import "@progress/kendo-theme-default/dist/all.css";

export default class Register extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <div >
                <Navbar />
                <div className={style.title}>Seleccione su turno de acuerdo a la disponibilidad</div>
                <div className={style.calendar}><TheCalendar /></div>

            </div>
        );
    }
}

import React, { Component } from 'react'

/* Styles */
//import style from './ListTurn.module.css'

/* Components and Pages */
import Navbar from '../../components/Navbar'


export default class ListTurn extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <>
                <Navbar />
                <h1>Lista de turnos</h1>
            </>
        )
    }
}
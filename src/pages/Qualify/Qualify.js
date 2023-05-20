import React, { Component } from 'react'

/* Styles */
//import style from './Qualify.module.css'

/* Components and Pages */
import Navbar from '../../components/Navbar'


export default class Qualify extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <>
                <Navbar />
                <h1>Calificación</h1>
            </>
        )
    }
}
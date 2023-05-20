import React, { Component } from 'react'

/* Styles */
//import style from './Register.module.css'

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
                <h1>Registros</h1>
            </>
        )
    }
}
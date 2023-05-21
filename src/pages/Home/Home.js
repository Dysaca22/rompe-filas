import React, { Component } from 'react'

/* Styles */
//import style from './Home.module.css'

/* Components and Pages */
import Navbar from '../../components/Navbar'


export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <h1>Inicio</h1>
            </>
        )
    }
}
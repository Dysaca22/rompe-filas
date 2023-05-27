import React, { Component } from 'react'

/* Styles */
//import style from './CreateTurn.module.css'

/* Components and Pages */
import Navbar from '../../components/Navbar'
import MyCalendar from '../../components/Calendar/Calendar';


export default class CreateTurn extends Component {

    constructor(props) {
        super()
    }
    
    render() {
        return (
            <>
            
                <Navbar />
                <h1>Creación de turnos</h1>
                <MyCalendar />
                
            </>
        )
    }
}
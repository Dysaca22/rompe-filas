import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Styles */
//import style from './App.module.css'

/* Components and Pages */
import Home from './pages/Home'
import CreateTurn from './pages/CreateTurn'
import ListTurn from './pages/ListTurn'
import Qualify from './pages/Qualify'
import Register from './pages/Register'


export default class App extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/crear-turno' element={<CreateTurn />} />
                        <Route path='/turnos' element={<ListTurn />} />
                        <Route path='/califica' element={<Qualify />} />
                        <Route path='/sesion' element={<Register />} />
                    </Routes>
                </BrowserRouter>
            </>
        )
    }
}
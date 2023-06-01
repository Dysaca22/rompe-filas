import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Styles */
import style from './App.module.css'

/* Components and Pages */
import Home from './pages/Home'
import CreateTurn from './pages/CreateTurn'
import ListTurn from './pages/ListTurn'
import Qualify from './pages/Qualify'


export default class App extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <>
                <div className={style.app}>
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/crear-turno' element={<CreateTurn />} />
                            <Route path='/turnos' element={<ListTurn />} />
                            <Route path='/califica' element={<Qualify />} />
                        </Routes>
                    </BrowserRouter>
                </div>
            </>
        )
    }
}
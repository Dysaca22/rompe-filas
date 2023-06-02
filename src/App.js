import React, { Component, forwardRef, createRef } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Styles */
import style from './App.module.css'

/* Components and Pages */
import Navbar from './components/Navbar'
import Register from './components/Register'
import Home from './pages/Home'
import ListTurn from './pages/ListTurn'


export default class App extends Component {

    constructor(props) {
        super()
    }

    render() {
        const refNavbar = createRef()
        const refHome = createRef()
        const refListTurn = createRef()
        const ForwardNavbar = forwardRef((props, ref) => (
            <Navbar refHome={props.refHome} refListTurn={props.refListTurn} ref={ref}>{props.children}</Navbar>
        ))
        const ForwardHome = forwardRef((props, ref) => (
            <Home ref={ref} />
        ))
        const ForwardListTurn = forwardRef((props, ref) => (
            <ListTurn refNavbar={props.refNavbar} ref={ref} />
        ))
        return (
            <div className={style.app}>
                <BrowserRouter>
                    <ForwardNavbar refHome={refHome} refListTurn={refListTurn} ref={refNavbar}>
                        <Register refNavbar={refNavbar} refHome={refHome} refListTurn={refListTurn} />
                    </ForwardNavbar>
                    <Routes>
                        <Route path='/' element={<ForwardHome ref={refHome} />} />
                        <Route path='/turns' element={<ForwardListTurn refNavbar={refNavbar} ref={refListTurn} />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
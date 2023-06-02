import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

/* Styles */
import style from './App.module.css'

/* Components and Pages */
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ListTurn from './pages/ListTurn'


export default class App extends Component {

    constructor(props) {
        super()
    }

    render() {
        return (
            <div className={style.app}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/turns' element={<ListTurn />} />
                    </Routes>
                </BrowserRouter>
            </div>
        )
    }
}
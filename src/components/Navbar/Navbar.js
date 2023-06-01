import React, { Component, createRef } from 'react'
import { Link } from 'react-router-dom'

/* Styles */
import style from './Navbar.module.css'

/* Components and Pages */
import ButtonLine from '../ButtonLine'
import Register from '../Register'


export default class Navbar extends Component {

    constructor(props) {
        super()
        this.logRef = createRef();
        let tokenStorage = JSON.parse(localStorage.getItem('tokenStorage')) || ''
        this.initialNameLog = tokenStorage === '' ? 'Log In' : 'Log Out'
    }

    registerOnClick = () => {
        const name = this.logRef?.current.state.name.props.children
        if (name === 'Log In') {
            const register = document.getElementById('register')
            register.classList.remove('is-hidden')
        } else{
            window.localStorage.setItem("tokenStorage", JSON.stringify(''))
            this.logRef?.current.changeName(<span className={style.link}>Log In</span>)
        }
    }

    changeTitleLog = (newName) => {
        this.logRef?.current.changeName(<span className={style.link}>{ newName }</span>)
    }

    render() {
        return (
            <>
                <header className={style.header}>
                    <div className={style.center}>
                        <h1>Logo</h1>
                        <nav className={style.nav}>
                            <ButtonLine><Link className={style.link} to='/'>Home</Link></ButtonLine>
                            <ButtonLine><Link className={style.link} to='/turns'>Your Turns</Link></ButtonLine>
                        </nav>
                        <ButtonLine ref={this.logRef} id='log' clickButton={this.registerOnClick} >
                            <span className={style.link}>{this.initialNameLog}</span>
                        </ButtonLine>
                    </div>
                </header>
                <Register changeTitle={this.changeTitleLog.bind(this)} />
            </>
        )
    }
}
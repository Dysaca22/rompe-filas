import React, { Component, createRef } from 'react'
import { Link } from 'react-router-dom'

/* Styles */
import style from './Navbar.module.css'

/* Components and Pages */
import ButtonLine from '../ButtonLine'
import Bell from '../Bell'
import NotificationBoard from '../NotificationBoard'


export default class Navbar extends Component {

    constructor(props) {
        super()
        this.logRef = createRef();
        let tokenStorage = JSON.parse(localStorage.getItem('tokenStorage')) || ''
        this.initialNameLog = tokenStorage === '' ? 'Log In' : 'Log Out'
        this.refNotiBoard = createRef()
        this.refHome = props.refHome
        this.refListTurn = props.refListTurn
    }

    registerOnClick = () => {
        const name = this.logRef?.current.state.name.props.children
        if (name === 'Log In') {
            const register = document.getElementById('register')
            register.classList.remove('is-hidden')
        } else {
            window.localStorage.setItem("tokenStorage", JSON.stringify(''))
            this.logRef?.current.changeName(<span className={style.link}>Log In</span>)
            this.refListTurn.current.setState({
                token: ''
            })
            this.refNotiBoard.current.setState({
                token: ''
            })
        }
    }

    bellOnClick = () => {
        const notificationBoard = document.getElementById('notificationBoard')
        notificationBoard.classList.remove('is-hidden')
        const bell = document.getElementById('bell')
        bell.classList.remove('bell')
    }

    changeTitleLog = (newName) => {
        this.logRef?.current.changeName(<span className={style.link}>{newName}</span>)
    }

    render() {
        return (
            <>
                <header className={style.header}>
                    <div className={style.center}>
                        <h1>Logo</h1>
                        <nav className={style.nav}>
                            <ButtonLine><Link className={style.link} to='/'>Home</Link></ButtonLine>
                            <ButtonLine><Link className={style.link} to='/turns'>Turns</Link></ButtonLine>
                        </nav>
                        <div className={style.right}>
                            <Bell clickButton={this.bellOnClick} />
                            <ButtonLine ref={this.logRef} id='log' clickButton={this.registerOnClick} >
                                <span className={style.link}>{this.initialNameLog}</span>
                            </ButtonLine>
                        </div>
                    </div>
                </header>
                <NotificationBoard ref={this.refNotiBoard} />
                {this.props.children}
            </>
        )
    }
}